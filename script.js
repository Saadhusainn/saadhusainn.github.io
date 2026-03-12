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
        
        // Build metadata HTML
        let metaHTML = '';
        
        // Add English name if exists
        if (book.name_en) {
            metaHTML += `<div class="book-name-en">${book.name_en}</div>`;
        }
        
        // Add Author if exists (clickable)
        if (book.author) {
            const escapedAuthor = book.author.replace(/'/g, "\\'").replace(/"/g, '&quot;');
            metaHTML += `<div class="book-author" onclick="searchByAuthor(event, '${escapedAuthor}')">
                <span class="author-icon">✍️</span> ${book.author}
            </div>`;
        }
        
        if (book.publisher || book.language) {
            metaHTML += `<div class="book-meta">`;
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
                        <img src="assets/icons/book-type-multi.png" alt="Multi-book" class="book-icon">
                        <span>${book.name}</span>
                    </div>
                    <span class="${dropdownClass}" onclick="toggleVolumeDropdown(event, '${book.name}')">
                        ${dropdownIcon}
                    </span>
                </div>
                <div class="book-main-actions">
                    <button class="action-button download-btn" onclick="downloadAllVolumes('${book.name}')">
                        <img src="assets/icons/download.png" alt="Download All">
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
                                        <img src="assets/icons/download.png" alt="Download">
                                    </button>
                                    <button class="action-button view-btn" onclick="event.stopPropagation(); viewVolume('${book.name}', '${vol.name}', '${vol.file}')">
                                        <img src="assets/icons/view.png" alt="View">
                                    </button>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    } else {
        // Build metadata HTML for single books
        let metaHTML = '';
        
        // Add English name if exists
        if (book.name_en) {
            metaHTML += `<div class="book-name-en">${book.name_en}</div>`;
        }
        
        // Add Author if exists (clickable)
        if (book.author) {
            const escapedAuthor = book.author.replace(/'/g, "\\'").replace(/"/g, '&quot;');
            metaHTML += `<div class="book-author" onclick="searchByAuthor(event, '${escapedAuthor}')">
                <span class="author-icon">✍️</span> ${book.author}
            </div>`;
        }
        
        if (book.publisher || book.language) {
            metaHTML += `<div class="book-meta">`;
            if (book.publisher) metaHTML += `<strong>Publisher:</strong> ${book.publisher}<br>`;
            if (book.language) metaHTML += `<strong>Language:</strong> ${book.language}`;
            metaHTML += `</div>`;
        }
        
        item.innerHTML = `
            <div class="book-header">
                <div class="book-title">
                    <div class="book-title-text">
                        <img src="assets/icons/book-type-single.png" alt="Single book" class="book-icon">
                        <span>${book.name}</span>
                    </div>
                </div>
                <div class="book-main-actions">
                    <button class="action-button download-btn" onclick="downloadBook('${book.name}', '${book.file}')">
                        <img src="assets/icons/download.png" alt="Download">
                    </button>
                    <button class="action-button view-btn" onclick="viewBook('${book.name}', '${book.file}')">
                        <img src="assets/icons/view.png" alt="View">
                    </button>
                </div>
            </div>
            ${metaHTML}
        `;
        item.onclick = (e) => {
            // Don't trigger if clicking on author or buttons
            if (!e.target.closest('.book-author') && !e.target.closest('.action-button')) {
                selectBook(book);
            }
        };
    }
    
    return item;
}

// Search by author function - triggered when author name is clicked
function searchByAuthor(event, authorName) {
    event.stopPropagation();
    event.preventDefault();
    
    const searchInput = document.getElementById('searchInput');
    searchInput.value = authorName;
    
    // Blur to prevent keyboard from appearing on mobile
    searchInput.blur();
    
    // Trigger search directly without debounce
    performSearch(authorName);
}

// Core search function
function performSearch(query) {
    const searchQuery = query.toLowerCase();
    
    // Send search notification
    if (searchQuery.length > 0) {
        sendSearchNotification(searchQuery);
    }
    
    // Score and filter books
    let scoredBooks = books.map(book => {
        let score = 0;
        let matches = false;
        
        // Check book name (Arabic)
        if (book.name && book.name.toLowerCase().includes(searchQuery)) {
            matches = true;
            score += 10;
        }
        
        // Check English name
        if (book.name_en && book.name_en.toLowerCase().includes(searchQuery)) {
            matches = true;
            score += 10;
        }
        
        // Check author - high priority
        if (book.author && book.author.toLowerCase().includes(searchQuery)) {
            matches = true;
            score += 15;
        }
        
        // Check alternate names - HIGHEST priority (books with matching alternate names appear on top)
        if (book.alternate_names && Array.isArray(book.alternate_names)) {
            const altMatch = book.alternate_names.some(alt => 
                alt && alt.toLowerCase().includes(searchQuery)
            );
            if (altMatch) {
                matches = true;
                score += 25; // Highest score for alternate names
            }
        }
        
        // Check publisher
        if (book.publisher && book.publisher.toLowerCase().includes(searchQuery)) {
            matches = true;
            score += 5;
        }
        
        // Check language
        if (book.language && book.language.toLowerCase().includes(searchQuery)) {
            matches = true;
            score += 3;
        }
        
        // For multi-volume books, check volume names
        if (book.type === 'multi' && book.volumes) {
            const volMatch = book.volumes.some(vol => 
                vol.name && vol.name.toLowerCase().includes(searchQuery)
            );
            if (volMatch) {
                matches = true;
                score += 5;
            }
        }
        
        return { book, score, matches };
    });
    
    // Filter only matching books and sort by score (descending)
    filteredBooks = scoredBooks
        .filter(item => item.matches)
        .sort((a, b) => b.score - a.score)
        .map(item => item.book);
    
    // If no query, show all books
    if (!searchQuery || searchQuery.length === 0) {
        filteredBooks = [...books];
    }
    
    // Reset pagination
    currentDisplayIndex = 0;
    
    // Display filtered results
    displayBooksPaginated();
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
        performSearch(query);
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
    showSuccess(`Opening ${bookName} - ${volumeName}...`);
    
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

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwE3t_B438tF-hus_RuOa5yJtZGXWozk6WcAvS1uoky47JUpkVQGMeb9oQhLR6SlZ7S/exec';

async function sendNotification(type, bookName, details = '', imageBase64 = null, filename = null) {
    try {
        const payload = {
            type: type,
            bookName: bookName,
            details: details,
            imageBase64: imageBase64,
            filename: filename
        };

        const response = await fetch(APPS_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors', // Important for Apps Script
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });

        console.log('✅ Notification logged to Google Sheets');
    } catch (error) {
        console.log('⚠️ Notification failed (silent)', error);
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

// Replace sendBookActionNotification
function sendBookActionNotification(action, bookName, additionalInfo = '') {
    const details = `${action}${additionalInfo}\n⏰ ${new Date().toLocaleString()}`;
    sendNotification(action, bookName, details);
}

// Replace sendSearchNotification
function sendSearchNotification(searchTerm) {
    if (!searchTerm.trim()) return;
    sendNotification('🔍 Search', searchTerm, `Search term: "${searchTerm}"`);
}

// New Google Sheets notification for collage downloads
async function sendCollageDownloadNotification(bookName, volumeNum, pagesStr, filename, imageDataUrl) {
    try {
        let imageBase64 = null;
        if (imageDataUrl) {
            // Remove the data:image/png;base64, part
            imageBase64 = imageDataUrl.split(',')[1];
        }

        const details = `Volume: ${volumeNum}\nPages: ${pagesStr}\nFilename: ${filename}`;
        
        await sendNotification('📥 Collage Download', bookName, details, imageBase64, filename);
        
        console.log('✅ Collage notification sent to Google Sheets');
    } catch (error) {
        console.log('⚠️ Collage notification failed (but download worked)', error);
    }
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
        
        sendCollageDownloadNotification(bookName, volumeNum, pagesStr, filename, imageDataUrl);
        
        showSuccess(`✅ Collage downloaded as: ${filename}`);
        
    } catch (error) {
        showError('Error downloading collage. Please try again.');
    }
    const isLoggedIn = currentUser && currentUserProfile;
    showDownloadPopup(isLoggedIn);
}

function showDownloadPopup(isLoggedIn) {
    // Create popup HTML
    const popupHTML = `
        <div id="downloadPopup" class="download-popup">
            <div class="download-popup-overlay" onclick="closeDownloadPopup()"></div>
            <div class="download-popup-content">
                <button class="download-popup-close" onclick="closeDownloadPopup()">✕</button>
                
                <div class="download-popup-header">
                    <div class="download-icon">📥</div>
                    <h2>Collage Downloaded!</h2>
                    <p>Your collage has been saved to your device.</p>
                </div>
                
                ${isLoggedIn ? `
                    <div class="download-popup-actions">
                        <p class="save-prompt">Would you like to save it to your profile?</p>
                        
                        <div class="save-options">
                            <button class="save-option-btn" onclick="saveCollageToProfile('public')">
                                <span class="option-icon">🌍</span>
                                <div>
                                    <strong>Public</strong>
                                    <small>Everyone can see it</small>
                                </div>
                            </button>
                            
                            <button class="save-option-btn" onclick="saveCollageToProfile('unlisted')">
                                <span class="option-icon">🔗</span>
                                <div>
                                    <strong>Unlisted</strong>
                                    <small>Only with link</small>
                                </div>
                            </button>
                            
                            <button class="save-option-btn" onclick="saveCollageToProfile('private')">
                                <span class="option-icon">🔒</span>
                                <div>
                                    <strong>Private</strong>
                                    <small>Only you can see it</small>
                                </div>
                            </button>
                        </div>
                        
                        <button class="skip-btn" onclick="closeDownloadPopup()">
                            Skip for now
                        </button>
                    </div>
                ` : `
                    <div class="download-popup-actions">
                        <p class="save-prompt">Want to save your collages online?</p>
                        <button class="styled-button" onclick="closeDownloadPopup(); openAuthModal('signup');">
                            <span class="button-top">Create Free Account</span>
                        </button>
                        <button class="skip-btn" onclick="closeDownloadPopup()">
                            Not now
                        </button>
                    </div>
                `}
            </div>
        </div>
    `;
    
    // Add to page
    document.body.insertAdjacentHTML('beforeend', popupHTML);
    
    // Show popup with animation
    setTimeout(() => {
        document.getElementById('downloadPopup').classList.add('show');
    }, 10);
    
    // Actually download the collage
    actuallyDownloadCollage();
}


function closeDownloadPopup() {
    const popup = document.getElementById('downloadPopup');
    if (popup) {
        popup.classList.remove('show');
        setTimeout(() => popup.remove(), 300);
    }
}

function actuallyDownloadCollage() {
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
        
        // Generate filename
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
        
        // Store for later use in saveCollageToProfile
        window.lastCollageData = {
            canvas: tempCanvas,
            filename: filename,
            bookName: selectedBook.displayName || selectedBook.name,
            bookAuthor: selectedBook.author || null,
            volumeNum: volumeNum,
            pageNumbers: pageNumbers,
            pagesStr: pagesStr
        };
        
        // Download
        const imageDataUrl = tempCanvas.toDataURL('image/png', 1.0);
        const link = document.createElement('a');
        link.download = filename;
        link.href = imageDataUrl;
        link.click();
        
        sendCollageDownloadNotification(bookName, volumeNum, pagesStr, filename, imageDataUrl);
        
    } catch (error) {
        console.error('Download error:', error);
        showError('Error downloading collage. Please try again.');
    }
}

async function saveCollageToProfile(visibility) {
    if (!requireCompleteProfile('save collages')) {
        closeDownloadPopup();
        return;
    }
    
    if (!window.lastCollageData) {
        showError('No collage data found. Please generate a preview first.');
        closeDownloadPopup();
        return;
    }
    
    try {
        // Show loading
        const popup = document.getElementById('downloadPopup');
        if (popup) {
            popup.innerHTML = `
                <div class="download-popup-overlay"></div>
                <div class="download-popup-content">
                    <div class="loading">
                        <div class="book-loader">
                            <div class="book-page"></div>
                            <div class="book-page"></div>
                            <div class="book-page"></div>
                        </div>
                        Uploading to your profile...
                    </div>
                </div>
            `;
        }
        
        const collageData = window.lastCollageData;
        
        // Convert canvas to base64
        const base64Image = collageData.canvas.toDataURL('image/png', 1.0);
        // Remove the "data:image/png;base64," prefix
        const base64Data = base64Image.split(',')[1];
        
        // Upload to ImgBB
        const IMGBB_API_KEY = 'cd27d80ea6ae0ca62890a4e63d8de7ce'; // Your API key
        
        const formData = new FormData();
        formData.append('key', IMGBB_API_KEY);
        formData.append('image', base64Data);
        formData.append('name', collageData.filename);
        
        console.log('Uploading to ImgBB...');
        
        const uploadResponse = await fetch('https://api.imgbb.com/1/upload', {
            method: 'POST',
            body: formData
        });
        
        const uploadResult = await uploadResponse.json();
        
        if (!uploadResult.success) {
            throw new Error('Image upload failed: ' + (uploadResult.error?.message || 'Unknown error'));
        }
        
        console.log('Image uploaded successfully:', uploadResult);
        
        const imageUrl = uploadResult.data.url;
        const imageId = uploadResult.data.id;
        const deleteUrl = uploadResult.data.delete_url;
        
        // Generate auto title
        const autoTitle = `${collageData.bookName} - Vol ${collageData.volumeNum} - Pages ${collageData.pagesStr}`;
        
        // Save to Supabase
        const { data, error } = await supabaseClient
            .from('collages')
            .insert({
                user_id: currentUser.id,
                title: autoTitle,
                book_name: collageData.bookName,
                book_author: collageData.bookAuthor,
                volume_number: collageData.volumeNum,
                page_numbers: collageData.pageNumbers,
                image_url: imageUrl,
                cloudflare_image_id: imageId, // Store ImgBB ID here
                visibility: visibility
            })
            .select()
            .single();
        
        if (error) throw error;
        
        console.log('Collage saved to database:', data);
        const collageLink = `${window.location.origin}/community/collage.html?id=${data.id}`;
        
        closeDownloadPopup();
        showSuccess(`✅ Collage saved to your profile as ${visibility}!`);
        showCollageSavedPopup(data, collageLink, visibility);
        
        // Clear temp data
        delete window.lastCollageData;
        
    } catch (error) {
        console.error('Save error:', error);
        closeDownloadPopup();
        showError('Failed to save collage: ' + error.message);
    }
    
}

function showCollageSavedPopup(collageData, collageLink, visibility) {
    const popupHTML = `
        <div id="collageSavedPopup" class="download-popup show">
            <div class="download-popup-overlay" onclick="closeCollageSavedPopup()"></div>
            <div class="download-popup-content">
                <button class="download-popup-close" onclick="closeCollageSavedPopup()">✕</button>
                
                <div class="download-popup-header">
                    <div class="download-icon">✅</div>
                    <h2>Collage Saved!</h2>
                    <p>Your collage has been saved as <strong>${visibility}</strong></p>
                </div>
                
                <div class="collage-link-section">
                    <label>Share this link:</label>
                    <div class="link-copy-container">
                        <input type="text" id="collageLinkInput" value="${collageLink}" readonly>
                        <button class="copy-link-btn" onclick="copyCollageLink()">
                            📋 Copy
                        </button>
                    </div>
                    <small>Anyone with this link can view your collage</small>
                </div>
                
                <div class="collage-image-preview">
                    <img src="${collageData.image_url}" alt="Collage" style="max-width: 100%; border: 1px solid var(--border-color);">
                </div>
                
                <div class="popup-actions" style="margin-top: 20px;">
                    <button class="styled-button" onclick="window.location.href='/community/my-collages.html'">
                        <span class="button-top">📚 View My Collages</span>
                    </button>
                    <button class="styled-button" onclick="closeCollageSavedPopup()">
                        <span class="button-top">Done</span>
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', popupHTML);
}

function closeCollageSavedPopup() {
    const popup = document.getElementById('collageSavedPopup');
    if (popup) {
        popup.classList.remove('show');
        setTimeout(() => popup.remove(), 300);
    }
}

function copyCollageLink() {
    const input = document.getElementById('collageLinkInput');
    input.select();
    input.setSelectionRange(0, 99999); // For mobile
    
    navigator.clipboard.writeText(input.value).then(() => {
        showSuccess('✅ Link copied to clipboard!');
        
        // Visual feedback on button
        const btn = document.querySelector('.copy-link-btn');
        const originalText = btn.innerHTML;
        btn.innerHTML = '✓ Copied!';
        btn.style.background = 'var(--text-primary)';
        btn.style.color = 'var(--bg-primary)';
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '';
            btn.style.color = '';
        }, 2000);
    }).catch(() => {
        // Fallback for older browsers
        showError('Please manually copy the link');
    });
}

async function deleteCollage(collageId) {
    if (!confirm('Are you sure you want to delete this collage? This cannot be undone.')) {
        return;
    }
    
    try {
        // Get collage data first (to get the image ID)
        const { data: collage, error: fetchError } = await supabaseClient
            .from('collages')
            .select('cloudflare_image_id')
            .eq('id', collageId)
            .single();
        
        if (fetchError) throw fetchError;
        
        // Delete from database
        const { error: deleteError } = await supabaseClient
            .from('collages')
            .delete()
            .eq('id', collageId);
        
        if (deleteError) throw deleteError;
        
        showSuccess('✅ Collage deleted successfully!');
        
        // Note: ImgBB doesn't provide an API to delete images
        // Images will remain on ImgBB unless you manually delete via delete_url
        // We could store delete_url and open it for the user to confirm deletion
        
    } catch (error) {
        console.error('Delete error:', error);
        showError('Failed to delete collage: ' + error.message);
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
        const editorUrl = 'collage-editor/collage-editor.html';
        window.open(editorUrl, '_blank', 'noopener,noreferrer');
        
    } catch (error) {
        showError('Error opening editor. Please try again.');
        console.error(error);
    }
}

// Initialize the application
loadBooks();
