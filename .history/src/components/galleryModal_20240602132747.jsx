export default function GalleryModal({ gallery,onCancel}){
  return (
    <>
      <div className="backdrop" onClick={onCancel}></div>
      <div className="grid grid-cols-4 galleryModal">
        <div className="col-span-3">
          <img src={gallery.url} alt="" className="" />
        </div>
        <div className="description text-lg text-white p-2 text-justify">
          {gallery.description}
        </div>
      </div>
    </>
  )
}