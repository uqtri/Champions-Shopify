import HeaderForClient from "../layouts/HeaderForClient/HeaderForClient";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Footer from "../layouts/Footer/Footer";
import SignIn from "../pages/SignIn/SignIn";
import Cart from "../pages/Cart/Cart";
import UserProvider from "../hooks/context/user";
import CartProvider from "../hooks/context/cart";
import ProtectedRoutes from "../routes/ProtectedRoutes";
import Shop from "../pages/Shop/Shop";
import Welcome from "../layouts/Welcome/Welcome";
import { useState, useEffect } from "react";
import SendMail from "../pages/ResetPassword/SendMail/SendMail";
import ChangePassword from "../pages/ResetPassword/ChangePassword/ChangePassword";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import UserUpdate from "../pages/UserUpdate/UserUpdate";
import CheckOut from "../pages/CheckOut/CheckOut";

function ClientRoute() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username === "admin") {
      setIsAdmin(true);
    }
  }, []);
  if (!isAdmin) {
    return (
      <>
        <BrowserRouter>
          <ScrollToTop />
          <div className="d-flex flex-column min-vh-100">
            <HeaderForClient />
            <UserProvider>
              <CartProvider>
                <Welcome />
                <Routes>
                  <Route
                    path="/checkout"
                    element={
                      <ProtectedRoutes>
                        <CheckOut />
                      </ProtectedRoutes>
                    }
                  ></Route>
                  <Route
                    path="/user"
                    element={
                      <ProtectedRoutes>
                        <UserUpdate />
                      </ProtectedRoutes>
                    }
                  ></Route>
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
                  <Route path="/shop" element={<Shop />}></Route>
                  <Route path="reset-password">
                    <Route path="send-mail" element={<SendMail />} />
                    <Route
                      path="change-password"
                      element={<ChangePassword />}
                    />
                  </Route>
                  <Route
                    path="/product/:id"
                    element={<ProductDetail />}
                  ></Route>
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
  } else return <></>;
}

export default ClientRoute;
