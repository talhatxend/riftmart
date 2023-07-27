import React, { useEffect, useState } from "react";
import Container from "../Container";
import Row from "../Row";
import ProductCard from "../ProductCard";
import client from "../../../apis";
import apiEndpoints from "../../../apis/endpoint";

const BestSellerProducts = () => {
  const [product, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);

  const getData = async () => {
    try {
      const catResponse = await client.get(apiEndpoints.categories);
      //!const response = await client.get(apiEndpoints.products(12));
      //console.log("response:", response);
      setCategories(catResponse.data);
      handleGetProduct();
      //!setProduct(response.data.docs);
      //console.log(categories);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  const handleGetProduct = async (cid) => {
    try {
      const response = await client.get(apiEndpoints.products(12, cid));
      setProduct(response.data.docs);
    } catch (err) {
      console.log("error:", err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <h1 className="w-full text-center text-[30px] text-[#1e2832] font-semibold mt-[50px] uppercase">
        Best Seller Products
      </h1>

      <Row className="items-center mt-8">
        <p
          onClick={() => handleGetProduct()}
          className="text-[16px] mr-[40px] cursor-pointer text-black font-bold hover:text-[#757575]"
        >
          All Products
        </p>
        {categories.map((item) => (
          <p
            onClick={() => handleGetProduct(item._id)}
            key={item._id}
            className="text-[16px] mr-[40px] cursor-pointer text-[#00000080]  hover:text-[#757575]"
          >
            {item.title}
          </p>
        ))}
      </Row>
      <Row className="flex-wrap gap-[1%] mt-[40px]">
        {product.map((item) => (
          <div className="w-[24%] mb-[20px]" key={item._id}>
            <ProductCard data={item} />
          </div>
        ))}
      </Row>
    </Container>
  );
};

export default BestSellerProducts;
