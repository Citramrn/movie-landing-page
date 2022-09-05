import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
    return (
        <Navbar collapseOnSelect expand="lg" className='navbars fixed-top shadow-sm bg-white'>
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
                                    <a href="#home">Home</a>
                                </div>
                            </li>
                            <li className="nav-item active">
                                <div className="nav-link text-black">
                                    <a href="#featureMovie">Movie</a>
                                </div>
                            </li>
                            <li className="nav-item active">
                                <div className="nav-link text-black">
                                    <a href="#arrival">Arrival</a>
                                </div>
                            </li>
                            <li className="nav-item active">
                                <div className="nav-link text-black">
                                    <a href="#videos">Videos</a>
                                </div>
                            </li>
                            <li className="nav-item active">
                                <div className="nav-link text-black">
                                    <a href="#cast">Cast</a>
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