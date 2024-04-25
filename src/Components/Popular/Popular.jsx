/* eslint-disable react/prop-types */
import "./Popular.css";
import data_product from "../Assets/data";
import { Items } from "../Items/Items";

export const Popular = ({title}) => {
  return (
    <div className="popular">
      <h1>{title}</h1>
      <hr />
      <div className="popular-item">
        {data_product?.map((i, ind) => {
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
        })}
      </div>
    </div>
  );
};
