
import image from '../assets/11922419.png'
const NewItem = ({title,description,src,url}) => {
  return (
    <div className="card bg-black text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
  <img src={src?src:image} style={{height:"200px",width:"325px"}} className="card-img-top my-2 mt-2" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title?title.slice(0,50):"untitled"}</h5>
    <p className="card-text">{description?description.slice(0,90):"New incident,it is the incident happend in this country"}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default NewItem;