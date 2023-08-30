import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
    Card,
    CardImg,
} from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function ImageSwiper({ images }) {

    const [activeStep, setActiveStep] = useState(1);
    const swiperRef = useRef(null);

    const params = {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    };
    const goNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
            // updateIndex();
        }
    };
    const goPrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };



    return (
        <>

            <div style={{ position: "relative" }} className="pricing-swiper-section">
                <div
                    style={{ position: "absolute", zIndex: 2, top: '40%' }}
                    className="arrow d-flex justify-content-between w-100 px-3 "
                >
                    <div
                        style={{ visibility: activeStep === 1 ? "hidden" : "visible" }}
                        className="border rounded-circle px-4 py-3 bg-light mr-3 cursor-pointer"
                        onClick={() => goPrev()}
                    >
                        <svg
                            width="100%"
                            height="20"
                            viewBox="0 0 8 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M7.70711 0.292893C8.09763 0.683417 8.09763 1.31658 7.70711 1.70711L2.41421 7L7.70711 12.2929C8.09763 12.6834 8.09763 13.3166 7.70711 13.7071C7.31658 14.0976 6.68342 14.0976 6.29289 13.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289L6.29289 0.292893C6.68342 -0.0976311 7.31658 -0.0976311 7.70711 0.292893Z"
                                fill="#2C2A29"
                            />
                        </svg>
                    </div>

                    <div
                        style={{ visibility: activeStep === images.length ? "hidden" : "visible" }}

                        className="border rounded-circle px-4 py-3 bg-light cursor-pointer ml-auto"
                        onClick={() => goNext()}
                    >
                        <svg
                            width="100%"
                            height="20"
                            viewBox="0 0 8 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0.292893 0.292893C-0.0976315 0.683417 -0.0976315 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976315 12.6834 -0.0976315 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7.70711 7.70711C8.09763 7.31658 8.09763 6.68342 7.70711 6.29289L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893Z"
                                fill="#2C2A29"
                            />
                        </svg>
                    </div>
                </div>

                <Card inverse style={{ border: "none" }}>
                    <Swiper
                        onActiveIndexChange={({ realIndex }) => {
                            setActiveStep(realIndex + 1);
                        }}
                        autoplay={true}
                        // loop
                        slidesPerView={1}
                        // mousewheel={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Mousewheel]}
                        navigation={true}
                        className="w-100"
                        {...params}
                        ref={swiperRef}
                    >
                        {images?.map((obj, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div>
                                        <CardImg
                                            alt="Card image cap"
                                            src={`http://localhost/RENTDRESS/images/${obj.dressimage1}`}
                                            width="100%"
                                        />
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </Card>

            </div>
        </>

    );
}

export default ImageSwiper;
