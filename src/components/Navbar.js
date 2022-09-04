import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className='navbars fixed-top active'>
            <Container>
                <Navbar.Brand className='brand  navbar-logo'>  <img src="https://i.ibb.co/9VdKmRt/tv.png" width={35} alt="movie" /><b> MovieBox</b></Navbar.Brand>
                <Navbar.Toggle className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsingNavbar3">
                    <i className='bx bx-menu'></i>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="w-100 justify-content-center">
                        <ul className="navbar-nav w-100 justify-content-end">
                            <li className="nav-item active">
                                <div className="nav-link text-black">
                                    Home
                                </div>
                            </li>
                            <li className="nav-item active">
                                <div className="nav-link text-black">
                                    Movie
                                </div>
                            </li>
                            <li className="nav-item active">
                                <div className="nav-link text-black">
                                    TV Shows
                                </div>
                            </li>
                            <li className="nav-item active">
                                <div className="nav-link text-black">
                                    Web Series
                                </div>
                            </li>
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;