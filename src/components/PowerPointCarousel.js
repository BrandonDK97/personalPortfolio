import React, { useState } from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";



const PowerPointCarousel = () => {
    const experience = [
        {
            link: "https://docs.google.com/presentation/d/1fY6eR05g3kOk2o4m8dMTI7sIQF3YemGwHUC3odspgx8/edit?usp=sharing",
            imgLink: "fintech.png",
            title: "SMU Fintech x M-DAQ Case Competition 2021",
            description: "SMU Fintech Case Competition 2021 - Finalist"
        },
        {
            link: "https://docs.google.com/presentation/d/1bCJA-Y_m98ZS1US6HWCmSKgth2doS2a30qZxbH4ocBk/edit?usp=sharing",
            imgLink: "ecommerce.png",
            title: "Singapore Retail Association Reimagine Innovation Challenge 2022",
            description: "SRA Innovation Challenge 2022 - Finalist"
        },
        {
            link: "https://docs.google.com/presentation/d/1IXJ8ktEg5iL3b0OVgMhqmmTr1k4Fx4abJsDjJVUeSLA/edit?usp=sharing",
            imgLink: "tanzu.png",
            title: "VMware Tanzu Award",
            description: "VMware Tanzu Award 2022 - Champions"
        },
        {
            link: "https://docs.google.com/presentation/d/1On1iZ_OsM71BTxUdkHOVVBvk4GpB8nSiA16-RuALhDE/edit?usp=sharing",
            imgLink: "maritime.png",
            title: "MSC Maritime Digital Challenge 2021",
            description: "MSC Maritime Digital Challenge 2021 - Champions"
        }
    ];

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        height: '100%', // Set the desired height here
        justifyContent: 'space-between',
    };
    const contentStyle = {
        marginBottom: '1rem', // Adjust as needed for spacing
    };

    const slideImageStyle = {
        width: '100%',
        height: 'auto',
        objectFit: 'contain',
    };

    return (
        <div className='owl-carousel visiblecarousel owl-loaded'>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    767: {
                        slidesPerView: 1,
                    },
                    991: {
                        slidesPerView: 2,
                    },
                    1199: {
                        slidesPerView: 2,
                    },
                    1350: {
                        slidesPerView: 2,
                    },
                }}
                className=""
            >
                {experience.map((item, i) => (
                    <SwiperSlide key={i}>
                        <div className="resume-item item" style={containerStyle}>
                            <div style={contentStyle}>
                                <div className="d-flex align-items-center justify-content-between">
                                    <h6 className="mb-0">{item.description}</h6>
                                </div>
                            </div>
                            <div>
                                <a className='my-5' href={item.link} target="_blank" rel="noopener noreferrer">
                                    <img style={slideImageStyle} src={'images/powerpoints/' + item.imgLink} />
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
};

export default PowerPointCarousel;
