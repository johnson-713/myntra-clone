import "./Popular.css";
import data_product from "../Assets/data";
import { Items } from "../Items/Items";

export const Popular = () => {
  return (
    <div className="popular">
      <h1>Popular in Women</h1>
      <hr />
      <div className="popular-item">
        {data_product?.map((i, ind) => {
          return (
            <Items
              key={ind}
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
