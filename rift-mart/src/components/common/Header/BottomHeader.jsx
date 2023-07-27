import React from "react";
import Row from "../Row";

const menus = [
  "Jewellry & Accessories",
  "Clothing & Shoes",
  "Home & Living",
  "Wedding & Party",
  "Toys & Entertainment",
  "Art & Collectibles",
  "Craft Supplies & Tools",
];

const BottomHeader = () => {
  return (
    <div className="w-full px-[10%] h-[60px] bg-[#89939c0d] ">
      <Row className="items-center h-full justify-between">
        {menus.map((item) => {
          return (
            <p className="text-[16px] text-slate-800" key={item}>
              {item}
            </p>
          );
        })}
      </Row>
    </div>
  );
};

export default BottomHeader;
