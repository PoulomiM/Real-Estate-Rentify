import React from "react";
import { Home, ContactMail, ListAlt, Info } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const NavLeft = () => {
    return (
        <nav className="navbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <ul className="navbar-nav" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <li className="nav-item" style={{ marginRight: '20px' }}>
                    <Button>
                        <Link to="/" className="nav-link" style={{ textDecoration: 'none', color: '#fff', display: 'flex', alignItems: 'center' }}>
                            <Home color="primary" fontSize="large" />
                            <span className="link-text" style={{ marginLeft: '5px' }}>Home</span>
                        </Link>
                    </Button>
                </li>
                <li className="nav-item" style={{ marginRight: '20px' }}>
                    <Button>
                        <Link to="/listing" className="nav-link" style={{ textDecoration: 'none', color: '#fff', display: 'flex', alignItems: 'center' }}>
                            <ListAlt color="primary" fontSize="large" />
                            <span className="link-text" style={{ marginLeft: '5px' }}>Listing</span>
                        </Link>
                    </Button>
                </li>
                <li className="nav-item" style={{ marginRight: '20px' }}>
                    <Button>
                        <Link to="/about" className="nav-link" style={{ textDecoration: 'none', color: '#fff', display: 'flex', alignItems: 'center' }}>
                            <Info color="primary" fontSize="large" />
                            <span className="link-text" style={{ marginLeft: '5px' }}>About</span>
                        </Link>
                    </Button>
                </li>
                <li className="nav-item">
                    <Button>
                        <Link to="/contact" className="nav-link" style={{ textDecoration: 'none', color: '#fff', display: 'flex', alignItems: 'center' }}>
                            <ContactMail color="primary" fontSize="large" />
                            <span className="link-text" style={{ marginLeft: '5px' }}>Contact</span>
                        </Link>
                    </Button>
                </li>
            </ul>
        </nav>
    );
};

export default NavLeft;




