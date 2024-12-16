import HeaderForClient from "./layouts/HeaderForClient/HeaderForClient";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import Footer from "./layouts/Footer/Footer";
import SignIn from "./pages/SignIn/SignIn";
import Cart from "./pages/Cart/Cart";
import UserProvider from "./hooks/context/user";
import CartProvider from "./hooks/context/cart";
import ProtectedRoutes from "./ProtectedRoutes";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="d-flex flex-column min-vh-100">
          <HeaderForClient />
          <UserProvider>
            <CartProvider>
              <Routes>
                <Route
                  path="/"
                  element={
                    <ProtectedRoutes>
                      <Home />
                    </ProtectedRoutes>
                  }
                ></Route>
                <Route path="/signup" element={<SignUp />}></Route>
                <Route path="/signin" element={<SignIn />}></Route>
                <Route
                  path="/cart"
                  element={
                    <ProtectedRoutes>
                      <Cart />
                    </ProtectedRoutes>
                  }
                ></Route>
              </Routes>
            </CartProvider>
          </UserProvider>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
