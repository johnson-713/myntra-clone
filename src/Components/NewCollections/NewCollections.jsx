import './NewCollections.css'
import new_collections from '../Assets/new_collections';
import { Items } from '../Items/Items';

export const NewCollections = () => {
  return (
    <div className='newcollections'>
        <h1>New Collections</h1>
        <hr />
        <div className='newcollections-items'>
        {new_collections?.map((i, ind) => {
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
  )
}
