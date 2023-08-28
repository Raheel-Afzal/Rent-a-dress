import { useState } from "react";
import PriceRange from "./PriceRange";
import DressTypeIcon from "./DressTypeIcon";

function BookDress() {

    const [filter, setFilter] = useState({
        dressType: '',
        city: '',
        dressName: '',
        gender: '',
        color:'',
        size: '',
        price: {
            minPrice: 1000, maxPrice: 1500
        }
    })

    // const [priceRange, setPriceRange] = useState({
    //     : 1000,
    //     maxPrice: 1500
    // });

    // const handlePriceRangeChange = (newPriceRange) => {
    //     setPriceRange(newPriceRange);
    // };

    return (
        <>
            <section id="booking-section" className="book-section">
                <div className="container">
                    <div className="book-content">
                        <div className="book-content__box">
                            <h2>Book a Dress</h2>


                            <form className="box-form" onSubmit={(e) => {
                                e.preventDefault()
                                console.log("e", filter)
                            }}>
                                <div className="box-form__car-type">
                                    <label>
                                        <DressTypeIcon size={22} />
                                        &nbsp;  Dress
                                        Type <b>*</b>
                                    </label>
                                    <select value={filter.dressType} onChange={(e) => { setFilter(curr => ({ ...curr, dressType: e.target.value })) }}>
                                        <option value={''}>Select your dress type</option>
                                        <option value={1}>Kurta</option>
                                    </select>
                                </div>

                                <div className="box-form__car-type">
                                    <label>
                                        <i className="fa-solid fa-location-dot"></i> &nbsp; City{" "}
                                        <b>*</b>
                                    </label>
                                    <select value={filter.city} onChange={(e) => { setFilter(curr => ({ ...curr, city: e.target.value })) }}>
                                        <option>Select City</option>
                                        <option>Rawalpindi</option>
                                    </select>
                                </div>

                                <div className="box-form__car-type">
                                    <label>
                                        <i className="fas fa-tshirt"></i> &nbsp; Select a
                                        Dress <b>*</b>
                                    </label>
                                    <select value={filter.dressName} onChange={(e) => { setFilter(curr => ({ ...curr, dressName: e.target.value })) }}>
                                        <option>Select a dress</option>
                                        <option>Lehnga</option>
                                    </select>
                                </div>

                                <div className="box-form__car-type">
                                    <label>
                                        <i className="fas fa-ruler"></i> &nbsp; Size<b>*</b>
                                    </label>
                                    <select value={filter.size} onChange={(e) => { setFilter(curr => ({ ...curr, size: e.target.value })) }}>
                                        <option>Small</option>
                                        <option>Medium</option>
                                        <option>Large</option>
                                        <option>Extra Large</option>

                                    </select>
                                </div>


                                <div className="box-form__car-type">
                                    <label>
                                    <i class="fas fa-palette"></i> &nbsp; Color<b>*</b>
                                    </label>
                                    <select value={filter.size} onChange={(e) => { setFilter(curr => ({ ...curr, size: e.target.value })) }}>
                                        <option>Yellow</option>
                                        <option>Green</option>
                                        <option>Blue</option>
                                        <option>Red</option>
                                    </select>
                                </div>

                                <div className="box-form__car-type">
                                    <label>
                                        <i className="fas fa-venus-mars"></i> &nbsp; Gender<b>*</b>
                                    </label>
                                    <select value={filter.gender} onChange={(e) => { setFilter(curr => ({ ...curr, gender: e.target.value })) }}>
                                        <option>Male</option>
                                        <option>Female</option>

                                    </select>
                                </div>


                                <div className="box-form__car-time">
                                    <label>
                                        <i className="fas fa-hand-holding-usd"></i> &nbsp;
                                        Select Price Range <b>*</b>
                                    </label>
                                    <PriceRange
                                        priceRange={filter.price}
                                        onPriceRangeChange={(newPrice) => { setFilter(curr => ({ ...curr, price: newPrice })) }}
                                    />
                                </div>

                                <button type="submit">
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BookDress;
