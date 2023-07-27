import React from "react";
import Row from "./Row";
import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
  return (
    <Link to={`/product/${data._id}`}>
      <div className="w-full shadow pb-[5px]">
        <img
          src={data.img}
          alt={data.title}
          className="w-full object-cover h-[400px]"
        />
        <Row className="px-[10px]">
          <h6 className="text-black text-[16px] font-semibold mt-[18px]">
            {data.title}
          </h6>
        </Row>
        <Row className="justify-between mt-[16px] px-[10px] mb-[10px]">
          <p className="text-[16px] text-[#00000080]">{data.category.title}</p>
          <p className="text-[16px] text-[#00000080] font-semibold">
            {data.price}
          </p>
        </Row>
      </div>
    </Link>
  );
};

export default ProductCard;
