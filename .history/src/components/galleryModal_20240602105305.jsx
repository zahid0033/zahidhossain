export default function GalleryModal({gallery}) {
  return (
    <div className="absolute top-2/4 left-2/4">
      <img src={gallery.url} alt=""/>
    </div>
  )
}
