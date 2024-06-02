function GalleryModal({ gallery }) {
  return (
    <div>
      <div className="absolute top-2/4 left-2/4 -translate-x-1/2 translate-y-2/4 w-full h-full">
          <h1>Hello</h1>
          <img src={gallery.url} alt="" />
        </div>
    </div>
  )  
}
export default GalleryModal;