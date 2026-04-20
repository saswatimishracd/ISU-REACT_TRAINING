import zipfile
import xml.etree.ElementTree as ET
import sys

def get_docx_text(path):
    try:
        with zipfile.ZipFile(path) as docx:
            tree = ET.XML(docx.read('word/document.xml'))
        paragraphs = []
        for paragraph in tree.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p'):
            texts = [node.text for node in paragraph.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t') if node.text]
            if texts: paragraphs.append(''.join(texts))
        return '\n'.join(paragraphs)
    except Exception as e:
        return f"Error: {e}"

print(get_docx_text("C:/Users/saswa/Desktop/Final-React-Assignment/Final_Assessment_Batch3_CBOI.docx"))
