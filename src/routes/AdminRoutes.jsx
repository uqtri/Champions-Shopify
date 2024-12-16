import HeaderForAdmin from "../layouts/HeaderForAdmin/HeaderForAdmin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Footer from "../layouts/Footer/Footer";
import SignIn from "../pages/SignIn/SignIn";
import Cart from "../pages/Cart/Cart";
import UserProvider, { userContext } from "../hooks/context/user";
import CartProvider from "../hooks/context/cart";
import ProtectedRoutes from "../routes/ProtectedRoutes";
import Shop from "../pages/Shop/Shop";
import Welcome from "../layouts/Welcome/Welcome";
import { useContext, useEffect, useState } from "react";
import UserManagement from "../pages/UserManagement/UserManagement";
import AddProduct from "../pages/AddProduct/AddProduct";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
function AdminRoute() {
  const [isAdmin, setIsAdmin] = useState(userContext);

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username === "admin") {
      setIsAdmin(true);
    }
  }, []);
  if (isAdmin) {
    return (
      <>
        <BrowserRouter>
          <ScrollToTop />
          <div className="d-flex flex-column min-vh-100">
            <HeaderForAdmin />
            <UserProvider>
              <CartProvider>
                <Welcome />
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
                    path="/user-management"
                    element={<UserManagement />}
                  ></Route>
                  <Route path="/statistics" element={<Shop />}></Route>

                  <Route path="/add-product" element={<AddProduct />}></Route>
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

export default AdminRoute;
