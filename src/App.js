import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {FaRegUserCircle} from 'react-icons/fa';
import Search from "./Search";
import Content from "./Content";
function App() {
    return (
            <div>
                <Navbar className="hed">
                    <Container>
                        <h6 className="name">Medical Darpan</h6>
                            <Nav className="me-auto">
                                <Nav href="#home">Home</Nav>
                                <Nav href="#link">Products</Nav>
                                <Nav href="#link">Distributors</Nav>
                                <Nav href="#link">Manufacturers</Nav>
                                <Nav href="#link">About us</Nav>
                                <Nav href="#link">Blog</Nav>
                            </Nav>
                        <text className="txt">Login</text>
                        <FaRegUserCircle/>
                    </Container>
                </Navbar>
                <Search/>
                <Content/>
            </div>
    );
}

export default App;
