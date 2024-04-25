import { Hero } from "../Components/Hero/Hero"
import { NewCollections } from "../Components/NewCollections/NewCollections"
import { NewsLetter } from "../Components/NewsLetter/NewsLetter"
import { Offers } from "../Components/Offers/Offers"
import { Popular } from "../Components/Popular/Popular"


export const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular title='Popular In Women' />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  )
}
