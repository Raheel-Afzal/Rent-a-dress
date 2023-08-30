import dress from "../assets/img/dress.jpg";

import { Link } from "react-router-dom";
import { RepositoryFactory } from "../repository/RepositoryFactory";
import { useEffect, useState } from "react";
import DressCard from "./DressCard";
import { Col, Container, Row } from "reactstrap";
var endPoint = RepositoryFactory.get("endPoint")

function DressesSection({ filter }) {
    console.log('filter: ', JSON.stringify(filter));
    const [dressesDetails, setDressesDetails] = useState([])
    const [filteredDresses, setFilterDresses] = useState([])
    console.log('filteredDresses: ', filteredDresses);

    useEffect(() => {


        if (!filter.dressType && !filter.geneder && !filter.color && !filter.size) {
            setFilterDresses(dressesDetails)
        }
        else {
            if (dressesDetails.length) {
                const filterData = dressesDetails.filter((dress) => (
                    dress.color == filter.color &&
                    dress.size == filter.size &&
                    dress.type == filter.type &&
                    dress.geneder == filter.geneder &&
                    dress.name == filter.name
                ))
                console.log('filterData: ', filterData);

                setFilterDresses(filterData)
            }
        }

    }, [filter, dressesDetails])

    useEffect(() => {
        const fetchDresses = async () => {
            const response = await endPoint.getAllDresses()

            setDressesDetails(response.data)
        }
        fetchDresses()
    }, [])


    return (
        <Container className="d-flex flex-wrap " >
            {
                filteredDresses.map((dress, index) => (
                    <DressCard
                        key={index}
                        dressId={dress.did}
                        color={dress.color}
                        quality={dress.quality}
                        rating={dress.rating}
                        rent={dress.rent}
                        images={dress.images}
                        size={dress.size}
                        status={dress.status}
                        type={dress.type}
                    />
                ))
            }

        </Container>
    );
}

export default DressesSection;
