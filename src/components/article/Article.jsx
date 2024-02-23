import React, { useEffect } from 'react';
import './Article.css';
import { Blog, Header } from '../../containers';
import Carousel from 'react-bootstrap/Carousel';
import SectionA02 from '../../images/sectionA/Section-A02.jpg';
import SectionA03 from '../../images/sectionA/Section-A03.jpg';
import SectionB from '../../images/sectionB/Section-B.jpg';
import SectionC from '../../images/sectionC/Section-C.png'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Article = () => {
  useEffect(()=>{
    AOS.init({duration: 2000})
  }, [])
  return (
    <div className='article'>
      {/* section A */}
      <div className="article_sectionA">
        <div className="acticle_sectionA-enjoy" data-aos="slide-right">
          <Header header={"Enjoy on your TV"}/>
          <Blog paragragh={"Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."} />
        </div>
        <div className="article_sectionA-image" data-aos='slide-left'>
          <div className="article_sectionA-image-slideshow">
            <Carousel>
              <Carousel.Item interval={3000}>
                <img src={SectionA02} alt="" />
              </Carousel.Item>
              <Carousel.Item interval={3000}>
              <img src={SectionA03} alt="" />
              </Carousel.Item>
            </Carousel> 
          </div>
        </div>
      </div>
      {/* end */}
      <hr />
      {/* section B */}
      <div className="article_sectionB">
        <div className="article_sectionB-image" data-aos="slide-right">
           <img src={SectionB} alt="" /> 
        </div>
        <div className="acticle_sectionB-download" data-aos='slide-left'>
          <Header header={"Download your shows to watch offline"}/>
          <Blog paragragh={"Save your favorites easily and always have something to watch."} />
        </div>
      </div>
      {/* end */}
      <hr />
      {/* section B */}
      <div className="article_sectionC">
        <div className="acticle_sectionC-create" data-aos="slide-right">
          <Header header={"Create profiles for kids"}/>
          <Blog paragragh={"Send kids on adventures with their favorite characters in a space made just for them—free with your membership."} />
        </div>
        <div className="article_sectionC-image" data-aos='slide-left'>
           <img src={SectionC} alt="" /> 
        </div>
      </div>
      {/* end */}
    </div>
  )
}

export default Article