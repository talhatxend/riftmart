import React, { useContext, useState } from "react";
import Row from "./Row";
import Button from "./Button";
import CartContext from "../../contextAPIs";

const QtyContainer = ({ data }) => {
  const { cartItems, handleInc, handleDec } = useContext(CartContext);

  const cartItem = cartItems.find((item) => item._id === data?._id);
  return (
    <Row className="items-center">
      <Button
        onClick={() => handleDec(data)}
        title="-"
        className="w-[52px] h-[52px]"
      />
      <p className="w-[70px] text-center text-[16px] font-semibold">
        {cartItem?.qty || 0}
      </p>
      <Button
        onClick={() => handleInc(data)}
        title="+"
        className="w-[52px] h-[52px]"
      />
    </Row>
  );
};

export default QtyContainer;
