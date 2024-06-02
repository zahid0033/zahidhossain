export default function GalleryModal({ gallery}){
  return (
    <div className="absolute top-2/4 left-2/4 -translate-x-1/2 translate-y-2/4 w-full h-full">
      <div className="grid grid-cols-4">
        <img src={gallery.url} alt="" className="w-full" />
      </div>
      <div className="grid grid-cols-4">
        {gallery.description}
      </div>
    </div>
  )
}