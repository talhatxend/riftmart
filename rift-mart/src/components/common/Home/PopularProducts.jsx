import React, { useState, useEffect } from "react";
import Container from "../Container";
import Row from "../Row";
import { Link } from "react-router-dom";

import axios from "axios";
import apiEndpoints from "../../../apis/endpoint";
import client from "../../../apis";

const PopularProducts = () => {
  const [products, setproducts] = useState([]);

  const getData = async () => {
    try {
      const response = await client.get(apiEndpoints.products());
      setproducts(response.data.docs);
    } catch (err) {
      console.log("Error:", err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Row className="justify-center my-[20px] uppercase">
        <h1 className="text-[30px] font-semibold text-[#1e2832]">
          Popular Products
        </h1>
      </Row>
      <Row className="gap-[16px] h-[648px]">
        <div className="h-[648px] w-[52px] relative">
          <p className="text-[34px] h-full w-[648px] text-black -rotate-90 absolute text-center -z-[1]">
            Explore new and popular Products
          </p>
        </div>
        <Link to={`/product/${products[0]?._id}`}>
          <img
            className="w-[648px] h-[648px] object-cover cursor-pointer"
            src={products[0]?.img}
            alt="exploring new"
          />
        </Link>
        <Row className="flex-wrap w-1/2 h-[648px] gap-[10px]">
          {products.slice(1).map((item, idx) => (
            <Link
              to={`/product/${item._id}`}
              className="w-[46%] h-[300px]"
              key={item._id}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-[312px] h-[315px] object-cover"
              />
            </Link>
          ))}
        </Row>
      </Row>
    </Container>
  );
};

export default PopularProducts;
