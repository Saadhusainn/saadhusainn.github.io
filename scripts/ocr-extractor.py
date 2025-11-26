#!/usr/bin/env python3
"""
PDF Text Extractor for Sijjeen Books
Runs automatically via GitHub Actions
"""

import requests
import PyPDF2
import json
import os
import re
from urllib.parse import unquote
import time

def download_pdf(pdf_url, local_path):
    """Download PDF from URL"""
    try:
        response = requests.get(pdf_url, stream=True, timeout=30)
        response.raise_for_status()
        
        with open(local_path, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
        return True
    except Exception as e:
        print(f"❌ Failed to download {pdf_url}: {e}")
        return False

def extract_text_from_pdf(pdf_path):
    """Extract text from PDF using PyPDF2"""
    try:
        with open(pdf_path, 'rb') as file:
            pdf_reader = PyPDF2.PdfReader(file)
            text_content = []
            
            for page_num in range(len(pdf_reader.pages)):
                page = pdf_reader.pages[page_num]
                text = page.extract_text()
                
                # Clean and normalize Arabic text
                if text.strip():
                    # Basic Arabic text cleaning
                    text = re.sub(r'\s+', ' ', text)  # Remove extra whitespace
                    text = text.strip()
                    
                    text_content.append({
                        'page': page_num + 1,
                        'text': text
                    })
                
                # Progress indicator
                if (page_num + 1) % 50 == 0:
                    print(f"  📄 Processed page {page_num + 1}")
            
            return text_content
    except Exception as e:
        print(f"❌ Error extracting text from {pdf_path}: {e}")
        return []

def process_books_index(books_index_path):
    """Process books-index.js and extract book information"""
    try:
        with open(books_index_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Extract JavaScript object using regex
        # Look for booksIndex = { ... } pattern
        match = re.search(r'booksIndex\s*=\s*({.*?});', content, re.DOTALL)
        if not match:
            print("❌ Could not find booksIndex in JavaScript file")
            return None
            
        js_object = match.group(1)
        
        # Convert JavaScript object to Python dict (simple approach)
        # This handles basic JS objects - you might need to adjust based on your structure
        js_object = js_object.replace('null', 'None')
        js_object = js_object.replace('true', 'True')
        js_object = js_object.replace('false', 'False')
        
        books_data = eval(js_object)
        return books_data
        
    except Exception as e:
        print(f"❌ Error processing books index: {e}")
        return None

def main():
    print("🚀 Starting PDF Text Extraction...")
    
    # Create necessary directories
    os.makedirs('temp_pdfs', exist_ok=True)
    os.makedirs('search-index', exist_ok=True)
    
    # Process books-index.js
    books_data = process_books_index('books-index.js')
    if not books_data:
        print("❌ Failed to process books index")
        return
    
    search_index = []
    processed_count = 0
    error_count = 0
    
    # Process single books
    if 'single' in books_data:
        for book in books_data['single']:
            print(f"\n📚 Processing: {book['name']}")
            
            if not book.get('file') or 'example.com' in book.get('file', ''):
                print("  ⏭️  Skipping - no valid file URL")
                continue
            
            try:
                # Download PDF
                pdf_filename = f"temp_pdfs/{book['name'].replace(' ', '_')}.pdf"
                if download_pdf(book['file'], pdf_filename):
                    # Extract text
                    text_content = extract_text_from_pdf(pdf_filename)
                    
                    # Add to search index
                    for page_data in text_content:
                        search_index.append({
                            'book': book['name'],
                            'volume': 'Single Volume',
                            'page': page_data['page'],
                            'text': page_data['text'],
                            'preview': page_data['text'][:200] + '...' if len(page_data['text']) > 200 else page_data['text'],
                            'file': book['file'],
                            'publisher': book.get('publisher', ''),
                            'language': book.get('language', ''),
                            'type': 'single'
                        })
                    
                    processed_count += 1
                    print(f"  ✅ Successfully processed {len(text_content)} pages")
                    
                    # Clean up downloaded file
                    os.remove(pdf_filename)
                else:
                    error_count += 1
                    
            except Exception as e:
                print(f"  ❌ Error processing {book['name']}: {e}")
                error_count += 1
    
    # Process multi-volume books
    if 'multi' in books_data:
        for book in books_data['multi']:
            print(f"\n📚 Processing Multi-volume: {book['name']}")
            
            for volume in book.get('volumes', []):
                print(f"  📖 Volume: {volume['name']}")
                
                if not volume.get('file') or 'example.com' in volume.get('file', ''):
                    print("    ⏭️  Skipping - no valid file URL")
                    continue
                
                try:
                    # Download PDF
                    pdf_filename = f"temp_pdfs/{book['name'].replace(' ', '_')}_{volume['name'].replace(' ', '_')}.pdf"
                    if download_pdf(volume['file'], pdf_filename):
                        # Extract text
                        text_content = extract_text_from_pdf(pdf_filename)
                        
                        # Add to search index
                        for page_data in text_content:
                            search_index.append({
                                'book': book['name'],
                                'volume': volume['name'],
                                'page': page_data['page'],
                                'text': page_data['text'],
                                'preview': page_data['text'][:200] + '...' if len(page_data['text']) > 200 else page_data['text'],
                                'file': volume['file'],
                                'publisher': book.get('publisher', ''),
                                'language': book.get('language', ''),
                                'type': 'multi'
                            })
                        
                        print(f"    ✅ Successfully processed {len(text_content)} pages")
                        
                        # Clean up downloaded file
                        os.remove(pdf_filename)
                    else:
                        error_count += 1
                        
                except Exception as e:
                    print(f"    ❌ Error processing {volume['name']}: {e}")
                    error_count += 1
    
    # Save search index
    with open('search-index/search-index.json', 'w', encoding='utf-8') as f:
        json.dump(search_index, f, ensure_ascii=False, indent=2)
    
    print(f"\n🎉 Extraction Complete!")
    print(f"✅ Successfully processed: {processed_count} books")
    print(f"❌ Errors: {error_count}")
    print(f"📊 Total pages indexed: {len(search_index)}")
    print(f"💾 Search index saved to: search-index/search-index.json")

if __name__ == "__main__":
    main()
