import { Navbar, NavDropdown, Nav, Row, Col } from 'react-bootstrap';
import Layout from './Layout';
import logo from '../../assets/image/webstix_logo.svg'
import classes from './Header.module.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faMagnifyingGlass);

function Header() {
  return (
  <>
   <div id="top" className={classes.topnav}>
    <Layout>
      <Row>
        <Col lg="3">
          <img className={classes.logo} src={logo} alt="" />
        </Col>
        <Col>
          <Row className="d-flex justify-content-end">
            <Col lg="3">
              <div className='table'>
                <div className='table-inner'>
                <p>Let's Talk! <b> <a href="tel:6082777849">608-277-7849</a> </b> </p>
                </div>
              </div>
            </Col>
            <Col lg="3">
              <a href='#' className='main-button'>Get Started</a>
            </Col>
          </Row>
          
        </Col>
      </Row>
    </Layout>
  </div>
  <div>
      <Navbar collapseOnSelect expand="lg">
      <Layout>
        <Navbar.Brand href="#home"><img className={classes.logo} src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <NavDropdown title="Web Design" id="collasible-nav-dropdown" renderMenuOnMount={true}>
              <NavDropdown.Item href="#">Link 1</NavDropdown.Item>
              <NavDropdown.Item href="#">Link 2</NavDropdown.Item>
              <NavDropdown.Item href="#">Link 3</NavDropdown.Item>
              <NavDropdown.Item href="#">Link 4</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Marketing / SEO" id="collasible-nav-dropdown" renderMenuOnMount={true}>
              <NavDropdown.Item href="#">Link 1</NavDropdown.Item>
              <NavDropdown.Item href="#">Link 2</NavDropdown.Item>
              <NavDropdown.Item href="#">Link 3</NavDropdown.Item>
              <NavDropdown.Item href="#">Link 4</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Services" id="collasible-nav-dropdown" renderMenuOnMount={true}>
              <NavDropdown.Item href="#">Link 1</NavDropdown.Item>
              <NavDropdown.Item href="#">Link 2</NavDropdown.Item>
              <NavDropdown.Item href="#">Link 3</NavDropdown.Item>
              <NavDropdown.Item href="#">Link 4</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Portfolio" id="collasible-nav-dropdown" renderMenuOnMount={true}>
              <NavDropdown.Item href="#">Link 1</NavDropdown.Item>
              <NavDropdown.Item href="#">Link 2</NavDropdown.Item>
              <NavDropdown.Item href="#">Link 3</NavDropdown.Item>
              <NavDropdown.Item href="#">Link 4</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Support" id="collasible-nav-dropdown" renderMenuOnMount={true}>
              <NavDropdown.Item href="#">Link 1</NavDropdown.Item>
              <NavDropdown.Item href="#">Link 2</NavDropdown.Item>
              <NavDropdown.Item href="#">Link 3</NavDropdown.Item>
              <NavDropdown.Item href="#">Link 4</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#features">About Us</Nav.Link>
            <Nav.Link href="#pricing">Contact Us</Nav.Link>
            <Nav.Link href="#pricing"><FontAwesomeIcon icon={faMagnifyingGlass} /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Layout>
    </Navbar>
  </div>
  </>
  );
}

export default Header;
