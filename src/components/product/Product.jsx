
import "./product.css";

const Product = ({img,category,anch,title}) => {
  return ( 

<div class="project-card">
<div class="project-image">
    <img src={img} alt={title}/>
</div>
<div class="project-info">
    <p class="project-category">{category}</p>
    <strong class="project-title">
        <span>{title}</span>
        <a href="#" class="more-details">{anch}</a>
    </strong>
</div>
</div>
  )}

export default Product;

