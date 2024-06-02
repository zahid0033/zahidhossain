export default function GalleryModal({ gallery}){
  return (
    <div className="absolute top-2/4 left-2/4 -translate-x-1/2 translate-y-2/4 block w-full h-full grid grid-cols-6">
      <div className="">
        <img src={gallery.url} alt="" className="w-full" />
      </div>
      <div className="">
        {gallery.description}
      </div>
    </div>
  )
}