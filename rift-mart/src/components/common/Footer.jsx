import React from "react";
import Container from "./Container";
import Row from "./Row";

const Footer = () => {
  return (
    <Container className="bg-black h-[52px] py-[14px]">
      <Row className="text-white justify-between h-full items-center">
        <p>© 2023 RiftMart Inc.</p>
        <img src="/imgs/cards.png" alt="footer image" className="w-[283px]" />
        <p>Scroll to Top</p>
      </Row>
    </Container>
  );
};

export default Footer;
