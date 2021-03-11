import React, { Fragment } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const NavBar = (teams) => {
  console.log(teams);
  return (
    <Fragment>
      <>
        <Navbar bg="dark" variant="dark" expand="sm">
          <Nav className="mr-auto">
            <Link to="/">Teams</Link>
            {/* <Nav.Link href="">Players</Nav.Link> */}
            <Link
              to={{
                pathname: "/players",
              }}
              style={{ marginLeft: "10px" }}
            >
              Players
            
            </Link>
          </Nav>
        </Navbar>
        <br />
      </>
    </Fragment>
  );
};

export default NavBar;
