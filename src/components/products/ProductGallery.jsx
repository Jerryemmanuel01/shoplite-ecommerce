import React, { useState } from 'react';

/**
 * Product image gallery layout with a featured large photo and thumbnail strip.
 * 
 * NOTE FOR STUDENTS:
 * Currently displays the primary image and static thumbnails.
 * You can add a `useState` hook to let clicking thumbnails switch the active image!
 */
export default function ProductGallery({ images = [], name = 'Product' }) {

    const [selectedImage, setSelectedImage] = useState(images?.[0]|| "");
  
  const displayImages = images && images.length > 0
    ? images
    : ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80'];

  const mainImage = displayImages[0];

  return (
    <div className="flex flex-col gap-4">
      {/* Featured Primary Image View */}
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#F8F8F6] border border-neutral-200">
        <img
          src={selectedImage}
          alt={name}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Thumbnails Row */}
      {displayImages.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {displayImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(img)}
              type="button"
              className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                img === selectedImage
                  ? "border-orange-500 ring-2 ring-orange-500/20"
                  : "border-neutral-200 hover:border-neutral-400 opacity-80 hover:opacity-100"
              }`}
              aria-label={`View thumbnail ${idx + 1}`}
            >
              <img
                src={img}
                alt={`${name} view ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
