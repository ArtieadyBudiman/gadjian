import logo from '../asset/img/phast.png'
import image from '../asset/img/profile.jpg'
import {Navbar, Container} from 'react-bootstrap';

const NavbarSection =()=>{
   return(
      <Navbar className="navbarSection sticky-top" expand="lg">
         <Container className="navWrapper">
            <Navbar.Brand className="navbar" href="#home">
               <img className="logo " src={logo} alt="" />
            </Navbar.Brand>
            <div className="account">
               <div className="text-secondary fw-bold">
                  <span className="helloUser">Hello,</span>
                  <span className="userName text-info ps-1 pe-3">Gadjian User</span>
                  <img className="rounded-circle" src={image} alt="" />
               </div>
            </div>
         </Container>
      </Navbar>
   )
}

export default NavbarSection;