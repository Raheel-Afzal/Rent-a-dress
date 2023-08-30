import React from "react";

const PriceRange = ({ priceRange, onPriceRangeChange }) => {
    const handlePriceChange = (e) => {
        const { name, value } = e.target;
        const newValue = parseInt(value);

        const newPriceRange = {
            ...priceRange,
            [name]: newValue
        };

        const otherValue = name === "minPrice" ? "maxPrice" : "minPrice";
        if ((name === "minPrice" && newValue > priceRange[otherValue]) ||
            (name === "maxPrice" && newValue < priceRange[otherValue])) {
            newPriceRange[otherValue] = newValue;
        }

        onPriceRangeChange(newPriceRange);
    };


    return (
        <div className="card">
            <div className="range-slider">
                <input
                    type="range"
                    name="minPrice"
                    value={priceRange.minPrice}
                    min="500"
                    max="5000"
                    step="100"
                    onChange={handlePriceChange}
                />
                <input
                    type="range"
                    name="maxPrice"
                    value={priceRange.maxPrice}
                    min="500"
                    max="5000"
                    step="100"
                    onChange={handlePriceChange}
                />
            </div>
            <div className="price-content">
                <div className="d-flex">
                    <p className="mr-1 ">Min </p>
                    <span id="min-value">{priceRange.minPrice}pkr</span>
                </div>
                <div className="d-flex">
                    <p className="mr-1">Max </p>
                    <span id="max-value">{priceRange.maxPrice}pkr</span>
                </div>
            </div>
        </div>
    );
};

export default PriceRange;
