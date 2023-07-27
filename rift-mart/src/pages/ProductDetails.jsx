import React, { useContext, useEffect, useState } from "react";

import Container from "../components/common/Container";
import Row from "../components/common/Row";
import Button from "../components/common/Button";
import Layout from "../components/common/Layout";
import QtyContainer from "../components/common/QtyContainer";
import client from "../apis";
import apiEndpoints from "../apis/endpoint";
import { useParams } from "react-router-dom";
import CartContext from "../contextAPIs";

const ProductDetails = () => {
  const { handleInc } = useContext(CartContext);
  const [product, setProduct] = useState();
  const { id } = useParams();
  const getProduct = async () => {
    try {
      const response = await client.get(apiEndpoints.product(id));
      setProduct(response.data);
      //console.log(response.data);
    } catch (err) {
      console.log("Error:", err);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <Layout>
        <Container className="my-[41px]">
          <Row className=" justify-between">
            <Row className="w-[47%]">
              <img
                src={product?.img}
                className="w-full object-cover h-[80vh] "
                alt={product?.title}
              />
            </Row>
            <Row className="flex-col w-[47%]">
              <h1 className="text-[30px] text-slate-700 font-semibold mb-[70px]">
                {`${product?.category.title} | ${product?.title}`}
              </h1>
              <Row className="gap-[20px] mb-[10px]">
                <p className="text-[18px] text-black font-medium w-[15%]">
                  Rating:
                </p>
                <p className="text-[18px] text-black mx-4">{product?.rating}</p>
              </Row>
              <Row className="gap-[20px] mb-[10px]">
                <p className="text-[18px] text-black font-medium w-[15%]">
                  Price:
                </p>
                <p className="text-[18px] text-black mx-4">{product?.price}</p>
              </Row>
              <Row className="gap-[20px] mb-[10px]">
                <p className="text-[18px] text-black font-medium w-[15%]">
                  Category:
                </p>
                <p className="text-[18px] text-black mx-4">
                  {product?.category.title}
                </p>
              </Row>
              <Row className="gap-[20px] mb-[10px] ">
                <p className="text-[18px] text-black font-medium w-[15%]">
                  Description:
                </p>
                <p className="text-[18px] text-black mx-4">
                  {product?.description}
                </p>
              </Row>
              <div className="mt-[40px] w-full">
                <QtyContainer data={product} />
              </div>
              <Button
                onClick={() => handleInc(product)}
                title="Add to Cart"
                className="w-[174px] h-[52px] mt-3"
              />
            </Row>
          </Row>
        </Container>
      </Layout>
    </>
  );
};

export default ProductDetails;
