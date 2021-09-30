import React ,{Component} from 'react'
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown, Button, NavLink ,Row,Col,Container,Label,InputGroup,FormControl} from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

// import { alpha, makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import InputBase from '@material-ui/core/InputBase';
// import Badge from '@material-ui/core/Badge';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import MailIcon from '@material-ui/icons/Mail';
// import NotificationsIcon from '@material-ui/icons/Notifications';
// import MoreIcon from '@material-ui/icons/MoreVert';



class Navbar_index extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
        <div className="App">
            <span>&nbsp;&nbsp;</span>
            
            <Navbar bg="red" variant="white" sticky="top" expand="sm" collapseOnSelect>
                <Container>
                    <Navbar.Toggle />


                    <Navbar.Collapse className="justify-content-top">
                        <Navbar.Brand href="#home">Website logo</Navbar.Brand>
                    </Navbar.Collapse>

                    <Navbar.Collapse className="justify-content-center">

                        <InputGroup className="mb-2">
                            <InputGroup.Text>@</InputGroup.Text>
                            <FormControl id="inlineFormInputGroup"placeholder="Search" />
                        </InputGroup>

                    </Navbar.Collapse>


                    <Navbar.Collapse className="justify-content-end">

                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="Language"
                                menuVariant="dark"        size="sm"
                                    >

                                <NavDropdown.Item href="#action/3.1" selected>ENGLISH</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">FRANCAIS</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">SPANISH</NavDropdown.Item>
                            </NavDropdown>
                    </Navbar.Collapse>

                </Container>
             </Navbar>

             <Navbar bg="white" variant="white" sticky="end" expand="sm" collapseOnSelect>
                <Container>
                    <Navbar.Collapse className="justify-content-top">
                        <NavDropdown
                            id="nav-dropdown-dark-example"
                            title="Products"
                            menuVariant="dark"        
                            size="sm">

                            <NavDropdown.Item href="#action/3.1" selected>ENGLISH</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">FRANCAIS</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">SPANISH</NavDropdown.Item>
                        </NavDropdown>
                        <Navbar.Brand href="#home">Home Medical Supplies</Navbar.Brand>
                        <Navbar.Brand href="#home">Homepages</Navbar.Brand>
                        <Navbar.Brand href="#home">Shop</Navbar.Brand>
                        <Navbar.Brand href="#home">Pages</Navbar.Brand>
                        <Navbar.Brand href="#home">Blog</Navbar.Brand>
                        <Navbar.Brand href="#home">Contact</Navbar.Brand>
                    </Navbar.Collapse>




                    <Navbar.Collapse className="justify-content-end">
                        <span>Need help? 0020 500 - MYMEDI - 000</span>
                        <Navbar.Brand></Navbar.Brand>
                    </Navbar.Collapse>

                </Container>
             </Navbar>
             
        </div>
        );
    }
}


export default Navbar_index;




// export function Navbar_index() {
//     return (
//         // <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

//         <div className="App">
            
//             <Navbar bg="light" variant="light" sticky="top" expand="sm" collapseOnSelect>

//             <Container>
//                 <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
//                 <Navbar.Toggle />
//                 <Navbar.Collapse className="justify-content-end">
//                 <Navbar.Text>
//                     Signed in as: <a href="#login">Mark Otto</a>
//                 </Navbar.Text>
//                 </Navbar.Collapse>
//             </Container>


//             {/* <Container>
//                 <Row>
//                     <Col>1 of 3</Col>
//                     <Col>2 of 3</Col>
//                     <Col>3 of 3</Col>
//                     <Col>3 of 3</Col>
//                     <Col>3 of 3</Col>
//                 </Row>
//             </Container> */}

//         {/* <Navbar.Brand>
//                     <img src="images/Front/logo.png" alt="" width="40px" height="40px" />{' '}
//                     Logo
//                 </Navbar.Brand>

//                 <Navbar.Toggle className="coloring" />
//                 <Navbar.Collapse>
//                     <Nav
//                         className="mr-auto my-2 my-lg-0"
//                         style={{ maxHeight: '200px' }}
//                         navbarScroll
//                     >
//                         <NavDropdown title="Products">
//                             <NavDropdown.Item href="#products/tea">Tea</NavDropdown.Item>
//                             <NavDropdown.Item href="#products/coffee">Coffee</NavDropdown.Item>
//                             <NavDropdown.Item href="#products/chocolate">Chocolate</NavDropdown.Item>
//                             <NavDropdown.Divider />
//                             <NavDropdown.Item href="#products/promo">Promo</NavDropdown.Item>
//                         </NavDropdown>
//                         <Nav.Link href="#blog">Blog</Nav.Link>
//                         <Nav.Link href="#about-us">About Us</Nav.Link>
//                         <Nav.Link href="#contact-us">Contact Us</Nav.Link>


                        
//                     </Nav>
//                     <Nav>

//                     <Form className="d-flex">
//                         <FormControl
//                             type="search"
//                             placeholder="Search"
//                             className="mr-2"
//                             aria-label="Search"
//                         />
//                         <Button variant="outline-success">Search</Button>
//                     </Form>
                    
//                     </Nav>



//                 </Navbar.Collapse>
//                 <Nav>
//                     <Nav.Link href="#deets">More deets</Nav.Link>
//                     <Nav.Link eventKey={2} href="#memes">
//                         Dank memes
//                     </Nav.Link>
//                 </Nav> */}


//             </Navbar>
//             <div className="content">
//                 This is a content.
//             </div>

//         </div>
    
    
//     );
// }
