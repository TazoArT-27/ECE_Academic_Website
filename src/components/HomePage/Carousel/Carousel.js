
import React, { Component } from "react";
import Slider from "react-slick";
import './Carousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import photo1 from '../../../images/ecephotos/thailand.jpg';
import photo2 from '../../../images/ecephotos/lanka.jpg';
import photo3 from '../../../images/ecephotos/students-of-ece-are-also-advanced-in-cultural-activities.png';
import photo4 from '../../../images/ecephotos/akibuki 3.jpg';


export default class PauseOnHover extends Component {
  render() {

    const projectData = [
		{
			img: photo1,
		},
		{
			img: photo2,
		},
		{
			img: photo3,
		},
		{
			img: photo4,
		},
	];


    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
    return (
            <div className="col-10 mx-auto pb-5">
            <section className="carousel">
                  <h1 className="text-white text-center py-5">
                              Some Moments of <span style={{color: '#007BFF'}}>ECE</span>
                  </h1>
                  <div className='pt-3 '>
                      <Slider {...settings} className="">
                        {projectData.map((project) => (
                          <div className="carousel-slide img-fluid" key={Math.random()}>
                            <img className="carousel-img" src={project.img} alt="" />
                          </div>
                        ))}
                      </Slider>
                  </div>
            </section>
        </div>
    );
  }
}