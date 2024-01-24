
import ReactDOM from "react-dom/client";
import App from "./App";
import CartProvider from "./context/CartProvider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import { Layout } from "./layouts/Layout";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
   <BrowserRouter>
   <CartProvider>
   <Layout>
       <App />
     </Layout>
   </CartProvider>
 </BrowserRouter>

)
