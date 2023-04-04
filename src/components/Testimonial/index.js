import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../CardTesti"

const settings = {
  centerPadding: '30px',
centerMode: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Testimonial = () => {
  return (
    <div>
      <h2>Testimonial</h2>
      <p>Berbagai review positif dari para pelanggan kami</p>
      <Slider {...settings} >
      <div class="card">
          <div class="card-body">
          <img class="card-img-top" src="../../../public/assets/img-boy.png" alt="" />
            <h4 class="card-title">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</h4>
            <p class="card-text">Text</p>
          </div>
        </div>

        <div class="card">
          <img class="card-img-top" src="holder.js/100x180/" alt="" />
          <div class="card-body">
            <h4 class="card-title">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</h4>
            <p class="card-text">Text</p>
          </div>
        </div>

        <div class="card">
          <img class="card-img-top" src="holder.js/100x180/" alt="" />
          <div class="card-body">
            <h4 class="card-title">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</h4>
            <p class="card-text">Text</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Testimonial;




// import"./style.css"
// import"../CardTesti"
// import CardTesti from "../CardTesti";

// const Testimonial =() =>{
//     return(
//         <>
//          <div className="testimonial" id="Testimonial">
//         <h1 >Testimonial</h1>
//     <p>
//       Berbagai review positif dari para pelanggan kami
//     </p>

//     <CardTesti testiImg=".png"
//           testiText="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”"
//           nameTesti="John Dee 32, Bromo"
//         />
//     </div>


//         </>
//     )
// }

// export default Testimonial;