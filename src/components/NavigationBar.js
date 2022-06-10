
import { Badge, Container, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { boolean, searchProducts } from '../redux/actions/productActions';
import Notification from './home/Notification';


const NavigationBar = () => {


    const Datatosearch = useSelector(state => { return state.Allproducts.product });
    const dispatch = useDispatch();

    const CheckToken = localStorage.getItem('token');
    console.log(CheckToken);

    const logout = () => {
        console.log('inside the logout');
        localStorage.removeItem('token')
    }


    const addtocart = useSelector(state => { return state.useData.addtoCart })
    console.log('addtocart', addtocart);
    // const cartcount = Object.keys(addtocart).length
    const cartcount = addtocart.length
    console.log('cartitems', cartcount);

    const search = (e) => {
        const match = e.target.value;
        // console.log('match', match);
        const emptyarray = []
        match.length !== 0 ? dispatch(searchProducts(Datatosearch, match)) : dispatch(searchProducts(emptyarray));
        dispatch(boolean(match));

    }



    return (

        <>
            {console.log('navigation is re-rendering')}

            <Navbar collapseOnSelect expand="lg" variant='' className='navbg' fixed="top">
                <Container>

                    <Navbar.Brand href="#"><img alt="" src="/favicon.svg" width="30" height="30" className="d-inline-block align-top " />{' '}  <em className='text'>CUBIFY</em> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="me-auto">
                            <Nav.Link className=''><Link to='/NavigationBar/Homepage' className='text'>Home</Link></Nav.Link>
                            <Nav.Link className='text'>Makes</Nav.Link>
                            <Nav.Link className=''><Link to='/NavigationBar/Contests' className='text'>Contests</Link></Nav.Link>
                            <Nav.Link className='text'>Community</Nav.Link>
                            <Nav.Link className='text'>Blogs</Nav.Link>


                            <NavDropdown title="Category" id="" className='text'>
                                <NavDropdown.Item ><i class="fas fa-palette"></i>Arts</NavDropdown.Item>
                                <NavDropdown.Item ><i class="fas fa-house-user"></i>Household</NavDropdown.Item>
                                <NavDropdown.Item ><i class="fas fa-house-user"></i>Gadgets</NavDropdown.Item>
                                <NavDropdown.Item ><i class="fas fa-puzzle-piece"></i>Games</NavDropdown.Item>
                                <NavDropdown.Item ><i class="fas fa-tools"></i>Tools</NavDropdown.Item>
                                <NavDropdown.Item ><i class="fas fa-house-user"></i>Sports</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item >Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>

                            {CheckToken ? <Nav.Link ><Link to='/NavigationBar/Uploadpage' className='text'>upload</Link> </Nav.Link> : ''}
                            <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" onKeyUp={(e) => { search(e) }} />
                            <br />



                            <span className='text btn' > <Link to='/NavigationBar/AddCart' className=' d-flex '>
                                <i class="fas fa-shopping-cart " variant="dark"></i>
                                <sup><Badge bg="danger" pill className='mx-1'>{cartcount}</Badge></sup>
                            </Link>
                            </span>

                            <Notification />
                            <br />
                            {!CheckToken ? <Nav.Link ><Link to='/NavigationBar/Login' className='text'>Login</Link></Nav.Link> : <Nav.Link onClick={logout} >Logout</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>





        </>
    )
}

export default NavigationBar
