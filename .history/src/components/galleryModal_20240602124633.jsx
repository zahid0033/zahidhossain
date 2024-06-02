export default function GalleryModal({ gallery}){
  return (
    <div className="grid grid-cols-4 galleryModal">
        <img src={gallery.url} alt="" className="col-span-3" />
      
      <div className="">
        {gallery.description}
      </div>
    </div>
  )
}