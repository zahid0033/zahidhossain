import { useState } from "react";
import { getGallery } from "../data/data";
import GalleryModal from "./GalleryModal.jsx";


function Gallery() {
  let images = getGallery();
  let [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {modalOpen && GalleryModal}
      <section className="w-4/5 mx-auto overflow-hidden text-gray-700 py-10 mb-8">
        <div className="container py-2 mx-auto ">
          <div className="grid lg:grid-cols-3 md:grid-cols-1 gallery" onClick={() => { console.log("clicked"); setModalOpen(!modalOpen) }}>
            {
              images.map((image, i) => (
                <div className="m-2 overflow-hidden">
                  <img
                    alt="gallery"
                    className="block object-contain object-center w-full h-full rounded-lg"
                    src={image.url}
                  />
                  <div class="overlay absolute bg-cyan-800 w-1/2 -right-1/2 top-0 h-full ease-in-out text-white bold p-4 flex items-center">
                    {image.description}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
