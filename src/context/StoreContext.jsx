import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = ({ children }) => {

  const [cart, setCart] = useState({})

  const addToCart = (itemId) => {
    !cart[itemId] ? setCart((prev) => ({ ...prev, [itemId]: 1 })) : setCart((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
  }

  const removeCart = (itemId) => {
    setCart((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }


  useEffect(() => {
    console.log(cart)
  }, [cart])

  const value = {
    food_list,
    addToCart,
    removeCart,
    cart
  }

  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider;