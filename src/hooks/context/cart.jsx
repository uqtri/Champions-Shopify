import { createContext, useContext, useEffect, useState } from "react";
import { userContext } from "./user";

const cartContext = createContext();
const URL = import.meta.env.VITE_SERVER_URL;

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const { user } = useContext(userContext);
  console.log("render cart provider");
  useEffect(() => {
    if (!user._id) {
      return;
    }
    const URI = URL + `/cart/${user._id}`;
    fetch(URI, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setCart(data.data);
      });
  }, [user]);
  return (
    <cartContext.Provider value={{ cart, setCart }}>
      {children}
    </cartContext.Provider>
  );
};
export { cartContext };
export default CartProvider;
