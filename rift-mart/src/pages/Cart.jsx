import React, { useContext } from "react";
import Layout from "../components/common/Layout";
import Container from "../components/common/Container";
import Row from "../components/common/Row";
import QtyContainer from "../components/common/QtyContainer";
import CartItems from "../components/common/Cart/CartItems";
import CartContext from "../contextAPIs";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <Layout>
      <Container className="my-[40px] ">
        <Row className="mb-[30px] justify-center">
          <h6 className="text-[24px] text-slate-700 font-semibold">
            Cart Details
          </h6>
        </Row>
        <Row className="flex-col mb-[30px]">
          <Row className="h-[40px] bg-gray-400 w-full px-[20px] items-center text-center">
            <h6 className="text-white text-[18px] font-medium w-[20%]">
              Image
            </h6>
            <h6 className="text-white text-[18px] font-medium w-[20%]">
              Title
            </h6>
            <h6 className="text-white text-[18px] font-medium w-[20%]">
              Price
            </h6>
            <h6 className="text-white text-[18px] font-medium w-[20%]">
              Quantity
            </h6>
            <h6 className="text-white text-[18px] font-medium w-[20%]">
              Total
            </h6>
          </Row>
          {cartItems.map((item) => (
            <CartItems data={item} key={item._id} />
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

export default Cart;
