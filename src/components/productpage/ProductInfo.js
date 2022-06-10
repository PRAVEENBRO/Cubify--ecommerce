import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const ProductInfo = (props) => {

    const data = useSelector(state => { return state.useData.productInfo })
    console.log('product data', data);

    console.log(data[0].id);



    const backtohome = () => {
console.log(props);
        props.history.push('/NavigationBar/Homepage')
    }


    return <div>
        <Container>
            <Row className='py-5 mt-5' style={{ minHeight: '00rem' }}>

                <Col >
                    <Card className='p-5  ' style={{ minHeight: "500px" }}>
                        <img src={data[0].url} class="img-fluid" alt="..." />
                    </Card>

                </Col>


                <Col>
                    <Row>

                        <Card >
                            <Card.Body>
                                <h6 style={{ textAlign: "right" }}>ID:-{data[0].id}</h6>
                                <Card.Title style={{ fontSize: '20px', height: '40px', textAlign: "center" }}>{data[0].name}</Card.Title>
                                <Row className='d-flex justify-content-around  p-3'>
                                    <h6> <em>Rs {data[0].height}  </em>  {data.height < 500 ? <em> +  Rs40 Delivery charge</em> : <em><i class="fas fa-smile-wink"></i>  Free Delivery</em>} </h6>
                                    <h6> Total: {data[0].height < 500 ? `    Rs ${data[0].height + 40}` : `Rs ${data[0].height}`}/-</h6>
                                </Row>
                                <div className='d-flex justify-content-between'>
                                    <div className='d-flex '>
                                        <Button variant='warning' className='mx-3'><i class="fas fa-cart-plus"></i>  Add to Cart </Button>
                                        <Button variant='success' className='mx-3'> <i class="fas fa-bolt"></i>  Buy Now </Button>
                                    </div>
                                    <div className='d-flex justify-content-around'>
                                        <span variant="outline-dark">{data[0].id % 2 === 0 ? <i class="far fa-heart btn btn-outline-success   mx-1"></i> : <i class="far fa-heart btn  btn-outline-danger  mx-1"></i>}</span>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>

                    </Row>

                    <Row className='d-flex justify-content-center'>
                        <Button className='mt-5' style={{ width: '25ch' }} variant='outline-dark' onClick={backtohome} >BACK TO HOME</Button>
                    </Row>

                </Col>

            </Row>
        </Container>
    </div>;
};

export default ProductInfo;
