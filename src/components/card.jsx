import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "../styles/carda.css";
import { useTranslation } from "react-i18next";

const Cards = ({ item, handleClick }) => {
  const { title,  text,price,img,classa} = item

  const { t } = useTranslation();


  
  return (
    <>
         
      <Container>
       
        <Row>
          <Col md={12}>
            <div  className={classa}>
            <Card className="mt-5" style={{ width: "20rem" }}>
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Title className="card_section1">{title}</Card.Title>
                <Card.Text className="card_section">{text}</Card.Text>
                <div className="div_section">
                  <h6 className="salom">26 {t("text.card_3")}</h6>
                  <h6 className="salom">36 {t("text.card_3")}</h6>
                </div>
                <div className="div_section1">
                  <h6 className="salom">{t("text.card_4")}</h6>
                  <h6 className="salom">{t("text.card_5")} </h6>
                </div>
              </Card.Body>
            </Card>
            <div className="div_div">
              <h6 className="section_h1">{price} </h6>
              <h6 className="section_h2">320Р</h6>

              <div className="div_div1">
                <button
                  onClick={() => handleClick(item)}
                  className="section_btn1"
                >
                 {t("text.card_6")}
                </button>
              </div>
            </div>
            </div>
          </Col>
        </Row>
        <Row>
        </Row>
      </Container>
      
    </>
       
    // <div className="col-12 col-md-4">
    // <div className="cards">
    //   <div className="image_box">
    //     <img src={img} alt="" />
    //   </div>
    //   <div className="details">
    //     <p>{title}</p>
    //     <p>Price - {price}$</p>
    //     <button onClick={() => handleClick(item)}>Add to Cart</button>
    //   </div>
    // </div>
    // </div>
  );
};

export default Cards;
