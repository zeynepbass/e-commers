import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import AuthPage from "./pages/AuthPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import CartPage from "./pages/CartPage";
import AdminUserPage from "./pages/admin/AdminUserPage";
import UserPage from "./Pages/admin/UserPage";
import CategoryPage from "./Pages/admin/Categories/CategoryPage";
import UpdateCategoryPage from "./Pages/admin/Categories/UpdateCategoryPage";
import CreateCategoryPage from "./Pages/admin/Categories/CreateCategoryPage";
import CreateProductPage from "./Pages/admin/Products/CreateProductPage";
import ProductPage from "./pages/Admin/Products/ProductPage";
import CreateCouponPage from "./pages/Admin/Coupons/CreateCouponPage";
import CouponPage from "./pages/Admin/Coupons/CouponPage";
import UpdateCouponPage from "./pages/Admin/Coupons/UpdateCouponPage";
import UpdateProductPage from "./pages/Admin/Products/UpdatePage";
import "./App.css";
function App() {


  return (
<Routes>

      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/admin/users" element={<UserPage />} />
        <Route path="/admin/categories" element={<CategoryPage />} />
        <Route path="/admin/products" element={<ProductPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />
      <Route path="/blog/:id" element={<BlogDetailsPage />} />
      <Route path="/admin/categories/update/:id" element={<UpdateCategoryPage />} />
      <Route path="/admin/categories/create" element={<CreateCategoryPage />} />
      <Route path="/admin/products/create" element={<CreateProductPage />} />
        <Route path="/admin/products/update/:id" element={<UpdateProductPage />} />
        <Route path="/admin/coupons" element={<CouponPage />} />
        <Route path="/admin/coupons/create" element={<CreateCouponPage />} />
        <Route path="/admin/coupons/update/:id" element={<UpdateCouponPage />} />
      <Route path="/admin/*">
        <Route path="users" element={<AdminUserPage />} />
      </Route>
    </Routes>


  )
}

export default App
