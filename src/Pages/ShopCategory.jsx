/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import "./ShopCategory.css";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import { Items } from "../Components/Items/Items";

export const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img
        src={props.banner}
        alt="banner-image"
        className="shop-category-banner"
      />
      <div className="shop-category-indexSort">
        <p>
          <span>
            <strong>showing 1 -12</strong>
          </span>{" "}
          out of 36 products
        </p>
        <div className="shop-category-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shop-category-products">
        {all_product?.map((i, ind) => {
          if (props.category === i?.category) {
            return (
              <Items
                key={ind}
                id={i?.id}
                image={i?.image}
                name={i?.name}
                new_price={i?.new_price}
                old_price={i?.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shop-category-loadmore">Explore more</div>
    </div>
  );
};
