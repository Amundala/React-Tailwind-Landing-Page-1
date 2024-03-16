import React from "react";

function Gallery() {
  return (
    <div id="gallery" className="max-w-[1140px] m-auto w-full px-4 py-16">
      <h2 className="p-4 text-center text-gray-700">Gallery</h2>
      <div className="grid sm:grid-cols-5 gap-4">
        <div className="sm:col-span-3 col-span-2 row-span-2">
          <img
            src="https://plus.unsplash.com/premium_photo-1680815065140-0adb64cadeb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8eWFjaHR8ZW58MHx8MHx8fDA%3D"
            alt="/"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1628661114098-0a711362734a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8eWFjaHQlMjBibGFja3xlbnwwfHwwfHx8MA%3D%3D"
            alt="/"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsfGVufDB8fDB8fHww"
            alt="/"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGhvdGVsfGVufDB8fDB8fHww"
            alt="/"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1562790351-d273a961e0e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGhvdGVsfGVufDB8fDB8fHww"
            alt="/"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
