import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavItem, Navbar, NavbarBrand } from "reactstrap";

class Header extends Component {
    render() {
        return (
            <>
                <Navbar className="navbar-dark">
                    <div className="container">
                        <NavbarBrand>UME</NavbarBrand>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                </Navbar>
            </>
        )
    }
}

export default Header;