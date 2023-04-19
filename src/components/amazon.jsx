import React, { useState } from "react";
import list from "../data";
import Cards from "./card";
import "../styles/amazon.css";
import { Container, Row } from "react-bootstrap";

const Amazon = ({ handleClick }) => {

const[get,setGet] = useState("")

  return (
   <>
  <Container>
    <Row>
    <div> 
      <input  onChange={(e) => setGet(e.target.value)} className="f" type="text" />
   </div>
    <section>
     
      {list.filter((item) => {
                return get.toLowerCase() === ""
                  ? item
                  : item.title.toLowerCase().includes(get);
              })
              .map((item) => (
     
        <Cards key={item.id} item={item} handleClick={handleClick} />
    
      ))}
    </section>
    </Row>
  </Container>
   </>
  );
};

export default Amazon;