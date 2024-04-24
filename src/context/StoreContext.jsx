import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = ({ children }) => {

  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : {};
  });

  // Update localStorage whenever cart state changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (itemId) => {
    !cart[itemId] ? setCart((prev) => ({ ...prev, [itemId]: 1 })) : setCart((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
  }

  const removeCart = (itemId) => {
    setCart((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }


  const getTotalAmount = () => {
    let totalAmount = 0
    for (const item in cart) {
      if (cart[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item)
        totalAmount += itemInfo.price * cart[item]
      }
    }
    return totalAmount;
  }


  const value = {
    food_list,
    addToCart,
    removeCart,
    cart,
    getTotalAmount
  }

  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider;