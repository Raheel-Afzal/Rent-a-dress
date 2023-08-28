import dress from "../assets/img/dress.jpg";

import { Link } from "react-router-dom";

function DressCard() {
    return (
        <>
            <section className="models-section">
                <div className="container">
                    <div className="models-div">
                        <div className="models-div__box">
                            <div className="models-div__box__img">
                                <img src={dress} alt="car_img" />
                                <div className="models-div__box__descr">
                                    <div className="models-div__box__descr__name-price">
                                        <div className="models-div__box__descr__name-price__name">
                                            <p>Dress</p>
                                            <span>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </span>
                                        </div>
                                        <div className="models-div__box__descr__name-price__price">
                                            <h4>$45</h4>
                                            <p>per day</p>
                                        </div>
                                    </div>
                                    <div className="models-div__box__descr__name-price__details">
                                        <span>
                                            <i className="fa-solid fa-car-side"></i> &nbsp; Audi
                                        </span>
                                        <span style={{ textAlign: "right" }}>
                                            4/5 &nbsp; <i className="fa-solid fa-car-side"></i>
                                        </span>
                                        <span>
                                            <i className="fa-solid fa-car-side"></i> &nbsp; Manual
                                        </span>
                                        <span style={{ textAlign: "right" }}>
                                            Diesel &nbsp; <i className="fa-solid fa-car-side"></i>
                                        </span>
                                    </div>
                                    <div className="models-div__box__descr__name-price__btn">
                                        <Link onClick={() => window.scrollTo(0, 0)} to="/">
                                            Book Dress
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>


                       
                    </div>
                </div>
            </section>
        </>
    );
}

export default DressCard;
