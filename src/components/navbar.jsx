import React from "react";
import "../styles/navbar.css";
import { Carousel, Col, Container, NavDropdown, Row } from "react-bootstrap";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
const abc = require("../img/navbar.png");

const Navbar = ({ setShow, size }) => {
  const { t } = useTranslation();

  const handleClick = (lang) => {
    i18next.changeLanguage(lang);
  };

  return (
    <Container>
      <Row>
        <Col>
          <nav>
            <div className="nav_box">
              <span className="my_shop" onClick={() => setShow(true)}>
                <h1 className="nav_logo">LOGO</h1>
              </span>
              <div className="cart" onClick={() => setShow(false)}>
                <span>
                  <i className="fas fa-cart-plus"></i>
                </span>
                <span>{size}</span>
              </div>
            </div>
          </nav>
        </Col>
      </Row>
      <Row>
        <Col md={1} xs={12}>
          <button className="search-box">
            <h4 className="search">{t("text.li_1")}</h4>
          </button>
        </Col>

        <Col md={1} xs={12}>
          <button className="search-box">
            <h4 className="search">{t("text.li_2")}</h4>
          </button>
        </Col>

        <Col  md={1} xs={12}>
          <button className="search-box">
            <h4 className="search">{t("text.li_3")}</h4>
          </button>
        </Col>

        <Col  md={1} xs={12}>
          <button className="search-box">
            <h4 className="search">{t("text.li_4")}</h4>
          </button>
        </Col>

        <Col  md={1} xs={12}>
          <button className="search-box">
            <h4 className="search">{t("text.li_5")}</h4>
          </button>
        </Col>

        <Col md={1} xs={12}>
          <button className="search-box">
            <h4 className="search">{t("text.li_6")}</h4>
          </button>
        </Col>

        <Col  md={1} xs={12}>
          <button className="search-box">
            <h4 className="search">{t("text.li_7")}</h4>
          </button>
        </Col>

        <Col  md={1} xs={12}>
          <button className="search-box">
            <h4 className="search">{t("text.li_8")}</h4>
          </button>
        </Col>

        <Col  md={1} xs={12}>
          <button className="search-box">
            <h4 className="search">{t("text.li_9")}</h4>
          </button>
        </Col>

        <Col  md={1} xs={12}>
          <button className="search-box">
            <h4 className="search">{t("text.li_10")}</h4>
          </button>
        </Col>

        <Col  md={1} xs={12}>
          <button className="search-box">
            <h4 className="search">{t("text.li_11")}</h4>
          </button>
        </Col>

        <Col  md={1} xs={12}>
          <NavDropdown
            title={t("text.choose")}
        
            style={{ color: "black" }}
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item
              href="#action/3.1"
              onClick={() => handleClick("ru")}
            >
              Russian
            </NavDropdown.Item>
            <NavDropdown.Item
              href="#action/3.2"
              onClick={() => handleClick("uzb")}
            >
              {" "}
              Uzbek
            </NavDropdown.Item>
            <NavDropdown.Item
              href="#action/3.3"
              onClick={() => handleClick("eng")}
            >
              English
            </NavDropdown.Item>
          </NavDropdown>
        </Col>
      </Row>
      <Row>
        <Col>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={abc} alt="First slide" />
              <Carousel.Caption>
                <h3 className="carusel">Роллы из-под ножа</h3>
                <p className="carusel1">
                  Вы можете быть уверенными, что наши роллы будут <br />
                  приготовлены исключительно из свежей рыбы. <br />
                  Мы не готовим заранее. Приступаем к приготовлению <br /> блюд
                  только после Вашего заказа.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={abc} alt="Second slide" />

              <Carousel.Caption>
                <h3 className="carusel">Роллы из-под ножа</h3>
                <p className="carusel1">
                  Вы можете быть уверенными, что наши роллы будут <br />
                  приготовлены исключительно из свежей рыбы. <br />
                  Мы не готовим заранее. Приступаем к приготовлению <br /> блюд
                  только после Вашего заказа.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={abc} alt="Third slide" />

              <Carousel.Caption>
                <h3 className="carusel">Роллы из-под ножа</h3>
                <p className="carusel1">
                  Вы можете быть уверенными, что наши роллы будут <br />
                  приготовлены исключительно из свежей рыбы. <br />
                  Мы не готовим заранее. Приступаем к приготовлению <br /> блюд
                  только после Вашего заказа.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default Navbar;
