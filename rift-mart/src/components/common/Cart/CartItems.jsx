import React from "react";
import Row from "../Row";
import QtyContainer from "../QtyContainer";

const CartItems = ({ data }) => {
  console.log(data.qty);
  const getTotal = () => {
    const pric = parseInt(data?.price.slice(1));

    return pric * data.qty;
  };
  return (
    <Row className="border-[1px] border-gray-400 rounded items-center w-full py-[10px] px-[20px] my-[15px] ">
      <Row className="w-[20%] justify-center">
        <img
          src={data.img}
          alt={data.title}
          className="w-2/3 h-[150px] object-cover  rounded-[6px] "
        />
      </Row>
      <p className="w-[20%] text-[16px] text-center text-black font-medium">
        {data.title}
      </p>
      <p className="w-[20%] text-[16px] text-center text-black font-medium">
        {data.price}
      </p>
      <Row className="w-[20%] justify-center">
        <QtyContainer data={data} />
      </Row>
      <p className="w-[20%] text-[16px] text-center text-black font-medium">
        ${getTotal()}
      </p>
    </Row>
  );
};

export default CartItems;
