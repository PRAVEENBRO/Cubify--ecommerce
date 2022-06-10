import axios from 'axios';
import React, { useEffect } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ProductInfo, selectedProducts, setProducts } from '../redux/actions/productActions';

const DisplayBody = () => {


    const fatchedData = useSelector(state => { return state.Allproducts.product });
    const set = useSelector(state => { return state.useData.Boolean });
    const searchedData = useSelector(state => { return state.useData.searchrdproduct });
    console.log('searchedData:-', searchedData);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchdata();
    }, []);


    console.log(set);

    const fetchdata = async () => {

        const Fetch = await axios.get('https://api.imgflip.com/get_memes');

        console.log('fetchedData:-', Fetch.data.data.memes);
        const data = Fetch.data.data.memes
        // console.log(data);
        const onlineData = []

        data.map((data, inx) => {
            return onlineData.push({
                box_count: 1,
                height: data.height,
                id: data.id,
                name: data.name,
                url: data.url,
                width: data.width
            })
        })
        console.log(onlineData);
        // dispatch(setProducts(Fetch.data.data.memes));
        dispatch(setProducts(onlineData));
    }


    const addtocart = (id) => {
        dispatch(selectedProducts(fatchedData, id))
    }

    const productInfo = (id) => {
        dispatch(ProductInfo(fatchedData, id))
    }

    return (
        <div >
            <Container className=' margintop'>

                <Row xs={1} md={3} className="g-5 pb-5 ">

                    {/* {console.log('fatchedData', fatchedData)} */}
                    {!set && fatchedData.map((val) => {
                        return (<Col key={val.id}>
                            <Card style={{ minheight: '0rem' }} className='cardShadow ' >
                                <Card.Body>
                                    <h6 style={{ textAlign: "right" }}>ID:-{val.id}</h6>
                                    <Card.Title style={{ fontSize: '20px', height: '40px', textAlign: "center" }}>{val.name}</Card.Title>
                                    <Row className='d-flex justify-content-around  p-3'>
                                        <Col>
                                            <h6> <em>Rs {val.height}  </em>  {val.height < 500 ? <em> +  Rs40 Delivery charge</em> : <em><i class="fas fa-smile-wink"></i>  Free Delivery</em>} </h6>
                                            {/* <p> {val.height < 500 ? 'Rs40 Delivery charge' : ' Free Delivery'}</p> */}
                                            <h6> Total: {val.height < 500 ? `    Rs ${val.height + 40}` : `Rs ${val.height}`}/-</h6>
                                        </Col>

                                        <Col >
                                            <div >
                                                <img src={val.url} alt="" className='card-img' />
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className='d-flex justify-content-between'>
                                        <Button onClick={() => addtocart(val.id)} variant='outline-dark' className='btn-grad'>Add to Cart <i class="fas fa-cart-plus"></i></Button>
                                        <div className='d-flex justify-content-around'>
                                            <span variant="outlne-dark">{val.id % 2 === 0 ? <i class="far fa-bookmark btn btn-outline-success   mx-1"></i> : <i class="fas fa-bookmark btn  btn-outline-danger  mx-1"></i>}</span>

                                            <Link to='/NavigationBar/ProductInfo' onClick={() => { productInfo(val.id) }} >
                                                <span variant="outline-dark">{val.id % 2 !== 0 ? <i class="fas fa-info-circle btn btn-outline-dark mx-1"></i> : <i class="fas fa-info-circle btn btn-outline-dark mx-1"></i>}</span>
                                            </Link>

                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>)
                    })}


                    {/* {console.log('searchedData', searchedData)} */}
                    {searchedData.length > 0 ? searchedData.map((val) => {
                        return (<Col key={val.id}>
                            <Card style={{ minheight: '0rem' }} className='cardShadow ' >
                                <Card.Body>
                                    <h6 style={{ textAlign: "right" }}>ID:-{val.id}</h6>
                                    <Card.Title style={{ fontSize: '20px', height: '40px', textAlign: "center" }}>{val.name}</Card.Title>
                                    <Row className='d-flex justify-content-around  p-3'>
                                        <Col>
                                            <h6> <em>Rs {val.height}  </em>  {val.height < 500 ? <em> +  Rs40 Delivery charge</em> : <em><i class="fas fa-smile-wink"></i>  Free Delivery</em>} </h6>
                                            {/* <p> {val.height < 500 ? 'Rs40 Delivery charge' : ' Free Delivery'}</p> */}
                                            <h6> Total: {val.height < 500 ? `    Rs${val.height + 40}` : `Rs${val.height}`}/-</h6>
                                        </Col>
                                        <Col >
                                            <div >
                                                <img src={val.url} alt="" className='card-img' />
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className='d-flex justify-content-between'>
                                        <Button onClick={() => addtocart(val.id)} variant='outline-primary' className='btn-grad'>Add to Cart <i class="fas fa-cart-plus"></i></Button>
                                        <div className='d-flex justify-content-around'>

                                            <span variant="outline-dark">{val.id % 2 === 0 ? <i class="far fa-bookmark btn btn-outline-success   mx-1"></i> : <i class="fas fa-bookmark btn  btn-outline-danger  mx-1"></i>}</span>

                                            <span variant="outline-dark">{val.id % 2 !== 0 ? <i class="fas fa-info-circle btn btn-outline-dark mx-1"></i> : <i class="fas fa-info-circle btn btn-outline-dark mx-1"></i>}</span>

                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        )
                    }) : (set.length > 0 && <div className='gif'>
                        <div className='Suspense d-flex align-items-center justify-content-center '>
                            <h1>    We Couldn't find anything... <i class="far fa-frown"> </i><i class="fas fa-hand-middle-finger"></i> </h1>
                        </div>
                    </div>)
                    }

                </Row>
            </Container>
        </div>
    )
}

export default DisplayBody
