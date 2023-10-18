import React from "react";
import livingroom1 from "../assets/livingroom1.jpg"
import home1 from "../assets/home1.jpg"
import kitchen1 from "../assets/kitchen1.jpg"
import { Link } from "react-router-dom";


const Details=()=>{
    return(
        < div>
      
        <Link   className=" btn goback link-secondary link-offset-2  link-underline-opacity-0" to={'/list'} > Go Back To My Search</Link>

        <div className="row">
            <div className="col">
            <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={livingroom1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={home1}className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={kitchen1} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  <h2>name of property</h2>
</div>
<div className="card text-center mb-4" >
  <div className="card-body">
    <h5 className="card-title">Overview</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.Cards include a few options for working with images. Choose from appending “image caps” at either end of a card, 
    overlaying images with card content, or simply embedding the image in a card.</p>
   
  </div>
</div>



            </div>
            <div className="col">
            <div className="card text-center mb-3 fs-5" >
  <div className="card-body">
    <h5 className="card-title">Favourite <a href="#">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16" classNameName="svg-icons">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
</svg>
</a></h5>
    
    <p className="card-text">Price : </p>
    <p>Ready to rent now ? </p>
    <button className="rent-button"> Rent Now </button>
  </div>
</div>

<div className="card text-center mb-3" >
  <div className="card-body">
    <h5 className="card-title">Features</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.Cards include a few options for working with images. Choose from appending “image caps” at either end of a card, 
    overlaying images with card content, or simply embedding the image in a card.</p>
   
  </div>
</div>
<div className="card text-center mb-3" >
  <div className="card-body">
    <h5 className="card-title">Maps</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.Cards include a few options for working with images. Choose from appending “image caps” at either end of a card, 
    overlaying images with card content, or simply embedding the image in a card.</p>
   
  </div>
</div>

            </div>

        </div>
        
        </div>
    )
}

export default Details