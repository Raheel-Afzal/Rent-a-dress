import ImageSwiper from "./ImageSwiper";

import { RepositoryFactory } from "../repository/RepositoryFactory";
import { useSelector } from "react-redux";
var endPoint = RepositoryFactory.get("endPoint")

function DressCardRent({ dressId, viewAsOwner, requeststatus, oid, images, requesterName, contact, address, rentStartDate, rentEndDate }) {
    console.log('requeststatus: ', requeststatus);

    const { uid } = useSelector(
        (state) => state.authUser
    );

    const handleRequest = async (status) => {
        const response = await endPoint.responseToRentRequest(uid, oid, dressId, status)
        console.log('response: ', response);
    }
    return (

        <div className="my-5 mx-3">
            <div className="models-div__box">
                <div className="models-div__box__img">
                    {
                        images.length &&
                        <ImageSwiper images={images} />
                    }

                    <div className="userDetails mx-5 my-5">

                        <div> <b >Requester Name:</b> <p>{requesterName}</p></div>
                        <div><b >Contact#:</b> <p>{contact}</p></div>
                        <div><b >Adrress:</b> <p>{address}</p></div>
                    </div>
                    <div className="models-div__box__descr">
                        <div className="models-div__box__descr__name-price">
                            <div className="models-div__box__descr__name-price__name">
                                <p className="border rounded px-3 py-2">start date : {rentStartDate}</p>
                                <p className="border rounded px-3 py-2">end date : {rentEndDate}</p>
                            </div>


                        </div>

                        {
                            viewAsOwner ?
                                <div className="d-flex justify-content-between mx-5">
                                    <div className="card_price_reject  cursor-pointer" onClick={() => handleRequest('rejected')} >
                                        <h4 className="px-3 py-2 mt-1" >Reject</h4>
                                    </div>
                                    <div className="card_price_accept cursor-pointer" onClick={() => handleRequest('accepted')}>
                                        <h4 className="px-3 py-2 mt-1" >Accept</h4>
                                    </div>
                                </div>
                                :
                                <div className="d-flex justify-content-between mx-5">
                                    <div className={requeststatus == 'accepted' ? "card_price_accept cursor-pointer" : requeststatus == 'rejected' ? "card_price_reject  cursor-pointer":"card_price_pending  cursor-pointer"} onClick={() => handleRequest('accepted')}>
                                        <h4 className="px-3 py-2 mt-1" >{requeststatus}</h4>
                                    </div>
                                </div>

                        }


                    </div>
                </div>
            </div>
        </div>

    );
}

export default DressCardRent;
