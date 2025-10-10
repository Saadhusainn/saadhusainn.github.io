// Sijjeen Logging and Statistics System
class SijjeenLogger {
    constructor() {
        this.storageKey = 'sijjeen_logs';
        this.statsKey = 'sijjeen_statistics';
        this.init();
    }

    init() {
        // Initialize logs and statistics if they don't exist
        if (!localStorage.getItem(this.storageKey)) {
            localStorage.setItem(this.storageKey, JSON.stringify([]));
        }
        if (!localStorage.getItem(this.statsKey)) {
            const initialStats = {
                totalScans: 0,
                totalDownloads: 0,
                booksScanned: {},
                firstScanDate: null,
                lastScanDate: null
            };
            localStorage.setItem(this.statsKey, JSON.stringify(initialStats));
        }
    }

    // Log a new scan
    logScan(bookName, volumeName, pages, fileSource = 'library') {
        const scanData = {
            id: this.generateId(),
            timestamp: new Date().toISOString(),
            book: bookName,
            volume: volumeName,
            pages: pages,
            fileSource: fileSource,
            userAgent: navigator.userAgent,
            language: navigator.language,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        };

        // Add to logs
        const logs = this.getLogs();
        logs.unshift(scanData);
        
        // Keep only last 200 logs to prevent storage issues
        if (logs.length > 200) {
            logs.splice(200);
        }
        
        localStorage.setItem(this.storageKey, JSON.stringify(logs));

        // Update statistics
        this.updateStatistics(scanData);
        
        return scanData;
    }

    // Log a download
    logDownload(bookName, volumeName, pages) {
        const stats = this.getStatistics();
        stats.totalDownloads++;
        localStorage.setItem(this.statsKey, JSON.stringify(stats));
    }

    // Update statistics
    updateStatistics(scanData) {
        const stats = this.getStatistics();
        
        stats.totalScans++;
        
        // Update book scan count
        const bookKey = scanData.book;
        if (!stats.booksScanned[bookKey]) {
            stats.booksScanned[bookKey] = 0;
        }
        stats.booksScanned[bookKey]++;
        
        // Update dates
        if (!stats.firstScanDate) {
            stats.firstScanDate = scanData.timestamp;
        }
        stats.lastScanDate = scanData.timestamp;
        
        localStorage.setItem(this.statsKey, JSON.stringify(stats));
    }

    // Get all logs
    getLogs(limit = 50) {
        const logs = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
        return limit ? logs.slice(0, limit) : logs;
    }

    // Get statistics
    getStatistics() {
        return JSON.parse(localStorage.getItem(this.statsKey) || '{}');
    }

    // Get recent scans for display
    getRecentScans(limit = 20) {
        const logs = this.getLogs(limit);
        return logs.map(log => ({
            date: new Date(log.timestamp).toLocaleDateString(),
            time: new Date(log.timestamp).toLocaleTimeString(),
            book: log.book,
            volume: log.volume || 'N/A',
            pages: log.pages.join(', '),
            source: log.fileSource === 'uploaded' ? 'Uploaded PDF' : 'Library'
        }));
    }

    // Get popular books
    getPopularBooks(limit = 10) {
        const stats = this.getStatistics();
        const books = Object.entries(stats.booksScanned || {})
            .map(([book, count]) => ({ book, count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, limit);
        
        return books;
    }

    // Get daily statistics
    getDailyStats() {
        const logs = this.getLogs();
        const dailyStats = {};
        
        logs.forEach(log => {
            const date = new Date(log.timestamp).toLocaleDateString();
            if (!dailyStats[date]) {
                dailyStats[date] = 0;
            }
            dailyStats[date]++;
        });
        
        return Object.entries(dailyStats)
            .map(([date, count]) => ({ date, count }))
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 30); // Last 30 days
    }

    // Clear all logs (admin function)
    clearLogs() {
        localStorage.setItem(this.storageKey, JSON.stringify([]));
        const initialStats = {
            totalScans: 0,
            totalDownloads: 0,
            booksScanned: {},
            firstScanDate: null,
            lastScanDate: null
        };
        localStorage.setItem(this.statsKey, JSON.stringify(initialStats));
    }

    // Export logs as JSON
    exportLogs() {
        const data = {
            logs: this.getLogs(),
            statistics: this.getStatistics(),
            exportDate: new Date().toISOString()
        };
        
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `sijjeen_logs_${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }

    // Generate unique ID
    generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }

    // Get country from timezone (approximate)
    getCountryFromTimezone(timezone) {
        const countryMap = {
            'America/': 'United States',
            'Europe/': 'Europe',
            'Asia/': 'Asia',
            'Africa/': 'Africa',
            'Australia/': 'Australia',
            'Pacific/': 'Pacific Islands',
            'Indian/': 'Indian Ocean'
        };
        
        for (const [prefix, country] of Object.entries(countryMap)) {
            if (timezone.startsWith(prefix)) {
                return country;
            }
        }
        
        return 'Unknown';
    }
}

// Initialize global logger instance
const sijjeenLogger = new SijjeenLogger();

// Enhanced logging functions for the main application
function logScan(bookName, pages) {
    const volumeMatch = bookName.match(/- (.*)$/);
    const volumeName = volumeMatch ? volumeMatch[1] : 'Single Volume';
    const bookNameOnly = volumeMatch ? bookName.replace(`- ${volumeName}`, '').trim() : bookName;
    
    const scanData = sijjeenLogger.logScan(bookNameOnly, volumeName, pages);
    
    // Enhanced logging with country detection
    const enhancedLog = {
        ...scanData,
        approximateCountry: sijjeenLogger.getCountryFromTimezone(scanData.timezone),
        deviceType: /Mobile|Android|iPhone|iPad/.test(navigator.userAgent) ? 'Mobile' : 'Desktop'
    };
    
    console.log('Scan logged:', enhancedLog);
    return enhancedLog;
}

function logDownload(bookName, pages) {
    const volumeMatch = bookName.match(/- (.*)$/);
    const volumeName = volumeMatch ? volumeMatch[1] : 'Single Volume';
    const bookNameOnly = volumeMatch ? bookName.replace(`- ${volumeName}`, '').trim() : bookName;
    
    sijjeenLogger.logDownload(bookNameOnly, volumeName, pages);
}

// Enhanced showLogs function for the main application
function showEnhancedLogs() {
    const modal = document.getElementById('logsModal');
    modal.style.display = 'block';
    
    // Update statistics
    const stats = sijjeenLogger.getStatistics();
    document.getElementById('totalScans').textContent = stats.totalScans || '0';
    
    // Show enhanced recent logs
    const recentScans = sijjeenLogger.getRecentScans(20);
    const logsContainer = document.getElementById('recentLogs');
    
    if (recentScans.length === 0) {
        logsContainer.innerHTML = `
            <div class="no-results">
                <p>No scans recorded yet</p>
                <p style="font-size: 12px; color: #999; margin-top: 10px;">
                    Scans will appear here when you load books and generate previews
                </p>
            </div>
        `;
    } else {
        logsContainer.innerHTML = recentScans.map(scan => `
            <div class="log-item">
                <div class="log-date">
                    📅 ${scan.date} 🕒 ${scan.time}
                </div>
                <div class="log-book">
                    <strong>Book:</strong> ${scan.book}<br>
                    <strong>Volume:</strong> ${scan.volume}<br>
                    <strong>Pages:</strong> ${scan.pages}<br>
                    <strong>Source:</strong> ${scan.source}
                </div>
            </div>
        `).join('');
    }
    
    // Add statistics section if it doesn't exist
    if (!document.getElementById('enhancedStats')) {
        const statsSection = document.createElement('div');
        statsSection.id = 'enhancedStats';
        statsSection.style.marginTop = '20px';
        statsSection.style.padding = '15px';
        statsSection.style.background = '#f8f9fa';
        statsSection.style.borderRadius = '10px';
        
        const popularBooks = sijjeenLogger.getPopularBooks(5);
        statsSection.innerHTML = `
            <h4 style="color: #667eea; margin-bottom: 15px;">📊 Popular Books</h4>
            ${popularBooks.length > 0 ? popularBooks.map(book => `
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 14px;">
                    <span>${book.book}</span>
                    <span style="color: #667eea; font-weight: bold;">${book.count} scans</span>
                </div>
            `).join('') : '<p style="color: #666; text-align: center;">No data yet</p>'}
        `;
        
        modal.querySelector('.modal-content').appendChild(statsSection);
    }
}

// Close logs modal
function closeLogs() {
    document.getElementById('logsModal').style.display = 'none';
}

// Export logs function (for admin use)
function exportLogs() {
    sijjeenLogger.exportLogs();
    showSuccess('Logs exported successfully!');
}

// Clear logs function (for admin use - careful!)
function clearAllLogs() {
    if (confirm('Are you sure you want to clear all logs? This action cannot be undone.')) {
        sijjeenLogger.clearLogs();
        showSuccess('All logs cleared successfully!');
        closeLogs();
    }
}
