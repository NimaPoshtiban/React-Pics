import './ImageList.css'
import ImageCard from './ImageCard'
const ImageList = ({images}) => {

  const allImages = images.map((image)=>{
    return <ImageCard image={image} key={image.id}/>
  })

  return (
    <div className="image-list">
      {allImages}
    </div>
  )
}

export default ImageList
