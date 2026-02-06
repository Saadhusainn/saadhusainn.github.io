// Correct PDF worker URL
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

let books = [];
let filteredBooks = [];
let currentDisplayIndex = 0;
const PAGE_SIZE = 30;
let selectedBook = null;
let pageCount = 2;
let pdfDocument = null;
let loadedPages = new Map();
let initialPagesLoaded = false;
let watermarkImage = null;
let watermarkOpacity = 0.14;
let previewTimeout = null;

// File upload handling
document.getElementById('uploadInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
        loadUploadedBook(file);
    } else {
        showError('Please select a valid PDF file.');
    }
});

// Watermark upload handling
document.getElementById('watermarkInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(event) {
            watermarkImage = new Image();
            watermarkImage.onload = function() {
                showSuccess('Watermark uploaded successfully!');
                updatePreview();
            };
            watermarkImage.src = event.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        showError('Please select a valid image file.');
    }
});

function updateWatermarkOpacity() {
    const slider = document.getElementById('watermarkOpacity');
    const valueSpan = document.getElementById('opacityValue');
    watermarkOpacity = parseInt(slider.value) / 100;
    valueSpan.textContent = slider.value + '%';
    updatePreview();
}

async function loadUploadedBook(file) {
    try {
        const container = document.getElementById('errorContainer');
        container.innerHTML = `
            <div class="loading">
                <div class="book-loader">
                    <div class="book-page"></div>
                    <div class="book-page"></div>
                    <div class="book-page"></div>
                </div>
                Loading your PDF...
            </div>
        `;

        const arrayBuffer = await file.arrayBuffer();
        pdfDocument = await pdfjsLib.getDocument({data: arrayBuffer}).promise;
        
        selectedBook = {
            name: file.name.replace('.pdf', ''),
            displayName: file.name.replace('.pdf', ''),
            pdf: pdfDocument,
            type: 'uploaded',
            file: file
        };

        document.getElementById('pageInfo').textContent = `This PDF has ${pdfDocument.numPages} pages`;
        document.getElementById('collageSettings').classList.remove('hidden');
        document.getElementById('watermarkSection').classList.remove('hidden');
        updatePageInputs();
        await updatePreview();
        
        showSuccess('✅ Your PDF loaded successfully!');
        
    } catch (error) {
        showError(`Error loading PDF: ${error.message}`);
    }
}

async function loadBooks() {
    try {
        const list = document.getElementById('booksList');
        list.innerHTML = `
            <div class="loading">
                <div class="book-loader">
                    <div class="book-page"></div>
                    <div class="book-page"></div>
                    <div class="book-page"></div>
                </div>
                Loading books...
            </div>
        `;
        
        // Load books from external index file
        books = [...booksIndex.single, ...booksIndex.multi];
        filteredBooks = [...books];
        currentDisplayIndex = 0;
        
        // Initial display of first PAGE_SIZE books
        displayBooksPaginated();
        
    } catch (error) {
        showError('Error loading books structure.');
    }
}

function loadMoreBooks() {
    currentDisplayIndex += PAGE_SIZE;
    displayBooksPaginated();
}

function displayBooksPaginated() {
    const list = document.getElementById('booksList');
    
    // Clear list for initial display, append for "Show More"
    if (currentDisplayIndex <= PAGE_SIZE) {
        list.innerHTML = '';
    }
    
    const booksToDisplay = filteredBooks.slice(currentDisplayIndex, currentDisplayIndex + PAGE_SIZE);
    
    if (booksToDisplay.length === 0 && currentDisplayIndex === 0) {
        const searchQuery = document.getElementById('searchInput').value;
        if (searchQuery.length > 0) {
            list.innerHTML = '<div class="no-results">No books found matching your search</div>';
        } else {
            list.innerHTML = '<div class="no-results">No books available</div>';
        }
        document.getElementById('showMoreBtn').classList.add('hidden');
        return;
    }
    
    booksToDisplay.forEach((book) => {
        const item = createBookItem(book);
        list.appendChild(item);
    });
    
    // Show/Hide "Show More" button
    const showMoreBtn = document.getElementById('showMoreBtn');
    if (currentDisplayIndex + PAGE_SIZE < filteredBooks.length) {
        showMoreBtn.classList.remove('hidden');
        showMoreBtn.innerHTML = `<span class="button-top">📚 Show More (${filteredBooks.length - (currentDisplayIndex + PAGE_SIZE)} remaining)</span>`;
    } else {
        showMoreBtn.classList.add('hidden');
    }
    
    // Show book request section if no results
    const bookRequestSection = document.getElementById('bookRequestSection');
    const searchQuery = document.getElementById('searchInput').value;
    if (filteredBooks.length === 0 && searchQuery.length > 0) {
        bookRequestSection.classList.remove('hidden');
    } else {
        bookRequestSection.classList.add('hidden');
        document.getElementById('requestForm').classList.add('hidden');
    }
}

function createBookItem(book) {
    const item = document.createElement('div');
    item.className = 'book-item';
    
    if (book.type === 'multi') {
        item.classList.add('book-folder');
        let metaHTML = '';
        if (book.publisher || book.language) {
            metaHTML = `<div class="book-meta">`;
            if (book.publisher) metaHTML += `<strong>Publisher:</strong> ${book.publisher}<br>`;
            if (book.language) metaHTML += `<strong>Language:</strong> ${book.language}`;
            metaHTML += `</div>`;
        }
        
        const dropdownIcon = book.isDropdownOpen ? '▶' : '▶';
        const dropdownClass = book.isDropdownOpen ? 'dropdown-toggle open' : 'dropdown-toggle';
        
        item.innerHTML = `
            <div class="book-header">
                <div class="book-title">
                    <div class="book-title-text">
                        <img src="assets/book-type-multi.png" alt="Multi-book" class="book-icon">
                        <span>${book.name}</span>
                    </div>
                    <span class="${dropdownClass}" onclick="toggleVolumeDropdown(event, '${book.name}')">
                        ${dropdownIcon}
                    </span>
                </div>
                <div class="book-main-actions">
                    <button class="action-button download-btn" onclick="downloadAllVolumes('${book.name}')">
                        <img src="assets/download.png" alt="Download All">
                    </button>
                </div>
            </div>
            ${metaHTML}
            <div class="volume-dropdown ${book.isDropdownOpen ? 'open' : ''}" id="dropdown-${book.name}">
                <div class="volumes-list">
                    ${book.volumes.map(vol => `
                        <div class="volume-item" onclick="selectVolume(event, '${book.name}', '${vol.name}', '${vol.file}')">
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <span>📖 ${vol.name}</span>
                                <div class="book-actions">
                                    <button class="action-button download-btn" onclick="event.stopPropagation(); downloadVolume('${book.name}', '${vol.name}', '${vol.file}')">
                                        <img src="assets/download.png" alt="Download">
                                    </button>
                                    <button class="action-button view-btn" onclick="event.stopPropagation(); viewVolume('${book.name}', '${vol.name}', '${vol.file}')">
                                        <img src="assets/view.png" alt="View">
                                    </button>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    } else {
        let metaHTML = '';
        if (book.publisher || book.language) {
            metaHTML = `<div class="book-meta">`;
            if (book.publisher) metaHTML += `<strong>Publisher:</strong> ${book.publisher}<br>`;
            if (book.language) metaHTML += `<strong>Language:</strong> ${book.language}`;
            metaHTML += `</div>`;
        }
        
        item.innerHTML = `
            <div class="book-header">
                <div class="book-title">
                    <div class="book-title-text">
                        <img src="assets/book-type-single.png" alt="Single book" class="book-icon">
                        <span>${book.name}</span>
                    </div>
                </div>
                <div class="book-main-actions">
                    <button class="action-button download-btn" onclick="downloadBook('${book.name}', '${book.file}')">
                        <img src="assets/download.png" alt="Download">
                    </button>
                    <button class="action-button view-btn" onclick="viewBook('${book.name}', '${book.file}')">
                        <img src="assets/view.png" alt="View">
                    </button>
                </div>
            </div>
            ${metaHTML}
        `;
        item.onclick = () => selectBook(book);
    }
    
    return item;
}

// Optimized search with debouncing
let searchTimeout = null;
function searchBooks() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    
    // Clear previous timeout
    if (searchTimeout) {
        clearTimeout(searchTimeout);
    }
    
    // Set new timeout for debouncing (300ms)
    searchTimeout = setTimeout(() => {
        // Send search notification
        if (query.length > 0) {
            sendSearchNotification(query);
        }
        
        // Filter books based on query
        filteredBooks = books.filter(book => {
            // Check book name
            if (book.name.toLowerCase().includes(query)) {
                return true;
            }
            
            // Check publisher
            if (book.publisher && book.publisher.toLowerCase().includes(query)) {
                return true;
            }
            
            // Check language
            if (book.language && book.language.toLowerCase().includes(query)) {
                return true;
            }
            
            // For multi-volume books, check volume names too
            if (book.type === 'multi' && book.volumes) {
                return book.volumes.some(vol => vol.name.toLowerCase().includes(query));
            }
            
            return false;
        });
        
        // Reset pagination
        currentDisplayIndex = 0;
        
        // Display filtered results
        displayBooksPaginated();
        
    }, 300); // 300ms debounce
}

function showError(message) {
    const container = document.getElementById('errorContainer');
    container.innerHTML = `<div class="error-message">${message}</div>`;
    setTimeout(() => {
        container.innerHTML = '';
    }, 5000);
}

function showSuccess(message) {
    const container = document.getElementById('errorContainer');
    container.innerHTML = `<div class="success-message">${message}</div>`;
    setTimeout(() => {
        container.innerHTML = '';
    }, 3000);
}

function toggleVolumeDropdown(event, bookName) {
    event.stopPropagation();
    const book = books.find(b => b.name === bookName && b.type === 'multi');
    if (book) {
        book.isDropdownOpen = !book.isDropdownOpen;
        
        // Optimized: Only update the specific book item
        const item = event.target.closest('.book-item');
        if (item) {
            const dropdown = item.querySelector('.volume-dropdown');
            const toggle = item.querySelector('.dropdown-toggle');
            
            if (book.isDropdownOpen) {
                dropdown.classList.add('open');
                toggle.classList.add('open');
                // Pre-cache volume items for better performance
                setTimeout(() => {
                    const volumeItems = dropdown.querySelectorAll('.volume-item');
                    volumeItems.forEach(vol => {
                        vol.style.opacity = '0';
                        setTimeout(() => {
                            vol.style.transition = 'opacity 0.2s';
                            vol.style.opacity = '1';
                        }, 10);
                    });
                }, 50);
            } else {
                dropdown.classList.remove('open');
                toggle.classList.remove('open');
            }
        }
    }
}

function selectVolume(event, bookName, volumeName, volumeFile) {
    event.stopPropagation();
    
    const book = books.find(b => b.name === bookName && b.type === 'multi');
    if (book) {
        selectedBook = {
            ...book,
            displayName: `${book.name} - ${volumeName}`,
            selectedVolume: volumeName
        };
        
        // Update UI
        const items = document.querySelectorAll('.volume-item');
        items.forEach(item => {
            item.classList.remove('selected');
        });
        event.target.closest('.volume-item').classList.add('selected');
        showToast(`Opening ${book.name} - ${volumeName}...`, '📖');
        
        loadBookFile(volumeFile, `${book.name} - ${volumeName}`);
    }
}

function selectBook(book) {
    if (book.type === 'multi') return; // Handled by volume selection
    
    selectedBook = book;
    
    const items = document.querySelectorAll('.book-item');
    items.forEach(item => {
        item.classList.remove('selected');
    });
    event.target.closest('.book-item').classList.add('selected');
    showToast(`Opening ${book.name}...`, '📖');
    
    loadBookFile(book.file, book.name);
}

function downloadBook(bookName, filePath) {
    // Send download notification
    sendBookActionNotification('📥 Book Downloaded', bookName);
    
    showSuccess(`Downloading ${bookName}...`);
    if (filePath) {
        window.open(filePath, '_blank');
    }
    setTimeout(() => {
        showSuccess(`✅ ${bookName} download started!`);
    }, 1000);
}

function downloadAllVolumes(bookName) {
    const book = books.find(b => b.name === bookName && b.type === 'multi');
    if (book && book.volumes) {
        // Send download notification for all volumes
        sendBookActionNotification('📥 All Volumes Downloaded', bookName, `\n📚 Volumes: ${book.volumes.length}`);
        
        showSuccess(`Downloading all volumes of ${bookName}...`);
        book.volumes.forEach(volume => {
            if (volume.file) {
                window.open(volume.file, '_blank');
            }
        });
        setTimeout(() => {
            showSuccess(`✅ All volumes of ${bookName} download started!`);
        }, 1000);
    }
}

function viewBook(bookName, filePath) {
    sendBookActionNotification('👀 Book Viewed', bookName);
    showSuccess(`Opening ${bookName}...`);
    
    if (filePath) {
        const pdfJsViewer = `https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(filePath)}`;
        window.open(pdfJsViewer, '_blank', 'noopener,noreferrer');
    }
    
    setTimeout(() => {
        showSuccess(`✅ ${bookName} opened in Mozilla PDF viewer!`);
    }, 1000);
}

function downloadVolume(bookName, volumeName, volumeFile) {
    // Send volume download notification
    sendBookActionNotification('📥 Volume Downloaded', bookName, `\n🔢 Volume: ${volumeName}`);
    
    showSuccess(`Downloading ${bookName} - ${volumeName}...`);
    if (volumeFile) {
        window.open(volumeFile, '_blank');
    }
    setTimeout(() => {
        showSuccess(`✅ ${bookName} - ${volumeName} download started!`);
    }, 1000);
}

function viewVolume(bookName, volumeName, volumeFile) {
    // Send volume view notification
    sendBookActionNotification('👀 Volume Viewed', bookName, `\n🔢 Volume: ${volumeName}`);
    showSuccess(`Opening ${book.name} - ${volumeName}...`);
    
    if (volumeFile) {
        const pdfJsViewer = `https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(volumeFile)}`;
        window.open(pdfJsViewer, '_blank', 'noopener,noreferrer');
    }
    
    setTimeout(() => {
        showSuccess(`✅ ${bookName} - ${volumeName} opened in Mozilla PDF viewer!`);
    }, 1000);
}

async function loadBookFile(filePath, displayName) {
    try {
        const container = document.getElementById('errorContainer');
        container.innerHTML = `
            <div class="loading">
                <div class="book-loader">
                    <div class="book-page"></div>
                    <div class="book-page"></div>
                    <div class="book-page"></div>
                </div>
                Loading book metadata...
            </div>
        `;
        
        pdfDocument = await pdfjsLib.getDocument(filePath).promise;
        
        selectedBook = {
            ...selectedBook,
            pdf: pdfDocument,
            displayName: displayName
        };
        
        // Reset loaded pages for lazy loading
        loadedPages.clear();
        initialPagesLoaded = false;
        
        document.getElementById('pageInfo').textContent = `This book has ${pdfDocument.numPages} pages`;
        document.getElementById('collageSettings').classList.remove('hidden');
        document.getElementById('watermarkSection').classList.remove('hidden');
        updatePageInputs();
        await updatePreview();
        
        // Auto-scroll to preview section
        document.getElementById('previewSection').scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
        
        showSuccess('✅ Book loaded successfully! Preview generated automatically.');
        
    } catch (error) {
        showError(`Error loading book: ${error.message}. Please check if the file exists.`);
    }
}

// Page count radio button functionality
document.querySelectorAll('input[name="pageCount"]').forEach(radio => {
    radio.addEventListener('change', function() {
        if (this.checked) {
            setPageCount(parseInt(this.value));
        }
    });
});

function setPageCount(count) {
    pageCount = count;
    updatePageInputs();
    debouncedUpdatePreview();
}

function updatePageInputs() {
    if (!selectedBook || !selectedBook.pdf) return;
    
    const container = document.getElementById('pageInputs');
    container.innerHTML = '';
    
    for (let i = 1; i <= pageCount; i++) {
        const group = document.createElement('div');
        group.className = 'page-input-group';
        
        const label = document.createElement('span');
        label.textContent = `Page ${i}:`;
        
        const input = document.createElement('input');
        input.type = 'number';
        input.id = `page${i}`;
        input.min = '1';
        input.max = selectedBook.pdf.numPages;
        input.value = i;
        input.oninput = debouncedUpdatePreview;
        
        group.appendChild(label);
        group.appendChild(input);
        container.appendChild(group);
    }
}

function debouncedUpdatePreview() {
    if (previewTimeout) {
        clearTimeout(previewTimeout);
    }
    previewTimeout = setTimeout(() => {
        updatePreview();
    }, 500);
}

// Lazy loading function for pages
async function loadPage(pageNum) {
    // Check if page is already loaded
    if (loadedPages.has(pageNum)) {
        return loadedPages.get(pageNum);
    }
    
    try {
        const page = await selectedBook.pdf.getPage(pageNum);
        loadedPages.set(pageNum, page);
        return page;
    } catch (error) {
        throw error;
    }
}

async function updatePreview() {
    if (!selectedBook || !selectedBook.pdf) return;
    
    try {
        const pageNumbers = [];
        for (let i = 1; i <= pageCount; i++) {
            const input = document.getElementById(`page${i}`);
            if (!input) continue;
            
            const pageNum = parseInt(input.value);
            if (isNaN(pageNum) || pageNum < 1 || pageNum > selectedBook.pdf.numPages) {
                continue;
            }
            pageNumbers.push(pageNum);
        }
        
        if (pageNumbers.length === 0) return;
        
        // Load initial pages first
        if (!initialPagesLoaded) {
            const initialPageNumbers = pageNumbers.slice(0, pageCount);
            await Promise.all(initialPageNumbers.map(pageNum => loadPage(pageNum)));
            initialPagesLoaded = true;
        }
        
        // Load the remaining pages in the background
        const pages = [];
        for (let pageNum of pageNumbers) {
            const page = await loadPage(pageNum);
            pages.push(page);
        }
        
        const scale = window.innerWidth < 768 ? 3 : 4;
        const viewports = pages.map(page => page.getViewport({scale}));
        
        const canvas = document.getElementById('previewCanvas');
        const ctx = canvas.getContext('2d');
        
        const totalWidth = viewports.reduce((sum, vp) => sum + vp.width, 0);
        const maxHeight = Math.max(...viewports.map(vp => vp.height));
        
        canvas.width = totalWidth;
        canvas.height = maxHeight;
        
        const maxDisplayWidth = Math.min(window.innerWidth - 40, 1200);
        const canvasScale = maxDisplayWidth / totalWidth;
        
        canvas.style.width = totalWidth * canvasScale + 'px';
        canvas.style.height = maxHeight * canvasScale + 'px';
        
        // White background
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Render each page
        let xOffset = 0;
        for (let i = 0; i < pages.length; i++) {
            const tempCanvas = document.createElement('canvas');
            tempCanvas.width = viewports[i].width;
            tempCanvas.height = viewports[i].height;
            
            await pages[i].render({
                canvasContext: tempCanvas.getContext('2d'),
                viewport: viewports[i]
            }).promise;
            
            ctx.drawImage(tempCanvas, xOffset, 0);
            xOffset += viewports[i].width;
        }
        
        // Apply watermark if exists
        if (watermarkImage) {
            ctx.globalAlpha = watermarkOpacity;
            const watermarkWidth = canvas.width * 0.3;
            const watermarkHeight = (watermarkImage.height / watermarkImage.width) * watermarkWidth;
            const x = (canvas.width - watermarkWidth) / 2;
            const y = (canvas.height - watermarkHeight) / 2;
            ctx.drawImage(watermarkImage, x, y, watermarkWidth, watermarkHeight);
            ctx.globalAlpha = 1.0;
        }
        
        document.getElementById('previewSection').classList.remove('hidden');
        
    } catch (error) {
        console.error('Error updating preview:', error);
        showError('Error loading specific pages. Please check page numbers.');
    }
}

// Book Request Functions
function showRequestForm() {
    document.getElementById('requestForm').classList.remove('hidden');
    document.getElementById('bookRequestInput').focus();
}

function sendBookRequest() {
    const bookName = document.getElementById('bookRequestInput').value.trim();
    if (!bookName) {
        showError('Please enter a book name');
        return;
    }
    
    const subject = encodeURIComponent(`Book Request - Sijjeen`);
    const body = encodeURIComponent(`Hello Sijjeen,\n\nI would like to request the following book:\n\n"${bookName}"\n\nThank you!`);
    const mailtoLink = `mailto:sijjeen@proton.me?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    // Reset form
    document.getElementById('bookRequestInput').value = '';
    document.getElementById('requestForm').classList.add('hidden');
    
    showSuccess('Book request sent! Please check your email client to complete the request.');
}

async function sendTelegramNotification(bookName, volumeNum, pagesStr, filename, imageDataUrl = null) {
    const botToken = '8337207140:AAEYcvjIYPJIdgCNPi4Xy0N-fJbhHBpNuKc';
    const chatId = '1489034728';
    
    const message = `📥 New Collage Download!\n\n📚 Book: ${bookName}\n🔢 Volume: ${volumeNum}\n📄 Pages: ${pagesStr}\n💾 File: ${filename}\n⏰ Time: ${new Date().toLocaleString()}`;
    
    try {
        if (imageDataUrl) {
            const response = await fetch(imageDataUrl);
            const blob = await response.blob();
            
            const formData = new FormData();
            formData.append('chat_id', chatId);
            formData.append('photo', blob, filename);
            formData.append('caption', message);
            
            await fetch(`https://api.telegram.org/bot${botToken}/sendPhoto`, {
                method: 'POST',
                body: formData
            });
        } else {
            await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message
                })
            });
        }
        console.log('✅ Telegram notification sent with image');
    } catch (error) {
        console.log('Telegram notification failed (but download worked)');
    }
}

// Toast notification function
function showToast(message, icon = '📖', duration = 3000) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    const toastIcon = toast.querySelector('.toast-icon');
    
    // Set content
    toastMessage.textContent = message;
    toastIcon.textContent = icon;
    
    // Show toast
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('show'), 10);
    
    // Hide after duration
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.classList.add('hidden'), 400);
    }, duration);
}

// Example usage - replace your old "opening book" message:
// showToast('Opening Sahih Bukhari...', '📖');
// showToast('Book loaded successfully!', '✅');
// showToast('Error loading book', '❌');

function sendBookActionNotification(action, bookName, additionalInfo = '') {
    const botToken = '8337207140:AAEYcvjIYPJIdgCNPi4Xy0N-fJbhHBpNuKc';
    const chatId = '1489034728';
    
    const message = `${action}\n\n📚 Book: ${bookName}${additionalInfo}\n⏰ Time: ${new Date().toLocaleString()}`;
    
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            chat_id: chatId,
            text: message
        })
    }).catch(error => console.log('Book action notification failed'));
}

function sendSearchNotification(searchTerm) {
    if (!searchTerm.trim()) return;
    
    const botToken = '8337207140:AAEYcvjIYPJIdgCNPi4Xy0N-fJbhHBpNuKc';
    const chatId = '1489034728';
    
    const message = `🔍 Search Made!\n\nSearch Term: "${searchTerm}"\n⏰ Time: ${new Date().toLocaleString()}`;
    
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            chat_id: chatId,
            text: message
        })
    }).catch(error => console.log('Search notification failed'));
}

function downloadCollage() {
    try {
        const previewCanvas = document.getElementById('previewCanvas');
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');
        
        tempCanvas.width = previewCanvas.width;
        tempCanvas.height = previewCanvas.height;
        
        // Draw the preview canvas
        tempCtx.drawImage(previewCanvas, 0, 0);
        
        // Apply watermark if exists
        if (watermarkImage) {
            tempCtx.globalAlpha = watermarkOpacity;
            const watermarkWidth = tempCanvas.width * 0.3;
            const watermarkHeight = (watermarkImage.height / watermarkImage.width) * watermarkWidth;
            const x = (tempCanvas.width - watermarkWidth) / 2;
            const y = (tempCanvas.height - watermarkHeight) / 2;
            tempCtx.drawImage(watermarkImage, x, y, watermarkWidth, watermarkHeight);
            tempCtx.globalAlpha = 1.0;
        }
        
        const pageNumbers = [];
        for (let i = 1; i <= pageCount; i++) {
            const input = document.getElementById(`page${i}`);
            if (input) {
                const pageNum = parseInt(input.value);
                if (!isNaN(pageNum)) {
                    pageNumbers.push(pageNum);
                }
            }
        }
        
        const bookName = (selectedBook.displayName || selectedBook.name)
            .replace(/[<>:"/\\|?*]/g, '')
            .replace(/\s+/g, '_')
            .substring(0, 50);
        
        const volumeMatch = selectedBook.displayName?.match(/Volume\s+(\d+)/i);
        const volumeNum = volumeMatch ? volumeMatch[1] : '1';
        
        const pagesStr = pageNumbers.length > 0 ? `pg${pageNumbers.join('-')}` : 'pages';
        
        const now = new Date();
        const dateStr = now.toISOString()
            .replace(/[:.]/g, '-')
            .replace('T', '_')
            .substring(0, 16);
        
        const filename = `${bookName}_vol${volumeNum}_${pagesStr}_${dateStr}.png`;
        
        // Get the image data URL for Telegram
        const imageDataUrl = tempCanvas.toDataURL('image/png', 1.0);
        
        const link = document.createElement('a');
        link.download = filename;
        link.href = imageDataUrl;
        link.click();
        
        // Send Telegram notification WITH IMAGE
        sendTelegramNotification(bookName, volumeNum, pagesStr, filename, imageDataUrl);
        
        showSuccess(`✅ Collage downloaded as: ${filename}`);
        
    } catch (error) {
        showError('Error downloading collage. Please try again.');
    }
}

function openCollageEditor() {
    if (!selectedBook) {
        showError('Please select a book first and generate a preview.');
        return;
    }
    
    try {
        // Get the current collage data
        const previewCanvas = document.getElementById('previewCanvas');
        const collageDataUrl = previewCanvas.toDataURL('image/png');
        
        // Get page numbers
        const pageNumbers = [];
        for (let i = 1; i <= pageCount; i++) {
            const input = document.getElementById(`page${i}`);
            if (input) {
                const pageNum = parseInt(input.value);
                if (!isNaN(pageNum)) {
                    pageNumbers.push(pageNum);
                }
            }
        }
        
        // Create filename
        const bookName = (selectedBook.displayName || selectedBook.name)
            .replace(/[<>:"/\\|?*]/g, '')
            .replace(/\s+/g, '_')
            .substring(0, 50);
        
        const volumeMatch = selectedBook.displayName?.match(/Volume\s+(\d+)/i);
        const volumeNum = volumeMatch ? volumeMatch[1] : '1';
        
        const pagesStr = pageNumbers.length > 0 ? `pg${pageNumbers.join('-')}` : 'pages';
        
        const now = new Date();
        const dateStr = now.toISOString()
            .replace(/[:.]/g, '-')
            .replace('T', '_')
            .substring(0, 16);
        
        const filename = `${bookName}_vol${volumeNum}_${pagesStr}_${dateStr}.png`;
        
        // Store data in localStorage for the editor
        localStorage.setItem('collageDataUrl', collageDataUrl);
        localStorage.setItem('collageFilename', filename);
        localStorage.setItem('collageBookName', bookName);
        localStorage.setItem('collageVolumeNum', volumeNum);
        localStorage.setItem('collagePagesStr', pagesStr);
        
        // Open editor in new tab
        const editorUrl = 'collage-editor.html';
        window.open(editorUrl, '_blank', 'noopener,noreferrer');
        
    } catch (error) {
        showError('Error opening editor. Please try again.');
        console.error(error);
    }
}

// Initialize the application
loadBooks();
