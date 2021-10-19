import React from 'react';
import "./MenuBar.css";
import { Link } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import useMedical from '../../hooks/useMedical';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const MenuBar = () => {
  const { name, logout, user, loggedInUser } = useAuth();
  const { cart } = useMedical();
  return (
    <>
      {/* Navbar for all pages */}

      <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg" >
        <Container>
          <Navbar.Brand href="#home"><h1 className="fw-bold text-black">BD <span className="text-danger">Care</span></h1></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="/home" className="list">Home</Nav.Link>
            <Nav.Link as={HashLink} to="/home#services" className="list">Services</Nav.Link>
            <Nav.Link as={HashLink} to="/home#expert-doctors" className="list">Doctors</Nav.Link>
            <Nav.Link as={Link} to="/appointment" className="list">Appointment</Nav.Link>
            <Nav.Link as={Link} to="/department" className="list">Department</Nav.Link>
            <Nav.Link as={Link} to="/news" className="list">News</Nav.Link>

            {!user?.email && <Link to="/login" className="list">
              <li className="text-danger">Login</li>
            </Link>}

            {user?.email && <li className="list" style={{ color: "red", fontWeight: "bold" }}>
              {user.displayName}
            </li>
            }

            {user?.email ?
              <button className="signup-btn-style" onClick={logout}>Logout</button> :
              <Nav.Link as={Link} to="/register"><button className="signup-btn-style"><i className="fas fa-sign-in-alt"></i> Sign up</button></Nav.Link>
            }

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MenuBar;
