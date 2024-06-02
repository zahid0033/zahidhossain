function GalleryModal({ gallery }) {
  console.log("render")
  return (
    <div className="top-2/4 left-2/4">
      <h1>Hello</h1>
      <img src={gallery.url} alt=""/>
    </div>
  )
}

export default GalleryModal;