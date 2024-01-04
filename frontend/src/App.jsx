import Header from "./components/Layout/Footer/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import Policy from "./components/Layout/Footer/Policy/Policy";
import Categories from "./components/Categories/Categories";
import Sliders from "./components/Layout/Slider/Slider";
import Products from "./components/Products/Products";
import Campaigns from "./components/Campaigns/Campaigns";
import Blogs from "./components/Blogs/Blogs";
import Brands from "./components/Brands/Brands";
import CampaignSingle from "./components/CampaignSingle/CampaignSingle";
import "./App.css";
function App() {


  return (
    <>
     <Header/>
     <Sliders />

      <Categories />
      <Products />
      <Blogs />
      <Brands />
      <CampaignSingle />
      <Campaigns />
     <Policy />
      <Footer />
    </>
  )
}

export default App
