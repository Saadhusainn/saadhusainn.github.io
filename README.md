# Sijjeen - Book Collage Maker

A comprehensive web application for creating beautiful book collages with advanced text highlighting capabilities. Designed specifically for Islamic book readers and researchers.

![Sijjeen Banner](https://via.placeholder.com/1200x400/6c63ff/ffffff?text=Sijjeen+-+Book+Collage+Maker)

## 🌟 Features

### 🎨 Core Functionality
- **Multi-Page Collages**: Create stunning collages with 2-5 pages from PDF books
- **Advanced Text Highlighting**: Interactive highlighting system with multiple colors and editing capabilities
- **PDF Support**: Upload your own PDFs or choose from our extensive library
- **Custom Watermarks**: Add personal watermarks with adjustable opacity (0-100%)
- **Dark/Light Theme**: Automatic theme switching based on system preference

### 📚 Book Management
- **Extensive Library**: Curated collection of Islamic books and scholarly works
- **Multi-Volume Support**: Organized book collections with intuitive volume management
- **Smart Search**: Quick search through available books by title, publisher, or language
- **Book Requests**: Request missing books directly via email

### 📱 User Experience
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Touch-Friendly**: Complete touch interaction support for mobile users
- **Lazy Loading**: Efficient page loading for optimal performance
- **Real-time Preview**: Instant preview with live updates

## 🚀 Quick Start

### Using the Web Application

1. **Access the Application**: Open Sijjeen in your modern web browser
2. **Select Your Book**:
   - Browse the organized book library
   - Use the search bar to find specific titles
   - Upload your personal PDF files (click "Upload Your Own PDF")
3. **Customize Your Collage**:
   - Choose number of pages (2-5) using the radio buttons
   - Specify exact page numbers for each position
   - Add highlights using the interactive highlighting system
   - Apply watermarks with custom opacity
4. **Download & Share**: Export your creation as a high-quality PNG image

### For Developers

```bash
# The application runs entirely client-side
# Simply open index.html in a web server environment

# For local development:
python -m http.server 8000
# or
npx serve .
```

## 📚 Book Library Structure

### Single Books
- Individual PDF files ready for immediate use
- Various publishers and multiple languages
- Direct download and online viewing options

### Multi-Volume Collections
- Complete book series organized by volumes
- Individual volume access and management
- Bulk download capabilities for entire collections

## 🎨 Highlighting System

### ✨ Advanced Features
- **Color Variety**: Four highlight colors - Yellow, Red, Cyan, and Lime
- **Interactive Editing**: Intuitive click-and-drag interface
- **Smart Manipulation**: Resize and move existing highlights with precision
- **Complete History**: Full undo/redo functionality
- **Natural Blending**: Multiply blend mode for text-friendly highlighting

### 🖱️ Usage Guide
1. Toggle highlighting mode ON using the switch
2. Select your preferred highlight color
3. Click and drag on the preview canvas to create highlights
4. Click existing highlights to select them for resizing or moving
5. Use corner handles for precise resizing

## ⚙️ Customization Options

### Collage Configuration
- **Page Count**: Flexible layout with 2-5 pages
- **Page Selection**: Exact page number specification for each position
- **Automatic Layout**: Smart horizontal arrangement with proper scaling

### Watermark System
- Upload personal watermark images (PNG, JPG, SVG)
- Adjustable opacity from 0% to 100%
- Automatic centering and proportional scaling
- Real-time preview updates

### Theme Personalization
- Light mode (clean and bright)
- Dark mode (easy on the eyes)
- Automatic system preference detection
- Persistent theme selection

## 📱 Mobile Experience

### Optimized for Touch
- Touch-optimized interface elements
- Responsive design adapting to all screen sizes
- Performance-optimized for mobile devices
- Mobile-appropriate scaling and layouts

### Mobile-Specific Features
- Touch-friendly highlighting interface
- Optimized canvas rendering for mobile GPUs
- Efficient memory usage for larger PDFs
- Smooth scrolling and interaction

## 🔧 Technical Architecture

### Built With Modern Web Technologies
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **PDF Processing**: Mozilla's PDF.js library
- **Styling**: Advanced CSS with CSS custom properties
- **Graphics**: HTML5 Canvas for rendering and manipulation

### Browser Compatibility
- ✅ Chrome/Chromium 90+ (Recommended)
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Performance Optimizations
- Lazy loading of PDF pages
- Efficient canvas rendering pipeline
- Debounced preview updates
- Optimized memory management
- Smart resource cleanup

## 📄 Project Structure

```
sijjeen/
├── index.html                 # Main application entry point
├── books-index.js            # Book library database and metadata
├── README.md                # Project documentation
└── assets/                  # Static assets (optional)
    ├── icons/               # Application and UI icons
    ├── images/              # Screenshots and promotional images
    └── samples/             # Example collages and outputs
```

## 🤝 Contribution Guidelines

We welcome contributions from the community to enhance Sijjeen:

### How to Contribute
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Priority Contribution Areas
- 📚 Adding new books to the library
- 📱 Mobile experience enhancements
- 🚀 Performance improvements
- 🎨 New features and customization options
- 🌐 Translation and localization support
- 🐛 Bug fixes and stability improvements

## 📞 Support & Community

### Get Help & Support
- **Telegram**: [@DancingDinosaurs](https://t.me/DancingDinosaurs) - Direct developer contact
- **Instagram**: [@sijjeen_](https://instagram.com/sijjeen_) - Updates and community
- **Email**: [sijjeen@proton.me](mailto:sijjeen@proton.me) - Formal support and requests

### Report Issues
Please report any bugs or issues through:
- Email support for quick assistance
- Direct messaging on social media platforms
- GitHub issues (if repository is public)

## 🌟 Use Cases & Applications

### 🎓 Academic & Educational
- Create comprehensive study materials from textbook pages
- Highlight and organize important passages and references
- Combine multiple source pages for research papers
- Prepare teaching materials and presentations

### 🔬 Research & Scholarship
- Compile research sources and citations
- Create academic presentation materials
- Organize reference images for publications
- Document research findings with visual aids

### 📱 Content Creation & Social Media
- Generate engaging social media content
- Create educational posts and infographics
- Design blog post featured images
- Produce tutorial and instructional materials

### 🕌 Personal & Community Use
- Create Islamic study materials
- Prepare dawah (outreach) materials
- Organize personal research and notes
- Share beneficial knowledge visually

## 🔒 Privacy & Security

### Our Commitment
- ✅ All processing happens locally in your browser
- ✅ No book data is uploaded to external servers
- ✅ PDF files are processed client-side only
- ✅ Watermark images are not stored or transmitted
- ✅ Complete privacy protection for your documents

### Data Handling
- No user tracking or analytics
- No file uploads to external servers
- Client-side processing only
- Temporary memory storage during session

## 📊 Performance Optimization Guide

### For Optimal Performance
1. **Large PDFs**: Allow extra time for initial processing of large files
2. **Mobile Devices**: Use 2-3 pages for better performance on mobile
3. **Highlights**: Regularly clear unused highlights to improve rendering speed
4. **Watermarks**: Use optimized, smaller images for faster processing
5. **Browser**: Use Chrome/Chromium for best PDF rendering performance

### Memory Management
- Automatic cleanup of unused pages
- Efficient canvas memory usage
- Smart caching strategies
- Progressive loading techniques

## 🎯 Pro Tips & Best Practices

### Collage Creation
- Use consecutive page numbers for cohesive layouts
- Preview your collage before final download
- Experiment with different page combinations
- Use the real-time preview to perfect your layout

### Highlighting Techniques
- Use different colors to categorize information
- Combine highlights with watermarks for professional looks
- Use the undo/redo features to experiment freely
- Save your work frequently during complex editing sessions

### Watermark Usage
- Start with subtle opacity (10-20%) for professional results
- Use PNG files with transparency for best效果
- Ensure your watermark is high-quality but optimized
- Test different positions and sizes for your brand

### Keyboard Shortcuts
- `Ctrl+Z` / `Cmd+Z`: Undo last action
- `Ctrl+Y` / `Cmd+Y`: Redo last action
- `Esc`: Cancel current operation
- `Delete`: Remove selected highlight (when implemented)

## 📈 Future Development Roadmap

### 🚀 Planned Features
- [ ] Batch collage creation and processing
- [ ] Advanced layout options (vertical, grid, custom)
- [ ] Text extraction from highlighted areas
- [ ] Cloud storage integration options
- [ ] Collaborative editing features
- [ ] Advanced editing tools (shapes, arrows, text)
- [ ] Template system for frequent layouts
- [ ] Export to multiple formats (PDF, JPG, WebP)

### 🔧 Technical Enhancements
- [ ] Progressive Web App (PWA) support
- [ ] Offline functionality
- [ ] Advanced caching strategies
- [ ] Performance monitoring
- [ ] Accessibility improvements
- [ ] Internationalization (i18n) support

## 📜 License & Usage

### Copyright
© 2024 Sijjeen. All rights reserved.

### Usage Terms
This project is provided for educational, personal, and community use. Users are responsible for:
- Respecting copyright laws when using book materials
- Obtaining proper permissions for copyrighted content
- Using the application in compliance with local laws
- Respecting intellectual property rights

### Distribution
- Personal use: Allowed and encouraged
- Educational use: Permitted with attribution
- Commercial use: Contact for licensing
- Modification: Allowed for personal use

## 🙏 Acknowledgments & Credits

### Special Thanks To
- **PDF.js Team**: Mozilla's incredible PDF rendering library
- **Islamic Scholars**: For their valuable works and publications
- **Book Publishers**: For making knowledge accessible
- **Open Source Community**: For inspiration and shared knowledge
- **Beta Testers**: For valuable feedback and improvement suggestions

### Technology Stack Credits
- PDF.js (Mozilla) - PDF rendering engine
- Google Fonts - Amiri and Scheherazade New fonts
- Uiverse.io - Beautiful UI components
- CDNJS - Reliable content delivery

## 🌍 Community & Support

### Stay Connected
- **Website**: [Coming Soon]
- **Community Forum**: [Planned]
- **Newsletter**: [Future Development]
- **Social Media**: Follow @sijjeen_ for updates

### Support the Project
- Share with your community
- Provide feedback and suggestions
- Contribute to the book library
- Report bugs and issues
- Suggest new features

---

<div align="center">

**Made with ❤️ for the Global Muslim Community**

*Sijjeen - Enhancing your reading, research, and knowledge sharing experience*

*"Read! In the name of your Lord who created" - Quran 96:1*

</div>
