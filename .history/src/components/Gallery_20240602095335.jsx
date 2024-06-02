import { getGallery } from "../data/data";

function Gallery() {
  let images = getGallery();
  return (
    <section className="w-4/5 mx-auto overflow-hidden text-gray-700 py-10 mb-8">
      <div className="container py-2 mx-auto ">
        <div className="grid lg:grid-cols-3 md:grid-cols-1 gallery">
          {
            images.map((image, i) => (
              <div className="m-2">
                <img
                  alt="gallery"
                  className="block object-contain object-center w-full h-full rounded-lg"
                  src={image.url}
                />
                <div class="overlay">Tests</div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default Gallery;
