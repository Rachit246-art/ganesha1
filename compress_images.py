import os
import sys
from PIL import Image

def compress_image(image_path, target_quality=85, max_size_mb=1.0):
    try:
        # Check size
        size_mb = os.path.getsize(image_path) / (1024 * 1024)
        if size_mb <= max_size_mb:
            return False, f"Skipped: Size is {size_mb:.2f}MB (<= {max_size_mb}MB)"

        with Image.open(image_path) as img:
            # Convert RGBA to RGB if necessary (JPEGs don't support alpha)
            if img.mode in ("RGBA", "P"):
                img = img.convert("RGB")
            
            # Save the image with optimized settings over the original file
            img.save(image_path, "JPEG", optimize=True, quality=target_quality)
        
        new_size_mb = os.path.getsize(image_path) / (1024 * 1024)
        return True, f"Compressed from {size_mb:.2f}MB to {new_size_mb:.2f}MB"
    except Exception as e:
        return False, f"Error: {e}"

if __name__ == "__main__":
    if len(sys.argv) > 1:
        # Test mode on a specific file
        test_file = sys.argv[1]
        print(f"Testing on {test_file}...")
        success, msg = compress_image(test_file)
        print(msg)
    else:
        # Full mode
        directories = [
            "d:/Div mangal/ganpatijii/Antique-Solapur-Ganeshji-Catalogue",
            "d:/Div mangal/ganpatijii/Eco-Friendly-Ganeshji-Catalogue"
        ]
        
        total_compressed = 0
        for directory in directories:
            for root, dirs, files in os.walk(directory):
                for file in files:
                    if file.lower().endswith(('.jpg', '.jpeg')):
                        full_path = os.path.join(root, file)
                        success, msg = compress_image(full_path)
                        if success:
                            total_compressed += 1
                            print(f"{full_path} -> {msg}")
        
        print(f"\nDone! Compressed {total_compressed} images.")
