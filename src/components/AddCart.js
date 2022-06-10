import React from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { decrementproduct, incrementProduct, removeCartItems } from '../redux/actions/productActions'


const AddCart = () => {

    const addtocart = useSelector(state => { return state.useData.addtoCart })
    console.log('addtocart in cart ', addtocart)
    const dispatch = useDispatch()


    let price = 0

    addtocart.map((val) => {
        console.log(val.box_count * val.height);
        return price = price + val.box_count * val.height
    })
    console.log('total price', price);

    const removeItem = (id) => {
        dispatch(removeCartItems(addtocart, id))
    }

    const inc = (id) => {
        dispatch(incrementProduct(addtocart, id))
    }

    const dec = (id) => {
        dispatch(decrementproduct(addtocart, id))
    }

    return (

        <>
            <Container className=' '>
                <Row className=' pt-5 '>
                    {addtocart.length === 0 ? <div className='Suspense d-flex justify-content-center'><h1>Cart is Empty...</h1></div> : ''}

                    <Col sm={8}>
                        <Card className='p-5 mb-5 cardbg '>

                            <div>
                                <h3> <i>Cart items [...{addtocart.length}] </i> </h3>
                            </div>

                            {/* <div style={{maxHeight:'40vh'}}> */}

                            {addtocart && addtocart.map((cart) => {
                                return (
                                    <Row className=" g-0 bg-light  py-2 my-2 border ">
                                        <Col className="col-md-6 mb-md-0 p-md-4 ">
                                            <Card.Img variant="top" src={cart.url} style={{ border: '1px solid black', height: '20vh' }} />
                                        </Col>
                                        <Col className="col-md-6 ps-md-0 p-2 ">
                                            <h5 className="mt-0"> Tittle: {cart.name}</h5>
                                            <h6>Rs {cart.height}/-</h6>
                                            <p> {cart.height < 500 ? 'Rs40/- Delivery charge' : ' Free Delivery'}</p>
                                            <h5> Total: {cart.height < 500 ? `Rs ${cart.height * cart.box_count + 40}` : `Rs ${cart.height * cart.box_count}`}/-</h5>
                                        </Col>
                                        <div className='my-2 d-flex justify-content-evenly'>
                                            <div className='d-flex justify-content-between'>
                                                <span onClick={() => { dec(cart.id) }}><i class="fas fa-minus btn btn-outline-danger"></i></span>
                                                <Form.Control type="" className='border' style={{ width: '3rem' }} value={cart.box_count} />
                                                <span onClick={() => { inc(cart.id) }}><i class="fas fa-plus btn btn-outline-warning"></i></span>
                                            </div>
                                            <Button variant="outline-danger" onClick={() => { removeItem(cart.id) }} >Remove from Cart</Button>
                                        </div>
                                    </Row>
                                )
                            })}
                            {/* </div> */}

                            <div className='my-2 d-flex justify-content-end' >
                                <Button variant="outline-light" >Place Order</Button>
                            </div>

                        </Card >
                    </Col>



                    <Col className=' ' sm={4} >

                        <Card style={{ width: '' }}>
                            <Card.Header><h5>PRICE DETAILS</h5></Card.Header>
                            <Card.Body>
                                <Card.Text>

                                    <table>
                                        <tr>
                                            <th> <h5>Price ({addtocart.length} items)</h5> </th>
                                            <th> <h5> </h5> </th>
                                            <th> <h5>Rs {price} /-</h5> </th>
                                        </tr>
                                        <tr>
                                            <th> <h5> Discount charges</h5> </th>
                                            <th> <h5> - </h5> </th>
                                            <th> <h5> Rs {Math.ceil(price * 0.3)} /-</h5> </th>
                                        </tr>
                                        <tr>
                                            <th> <h5>Total charges</h5> </th>
                                            <th> <h5> </h5> </th>
                                            <th> <h5> Rs {Math.ceil(price * 0.7)} /-</h5> </th>
                                        </tr>
                                    </table>

                                </Card.Text>
                                <Card.Header><em>You saved Rs {Math.ceil(price * 0.3)}/- on this order </em></Card.Header>
                                <br />
                                <Button variant="primary">Proceed to Payment</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>

        </>

    )
}

export default AddCart
