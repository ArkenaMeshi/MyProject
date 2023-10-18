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
            <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={livingroom1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={home1}class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={kitchen1} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  <h2>name of property</h2>
</div>
<div class="card text-center mb-4" >
  <div class="card-body">
    <h5 class="card-title">Overview</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.Cards include a few options for working with images. Choose from appending “image caps” at either end of a card, 
    overlaying images with card content, or simply embedding the image in a card.</p>
   
  </div>
</div>



            </div>
            <div className="col">
            <div class="card text-center mb-3 fs-5" >
  <div class="card-body">
    <h5 class="card-title">Favourite <a href="#">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16" className="svg-icons">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
</svg>
</a></h5>
    
    <p class="card-text">Price : </p>
    <p>Ready to rent now ? </p>
    <button className="rent-button"> Rent Now </button>
  </div>
</div>

<div class="card text-center mb-3" >
  <div class="card-body">
    <h5 class="card-title">Features</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.Cards include a few options for working with images. Choose from appending “image caps” at either end of a card, 
    overlaying images with card content, or simply embedding the image in a card.</p>
   
  </div>
</div>
<div class="card text-center mb-3" >
  <div class="card-body">
    <h5 class="card-title">Maps</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.Cards include a few options for working with images. Choose from appending “image caps” at either end of a card, 
    overlaying images with card content, or simply embedding the image in a card.</p>
   
  </div>
</div>

            </div>

        </div>
        
        </div>
    )
}

export default Details