import React, { useState, useContext } from 'react'
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import HorizontalTimeline from '../Timeline';
import PowerPointCarousel from '../PowerPointCarousel';
import IconList from '../IconList';
import { Context } from '../../context/context';

SwiperCore.use([Autoplay, Navigation]);



export default function About() {
  const { sectionToggle } = useContext(Context);

  const [active, setActive] = useState(2);
  const education = [
    {
      degree: "Diploma in Information Systems",
      year: "2014-2018",
      institution: "Temasek Polytechnic",
      detail: "Poly Foundation Programme. Focused on web and mobile application development. Graduated with a Diploma with merit and Final Year Project awards."
    },
    {
      degree: "Bachelor's degree in Information Systems.",
      year: "2020-2024 (expected)",
      institution: "Singapore Management University",
      detail: "Focus on Business Analytics & Digitalization and Cloud Solutions. On track to graduate in May 2024 with Magna Cum Laude."
    }
  ]

  const decentIcons = [
    { name: 'python' },
    { name: 'javascript' },
    { name: 'typescript' },
    { name: 'flask' },
    { name: 'react' },
    { name: 'postgresql' },
    { name: 'firebase' },
    { name: 'mongodb' },
    { name: 'aws' }
  ]

  const normalIcons = [
    { name: 'java' },
    { name: 'express' },
    { name: 'nodejs' },
    { name: 'redis' },
    { name: 'redux' },
    { name: 'spring' },
    { name: 'php' },
    { name: 'express' },
    { name: 'docker' },
    { name: 'kubernetes' },
    { name: 'git' },
    { name: 'mysql' }
    ,
  ]

  return (
    <div id="about-content">
      <div className="heading text-left text-md-center">
        <h2>
          about <span>me</span>
          <h6 className='my-4'> It's been about 8 years since I wrote my first line of code, here's my <span>journey</span> in a page</h6>
        </h2>
      </div>
      <div className="container infos">
        <div className="row infos-holder align-items-center">
          <div className="col-12 col-lg-5">
            <img
              className="img-fluid d-block photo"
              src="images/profile.jpg"
              alt=""
            />
          </div>
          <div className="col-12 col-lg-7">
            <p className="m-0">
              Hey there, I'm Brandon, a student at Singapore Management University pursuing a Bachelor's Degree in Information Systems. I love to travel, code and gym and ocassionally try out new things.
              I was really never good at anything when I was young but the first time I wrote code, I knew that I finally found something that I enjoy and possibly can be good at. I love to code because it allows me to create things that can help people 
              and make their lives easier. I am a firm believer that technology can be used to make the world a better place and I hope to be able to contribute to that in the future.


            </p>
            <p className='my-4'>
            My end goal would be to see the world and all the wanders that it has to offer. Of course while being a Software Engineer coding out projects that makes life a little less harder than it already is. Besides being a coding enthusiast,
            I've got hands-on experience from internships in both full-stack development and data/product analytics. Learn more about my journey below. 
            </p>
            <div className="row text-nowrap">
            </div>
          </div>
        </div>
      </div>
      <div className="w-100 resume">
        <div className="container">
          <div className="row">
            <div className="col-12 pl-0">
              <h4 className="subtitle text-center">My Journey</h4>
            </div>
            <div className="resume-header">
              <p className={`${active === 2 ? 'active' : ''}`} onClick={() => setActive(2)}>
                Education
              </p>
              <p className={`${active === 1 ? 'active' : ''}`} onClick={() => setActive(1)}>
                Experience
              </p>
            </div>
            <div className="col-12 resume-holder">
              {active === 1 ? (
                <div>
                  <HorizontalTimeline />
                </div>
              ) : (
                <div>
                  <div className={`education-container ${active === 2 ? 'visiblecarousel' : 'hiddencarousel'}`}>
                    {education.map((item, i) => (
                      <div className="resume-item item" key={i}>
                        <div className="d-flex align-items-center justify-content-between">
                          <h5 className="mb-0">{item.degree}</h5>
                          <h6 className="mb-0">{item.year}</h6>
                        </div>
                        <span className="company d-inline-block mb-2">{item.institution}</span>
                        <p>{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-100 badges">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4 className="subtitle">
                My skills
              </h4>
              <h4 className="title mt-4 mb-2" style={{ color: "#FFFFFF" }}>
                I am decent in
              </h4>
              <div className='icon-list col-12 md-4'>
                <IconList icons={decentIcons} />
              </div>
              <h4 className="title mt-4 mb-2" style={{ color: "#FFFFFF" }}>
                I have dabbled in
              </h4>
              <div className='icon-list col-12 md-4'>
                <IconList icons={normalIcons} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <h4 className="subtitle mt-3">
          Case Competitions
        </h4>
        <h6 className='my-4 heading' style={{color:"#FFFFFF"}}> Participating in case competitions and hackathons with friends fuels my passion for innovation and business acumen.
          Explore a snapshot of my work below! </h6>
        <div className="row">
          <div className='col resume holder'>
            <PowerPointCarousel />
          </div>
        </div>
      </div>
    </div >
  )
}
