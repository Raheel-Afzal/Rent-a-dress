import dress from "../assets/img/dress.jpg";

import { Link, useHistory } from "react-router-dom";
import { RepositoryFactory } from "../repository/RepositoryFactory";
import { useEffect, useRef, useState } from "react";
import { Button, Col, Container, FormGroup, Input, Label, Row } from "reactstrap";
import DressCardRent from "../components/DressCardRent";
import { useSelector } from "react-redux";
import PictureWall from "../components/PictureWall";
var endPoint = RepositoryFactory.get("endPoint")

function RentDress() {
    const history = useHistory()
    const [dressesDetails, setDressesDetails] = useState([])
    const [dressesDetails1, setDressesDetails1] = useState([])

    const initialState = {
        type: "",
        name: "",
        rent: "",
        size: "",
        color: "",
        descrip: "",
        gender: "",
        quality: ""
    }
    const [dressDetail, SetDressDetail] = useState(initialState)
    const [fileList, setFileList] = useState([])

    const { uid } = useSelector(
        (state) => state.authUser
    );

    const handleSubmit = async (e) => {
        e.preventDefault()

        let uploadObj = { ...dressDetail, status: 'Available', uid }


        if (fileList.length) {

            let formdata = new FormData()
            for (let key in uploadObj) {
                formdata.append(key, uploadObj[key]);

            }

            fileList.forEach((file, index) => {
                formdata.append(`file${index}`, file.originFileObj)
            })

            var requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            };

            const response = await fetch("http://localhost/RentDress/api/login/uploadMultipleDressImage", requestOptions)


            // const response = await endPoint.addDress(formdata)
            console.log('response: ', response);

            if (response.ok) {
                alert('Dress has been saved Successfully')
                SetDressDetail(initialState)
                setFileList([])
                history.push('/')
            }
            else {
                alert('Upload Failed, Try Again')
            }
        }
        else {
            alert('dress can not be saved without Image')
        }


    }

    useEffect(() => {
        const fetchDresses = async () => {
            const response = await endPoint.showRequestToRenter(uid)
            const response1 = await endPoint.showRequestToOwner(uid)

            console.log('response: ', response);
            setDressesDetails(response.data)
            setDressesDetails1(response1.data)
        }
        fetchDresses()
    }, [])
    return (
        <Container className="d-flex flex-wrap">
            <Container className="my-5 margin-auto uploadDress">
                <Row>
                    <Col>
                        <h1 className="text-center my-5">Upload New Dress</h1>
                    </Col>
                </Row>
                <form onSubmit={handleSubmit}>
                    <Row>
                        <Col sm='12'>
                            <PictureWall fileList={fileList} setFileList={setFileList} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label >Dress Type </Label>
                                <Input value={dressDetail.type} onChange={(e) => SetDressDetail((curr) => ({ ...curr, type: e.target.value }))} required />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label>Name</Label>
                                <Input value={dressDetail.name} onChange={(e) => SetDressDetail((curr) => ({ ...curr, name: e.target.value }))} required />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <FormGroup>
                                <Label>Price /per day</Label>
                                <Input value={dressDetail.rent} onChange={(e) => SetDressDetail((curr) => ({ ...curr, rent: e.target.value }))} type="number" required />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label className="mr-4">Select Size </Label>
                                <select value={dressDetail.size} onChange={(e) => SetDressDetail((curr) => ({ ...curr, size: e.target.value }))} required>
                                    <option value={''} disabled>select size</option>
                                    <option value={"Small"}>Small</option>
                                    <option value={"Medium"}>Medium</option>
                                    <option value={"Large"}>Large</option>
                                    <option value={"XLarge"}>Extra Large</option>
                                </select>
                            </FormGroup>
                        </Col>
                    </Row>


                    <Row>
                        <Col>
                            <FormGroup>
                                <Label>Enter Color </Label>
                                <Input value={dressDetail.color} onChange={(e) => SetDressDetail((curr) => ({ ...curr, color: e.target.value }))} required />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label>Enter Description</Label>
                                <Input value={dressDetail.descrip} onChange={(e) => SetDressDetail((curr) => ({ ...curr, descrip: e.target.value }))} required />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <FormGroup>
                                <Label className="mr-4">Select Gender </Label>
                                <select value={dressDetail.gender} onChange={(e) => SetDressDetail((curr) => ({ ...curr, gender: e.target.value }))} required>
                                    <option value={''} disabled>select gender</option>

                                    <option value={'Male'}>Male</option>
                                    <option value={'Female'}>Female</option>
                                </select>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label className="mr-4">Select Quality </Label>
                                <select value={dressDetail.quality} onChange={(e) => SetDressDetail((curr) => ({ ...curr, quality: e.target.value }))} required>
                                    <option value={''} disabled>select quality</option>
                                    <option value={'Good'}>Good</option>
                                    <option value={'Average'}>Average</option>
                                </select>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Button type="submit" className="saveDressBtn" color="success">Save New Dress</Button>
                </form>
            </Container>
            <Container className="my-5 margin-auto uploadDress">
                <Row>
                    <Col>
                        <h1 className="text-center my-5">Your Request as a Renter</h1>
                    </Col>
                </Row>
                <Container className="d-flex flex-wrap">
                    {
                        dressesDetails.map((dress, index) => (
                            <DressCardRent
                                key={index}
                                viewAsOwner={false}
                                oid={dress.oid}
                                requeststatus={dress.requeststatus}
                                dressId={dress.dressid}
                                requesterName={dress.Reqname}
                                contact={dress.Reqcontact}
                                address={`${dress.Reqaddress}, ${dress.Reqcity}`}
                                images={dress.images}
                                rentStartDate={dress.rentstartdate}
                                rentEndDate={dress.rentenddate}

                            />
                        ))
                    }
                </Container>
            </Container>
            <Container className="my-5 margin-auto uploadDress">
                <Row>
                    <Col>
                        <h1 className="text-center my-5">Your Request as a Owner</h1>
                    </Col>
                </Row>
                <Container className="d-flex flex-wrap">
                    {
                        dressesDetails1.map((dress, index) => (
                            <DressCardRent
                                key={index}
                                viewAsOwner={false}
                                oid={dress.oid}
                                requeststatus={dress.requeststatus}
                                dressId={dress.dressid}
                                requesterName={dress.Reqname}
                                contact={dress.Reqcontact}
                                address={`${dress.Reqaddress}, ${dress.Reqcity}`}
                                images={dress.images}
                                rentStartDate={dress.rentstartdate}
                                rentEndDate={dress.rentenddate}

                            />
                        ))
                    }
                </Container>
            </Container>

        </Container>
    );
}

export default RentDress;
