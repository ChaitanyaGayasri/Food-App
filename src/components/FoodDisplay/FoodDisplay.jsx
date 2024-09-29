import  { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem'
// eslint-disable-next-line react/prop-types
const FoodDisplay = ({category}) => {
    const { food_list } = useContext(StoreContext)
  return (
      <div className='food-display' id='food-display'>
          <h1>Top Dishes Near You</h1>
          <div className='food-display-list'>
              {
                  food_list.map((item, index) => {
                      if (category === "All" || category === item.category) {
                          return <FoodItem key={index} id={item._id} price={item.price} name={item.name} description={item.description} image={item.image} />
                      }
                  })
              }
          </div>
    </div>
  )
}

export default FoodDisplay