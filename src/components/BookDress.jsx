import { useEffect, useState } from "react";
import PriceRange from "./PriceRange";
import DressTypeIcon from "./DressTypeIcon";
import DressesSection from "./DressesSection";
import { RepositoryFactory } from "../repository/RepositoryFactory";
var endPoint = RepositoryFactory.get("endPoint")

function BookDress() {


    const [dressTypes, setDressTypes] = useState([])
    const [dressColors, setDressColors] = useState([])
    const [dressName, setDressName] = useState([])
    const [dressSize, setDressSize] = useState([])

    const [filter, setFilter] = useState({
        type: '',
        // City: '',
        name: '',
        geneder: '',
        color: '',
        size: '',
        price: {
            minPrice: 1000, maxPrice: 1500
        }
    })

    const [appliedFilter, setAppliedFilter] = useState({})
    useEffect(() => {
        const fetchDresses = async () => {
            const response = await endPoint.getdressDetails()
            const types = Array.from(new Set(response.data.map((dress) => (
                dress.type
            ))))
            const colors = Array.from(new Set(response.data.map((dress) => (
                dress.color
            ))))
            const names = Array.from(new Set(response.data.map((dress) => (
                dress.name
            ))))
            const sizes = Array.from(new Set(response.data.map((dress) => (
                dress.size
            ))))

            setDressTypes(types)
            setDressColors(colors)
            setDressName(names)
            setDressSize(sizes)
        }
        fetchDresses()
    }, [])



    return (
        <>
            <section id="booking-section" className="book-section">
                <div className="container">
                    <div className="book-content">
                        <div className="book-content__box">
                            <h2>Book a Dress</h2>


                            <form className="box-form" onSubmit={(e) => {
                                e.preventDefault()

                                setAppliedFilter(filter)
                                console.log("e", JSON.stringify(filter))
                            }}>
                                <div className="box-form__car-type">
                                    <label>
                                        <DressTypeIcon size={22} />
                                        &nbsp;  Dress
                                        Type <b>*</b>
                                    </label>
                                    <select value={filter.type} required onChange={(e) => { setFilter(curr => ({ ...curr, type: e.target.value })) }}>
                                        <option value={''}>Select your dress type</option>
                                        {
                                            dressTypes.map((type) => (
                                                <option value={type}>{type}</option>

                                            ))
                                        }
                                    </select>
                                </div>

                                {/* <div className="box-form__car-type">
                                    <label>
                                        <i className="fa-solid fa-location-dot"></i> &nbsp; City{" "}
                                        <b>*</b>
                                    </label>
                                    <select value={filter.City} onChange={(e) => { setFilter(curr => ({ ...curr, City: e.target.value })) }}>
                                        <option>Select City</option>
                                        <option>Rawalpindi</option>
                                    </select>
                                </div> */}

                                <div className="box-form__car-type">
                                    <label>
                                        <i className="fas fa-tshirt"></i> &nbsp; Select a
                                        Dress <b>*</b>
                                    </label>
                                    <select value={filter.name} required onChange={(e) => { setFilter(curr => ({ ...curr, name: e.target.value })) }}>
                                        <option value={''} disabled>Select a dress</option>
                                        {
                                            dressName.map((name) => (
                                                <option value={name}>{name}</option>

                                            ))
                                        }
                                    </select>
                                </div>

                                <div className="box-form__car-type">
                                    <label>
                                        <i className="fas fa-ruler"></i> &nbsp; Size<b>*</b>
                                    </label>
                                    <select value={filter.size} required onChange={(e) => { setFilter(curr => ({ ...curr, size: e.target.value })) }}>
                                        <option disabled value={""}>select size</option>
                                        {
                                            dressSize.map((size) => (
                                                <option value={size}>{size}</option>

                                            ))
                                        }

                                    </select>
                                </div>


                                <div className="box-form__car-type">
                                    <label>
                                        <i className="fas fa-palette"></i> &nbsp; Color<b>*</b>
                                    </label>
                                    <select value={filter.color} required onChange={(e) => { setFilter(curr => ({ ...curr, color: e.target.value })) }}>
                                        <option disabled value={""}>select color</option>
                                        {
                                            dressColors.map((color) => (
                                                <option value={color}>{color}</option>

                                            ))
                                        }
                                    </select>
                                </div>

                                <div className="box-form__car-type">
                                    <label>
                                        <i className="fas fa-venus-mars"></i> &nbsp; Gender<b>*</b>
                                    </label>
                                    <select value={filter.geneder} required onChange={(e) => { setFilter(curr => ({ ...curr, geneder: e.target.value })) }}>
                                        <option disabled value={""}>select gender</option>

                                        <option value={'Male'}>Male</option>
                                        <option value={'Female'}>Female</option>

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


                                {/* <div className="box-form__car-type">
                                    <label>
                                        <i className="fas fa-venus-mars"></i> &nbsp; Rent Start Date<b>*</b>
                                    </label>
                                    <input type="date" />
                                </div>
                                <div className="box-form__car-type">
                                    <label>
                                        <i className="fas fa-venus-mars"></i> &nbsp; Rent End Date<b>*</b>
                                    </label>
                                    <input type="date" />
                                </div> */}

                                <button type="submit">
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <DressesSection filter={appliedFilter} />
        </>
    );
}

export default BookDress;
