import React from "react";

function Gallery() {
  return (
    <section className="w-4/5 mx-auto overflow-hidden text-gray-700 py-10 mb-8">
      <div className="container py-2 mx-auto ">
        <div className="grid grid-cols-3">
          <div className="">
            <img
              alt="gallery"
              className="block object-cover object-center w-full h-full rounded-lg"
              src="https://i.ibb.co/hVDwt4f/Screenshot-2022-08-23-134723.png"
            />
          </div>
          <div className="">
            <img
              alt="gallery"
              className="block object-cover object-center w-full h-full rounded-lg"
              src="https://i.ibb.co/T0TzzRM/Screenshot-2022-08-23-134934.png"
            />
          </div>
          <div className="">
            <img
              alt="gallery"
              className="block object-cover object-center w-full h-full rounded-lg"
              src="https://i.ibb.co/hVDwt4f/Screenshot-2022-08-23-134723.png"
            />
          </div>
          <div className="">
            <img
              alt="gallery"
              className="block object-cover object-center w-full h-full rounded-lg"
              src="https://i.ibb.co/Tv9kNJW/Screenshot-2022-08-26-010320.png"
            />
          </div>
          <div className="">
            <img
              alt="gallery"
              className="block object-cover object-center w-full h-full rounded-lg"
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
            />
          </div>
          <div className="">
            <img
              alt="gallery"
              className="block object-cover object-center w-full h-full rounded-lg"
              src="https://i.ibb.co/T0TzzRM/Screenshot-2022-08-23-134934.png"
            />
          </div>
          <div className="">
            <img
              alt="gallery"
              className="block object-cover object-center w-full h-full rounded-lg"
              src="https://i.ibb.co/T0TzzRM/Screenshot-2022-08-23-134934.png"
            />
          </div>
        </div>

        <div className="flex flex-wrap -m-1 md:-m-2">
          <div className="flex flex-wrap w-1/2">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="https://i.ibb.co/T0TzzRM/Screenshot-2022-08-23-134934.png"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="https://i.ibb.co/Tv9kNJW/Screenshot-2022-08-26-010320.png"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="https://i.ibb.co/hVDwt4f/Screenshot-2022-08-23-134723.png"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="https://i.ibb.co/StYMh08/Screenshot-2022-08-22-215920.png"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="https://setcolbd.com/static/media/dream-world-corporation.dfe2580f.webp"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
