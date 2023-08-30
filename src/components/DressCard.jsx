import dress from "../assets/img/dress.jpg";

import { Link, useHistory } from "react-router-dom";
import starIcon from '../assets/img/rating-star.svg'
import ImageSwiper from "./ImageSwiper";
import { Button, Container } from "reactstrap";
function DressCard({dressId, type, rent, size, color, status, quality, rating, images }) {
    const history = useHistory()
    const roundedRating = Math.ceil(rating);
    const stars = Array(roundedRating).fill(null);
    return (

        <div className="my-5 mx-3">
            <div className="models-div__box">
                <div className="models-div__box__img">
                    {
                        images.length &&
                        <ImageSwiper images={images} />
                        // <img src={`http://localhost/FYPAPI/images/${images[0].dressimage1}`} alt="dress_img" />



                    }
                    <div className="models-div__box__descr">
                        <div className="models-div__box__descr__name-price">
                            <div className="models-div__box__descr__name-price__name">
                                <p className="border rounded px-3 py-2">Dress Type: {type}</p>

                            </div>


                        </div>
                        <div className="d-flex rating">
                            <p className="mr-3 ml-1">Rating:</p>
                            <span className="d-flex">
                                {
                                    stars.length ?
                                        stars.map((_, index) => (
                                            // <i key={index} className="fa-solid fa-star"></i>
                                            <img key={index} src={starIcon} alt="" style={{ height: 20 }} className="mx-1" />

                                        ))
                                        :
                                        <h4 className="mt-1">No rating yet</h4>

                                }
                            </span>
                        </div>
                        <div className="models-div__box__descr__name-price__details">
                            <span>
                                <i className="fas fa-ruler"></i>  &nbsp; {size}
                            </span>
                            <span style={{ textAlign: "right" }}>
                                <b>Quality:</b> {quality}
                            </span>
                            <span>
                                <i className="fas fa-palette"></i> &nbsp; {color}
                            </span>
                            <span style={{ textAlign: "right" }}>
                                <b>Status:</b> {status}                                        </span>
                        </div>
                        <div className="card_price cursor-pointer" onClick={() => history.push(`/dress-detail/${dressId}`)}>
                            <h4 className="px-3 py-2 mt-1" >RS: {rent} / per day</h4>
                        </div>
                        {/* <div className="models-div__box__descr__name-price__btn">
                                        <Link onClick={() => window.scrollTo(0, 0)} to="/">
                                            Book Dress
                                        </Link>
                                    </div> */}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default DressCard;
