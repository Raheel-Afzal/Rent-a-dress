import { Link } from "react-router-dom";
import BgShape from "../assets/img/hero-bg.png";
import Dresses from "../assets/img/dresses.png";
import { useEffect, useState } from "react";

function HeroSection() {
    const [goUp, setGoUp] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: (0, 0), behavior: "smooth" });
    };

    const bookBtn = () => {
        document
            .querySelector("#booking-section")
            .scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        const onPageScroll = () => {
            if (window.pageYOffset > 600) {
                setGoUp(true);
            } else {
                setGoUp(false);
            }
        };
        window.addEventListener("scroll", onPageScroll);

        return () => {
            window.removeEventListener("scroll", onPageScroll);
        };
    }, []);
    return (
        <>
            <section id="home" className="hero-section">
                <div className="container">
                    <img className="bg-shape" src={BgShape} alt="bg-shape" />
                    <div className="hero-content">
                        <div className="hero-content__text">
                            <h4>Rent or Book a Dress Now</h4>
                            <h1>
                                Save <span>big</span> with our dress rental
                            </h1>
                            <p>
                                Rent the dress of your favorite dress. Unbeatable prices.

                            </p>
                            <div className="hero-content__text__btns">
                                <Link
                                    onClick={bookBtn}
                                    className="hero-content__text__btns__book-ride"
                                    to="/"
                                >
                                    Book Dress &nbsp; <i className="fa-solid fa-circle-check"></i>
                                </Link>
                                <Link className="hero-content__text__btns__learn-more" to="/">
                                    Rent Dress &nbsp; <i className="fa-solid fa-angle-right"></i>
                                </Link>
                            </div>
                        </div>

                        {/* img */}
                        <img
                            src={Dresses}
                            alt="car-img"
                            className="hero-content__car-img"
                        />
                    </div>
                </div>

                {/* page up */}
                <div
                    onClick={scrollToTop}
                    className={`scroll-up ${goUp ? "show-scroll" : ""}`}
                >
                    <i className="fa-solid fa-angle-up"></i>
                </div>
            </section>
        </>
    );
}

export default HeroSection;
