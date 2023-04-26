import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./i.css"

const NavbarRouter = () => {
  return (
    <>
  <div style={{background:"gray"}} className='kerak'>
  <Container>
        <Row>
            <Col>
            
            <Nav justify variant="tabs" defaultActiveKey="/home" >
      <Nav.Item>
       <Link to ="/home" style={{textDecoration:"none"}}>
       <li style={{color: "blue", paddingTop:"10px ",fontSize:"20px",fontFamily:"cursive"}} className='kerak'>Home</li>
       </Link>
      </Nav.Item>
      <Nav.Item>
      <Link to ="/create" style={{textDecoration:"none"}}>
       <li  style={{color: "blue", paddingTop:"10px ",fontSize:"20px",fontFamily:"cursive"}}>Create Data</li>
       </Link>
      </Nav.Item>
      <Nav.Item>
      <Link to ="/table" style={{textDecoration:"none"}}>
       <li  style={{color: "blue", paddingTop:"10px ",fontSize:"20px",fontFamily:"cursive"}}>Table List</li>
       </Link>
      </Nav.Item>
     
    </Nav>
            </Col>
        </Row>
    </Container>
  </div>

    </>
  )
}

export default NavbarRouter