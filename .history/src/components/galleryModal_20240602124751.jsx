export default function GalleryModal({ gallery}){
  return (
    <>
      <div className="grid grid-cols-4 galleryModal">
        <div className="col-span-3">
          <img src={gallery.url} alt="" className="" />
        </div>
        <div className="">
          {gallery.description}
        </div>
      </div>
    </>
  )
}