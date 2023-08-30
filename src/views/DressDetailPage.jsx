import dress from "../assets/img/dress.jpg";

import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import starIcon from '../assets/img/rating-star.svg'
import { Button, Col, Container, Row, Spinner } from "reactstrap";
import ImageSwiper from "../components/ImageSwiper";

import { RepositoryFactory } from "../repository/RepositoryFactory";

var endPoint = RepositoryFactory.get("endPoint")

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
function DressCardDetail() {

    const { uid } = useSelector(
        (state) => state.authUser
    );

    const history = useHistory()
    const { id } = useParams()

    const [dressDetail, setDressDetail] = useState({})
    const [dates, setDates] = useState({
        startDate: getTodayDate(),
        endDate: getTodayDate(),
        pickingDate: getTodayDate()
    })

    const [loader, setLoader] = useState(false)

    // Function to get today's date in the correct format (YYYY-MM-DD)
    function getTodayDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    const hanldeBookDress = async () => {
        let bookingObj = {
            renterid: uid,
            oid: dressDetail.Oid,
            dressid: dressDetail.did,
            rentstartdate: dates.startDate,
            rentenddate: dates.endDate,
            pickingdate: dates.pickingDate,
            requeststatus: "pending"

        }

        const response = await endPoint.bookDress(bookingObj)
        if (response.statusText == 'OK') {
            alert('Your Request has been Submitted to Owner of Dress!!')
            history.push('/')
        }
        else {
            alert('something goes wrong')

        }
        console.log('response: ', response);
    }
    useEffect(() => {
        const fetchDresses = async () => {
            setLoader(true)
            const response = await endPoint.getDressById(id)
            setDressDetail(response.data)
            setLoader(false)
        }
        fetchDresses()
        console.log('id', id)
    }, [id])

    console.log('dressDetails: ', dressDetail);

    const getStars = (rating) => {
        console.log('rating: ', rating);
        const roundedRating = Math.ceil(rating);
        const stars = Array(roundedRating).fill(null);
        return stars
    }

    return (
        <>
            {
                loader ? <Spinner />
                    :

                    <Container >
                        <Row className="my-5">
                            <Col md='6' >
                                {dressDetail?.images?.length &&
                                    <ImageSwiper images={dressDetail?.images} />}
                            </Col>
                            <Col>
                                <div className="models-div__box__descr">
                                    <div className="userDetails">

                                        <div> <b >Owner Name:</b> <p>{dressDetail?.Oname}</p></div>
                                        <div><b >Contact#:</b> <p>{dressDetail?.Contact}</p></div>
                                        <div><b >Adrress:</b> <p>{dressDetail?.Address}</p></div>
                                    </div>

                                    <div className="models-div__box__descr__name-price">
                                        <div className="models-div__box__descr__name-price__name">
                                            <p className="border rounded px-3 py-2">Dress Type: {dressDetail?.type}</p>

                                        </div>
                                    </div>
                                    <div className="d-flex rating">
                                        <p className="mr-3 ml-1">Rating:</p>
                                        <span className="d-flex">
                                            {
                                                dressDetail?.rating ?
                                                    getStars(dressDetail?.rating)?.map((_, index) => (
                                                        // <i key={index} className="fa-solid fa-star"></i>
                                                        <img key={index} src={starIcon} alt="" style={{ height: 20 }} className="mx-1" />

                                                    ))
                                                    :
                                                    <h4 className="mt-1">No rating yet</h4>

                                            }
                                        </span>
                                    </div>
                                    <div className="dressDetail_price" >
                                        <h4 className="px-3 py-2 mt-1" >RS: {dressDetail?.rent} / per day</h4>
                                    </div>
                                    <div className="models-div__box__descr__name-price__details">
                                        <span>
                                            <i className="fas fa-ruler"></i>  &nbsp; {dressDetail?.size}
                                        </span>
                                        <span style={{ textAlign: "right" }}>
                                            <b>Quality:</b> {dressDetail?.quality}
                                        </span>
                                        <span>
                                            <i className="fas fa-palette"></i> &nbsp; {dressDetail?.color}
                                        </span>
                                        <span style={{ textAlign: "right" }}>
                                            <b>Status:</b> {dressDetail?.status}                                        </span>
                                    </div>

                                    <Row className="my-5 ">
                                        <Col sm='12' md='6' >
                                            <p>Start Date</p>
                                            <input min={getTodayDate()} value={dates.startDate} onChange={(e) => { setDates((curr) => ({ ...curr, startDate: e.target.value })) }} className="datePicker" type="date" />
                                        </Col>
                                        <Col sm='12' md='6'>
                                            <p>End Date</p>
                                            <input min={getTodayDate()} value={dates.endDate} onChange={(e) => { setDates((curr) => ({ ...curr, endDate: e.target.value })) }} className="datePicker" type="date" />
                                        </Col>
                                    </Row>

                                    <div className="models-div__box__descr__name-price__btn text-center" onClick={hanldeBookDress}>

                                        <p>  Book Dress</p>

                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>


            }

        </>
    );
}

export default DressCardDetail;
