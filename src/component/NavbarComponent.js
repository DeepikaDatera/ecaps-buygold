import React, { useState } from "react";
import logo from "../asset/logo.svg";
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Container,
  Form,
} from "react-bootstrap";
function NavbarComponent() {
  const navMenuItem = [
    {
      title: "About us",
      submenu: [
        { title: "What's Jar" },
        { title: "Team" },
        { title: "Careers" },
      ],
    },
    {
      title: "Features",
      submenu: [
        { title: "Buy Gold" },
        { title: "Sell Gold" },
        { title: "Transactions" },
        { title: "Instatnt Loan" },
        { title: "Nek" },
      ],
    },
    {
      title: "Resources",
      submenu: [{ title: "Blogs" }, { title: "Check Gold price" }],
    },
    {
      title: "Help",
      submenu: [{ title: "FAQs" }, { title: "Contact Us" }],
    },
  ];
  return (
    <header className="w-100 py-3 px-4 p-lg-2 d-flex justify-content-center ">
      <Navbar expand="lg" className="my-0 py-0 box-container ">
        <Navbar.Brand href="#">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse
          id="navbarScroll"
          // className="d-flex justify-content-between"
        >
          <Nav
            className="me-auto my-2 my-lg-0 gap-3"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {navMenuItem.map((item, i) => (
              <NavDropdown
                title={item.title}
                id="navbarDropdown"
                className="text-white"
              >
                {item.submenu.map((submenu) => (
                  <NavDropdown.Item href="#">{submenu.title}</NavDropdown.Item>
                ))}
              </NavDropdown>
            ))}
          </Nav>
          <Button>Login</Button>
          {/* <Nav className="me-auto my-2 my-lg-0 gap-3" navbarScroll>
            {navMenuItem.map((item, i) => (
              <NavDropdown
                title={item.title}
                id="navbarDropdown"
                className="text-white"
              >
                {item.submenu.map((submenu) => (
                  <NavDropdown.Item href="#">{submenu.title}</NavDropdown.Item>
                ))}
              </NavDropdown>
            ))}
          </Nav> */}
        </Navbar.Collapse>
        {/* <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse> */}
      </Navbar>
    </header>
    // <header className="w-100 p-2 d-flex justify-content-center ">
    //   <Navbar expand="lg" className="my-0 py-0 box-container ">
    //     <Navbar.Brand href="#">
    //       <img src={logo} alt="Logo" />
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="navbarSupportedContent" />

    //   </Navbar>
    // </header>
  );
}

export default NavbarComponent;
