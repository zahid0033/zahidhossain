import { useState } from "react";
import { getGallery } from "../data/data";
import GalleryModal from "./GalleryModal";


function Gallery() {
  let images = getGallery();
  let [modalOpen, setModalOpen] = useState(false);
  let [selectedGallery,setSelectedGallery] = useState(null)

  function handleModal (gallery){
    setModalOpen(!modalOpen);
    setSelectedGallery(gallery)
    console.log(modalOpen,gallery, "OPen");
  }
  function onCancel() {    
    setModalOpen(false);
  }
  return (
    <>
      {modalOpen && <GalleryModal gallery={selectedGallery} onCancel={onCancel} />}
      <section className="w-4/5 mx-auto overflow-hidden text-gray-700 py-10 mb-8" id="sample">
        <div className="container py-2 mx-auto ">
          <div className="grid lg:grid-cols-3 md:grid-cols-1 gallery" >
            {
              images.map((image, i) => (
                <div className="m-2 overflow-hidden cursor-pointer" key={i} onClick={() =>handleModal(image)}>
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
