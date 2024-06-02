export default function GalleryModal({ gallery}){
  return (
    <div className = "absolute top-2/4 left-2/4 -translate-x-1/2 translate-y-2/4 w-full h-full">
      <img src={gallery.url} />
    </div>
  )
}