import React from "react";
import Sliders from "../components/Layout/Slider/Slider"
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import Campaigns from "../components/Campaigns/Campaigns";
import Blogs from "../components/Blogs/Blogs";
import Brands from "../components/Brands/Brands";
import CampaignSingle from "../components/CampaignSingle/CampaignSingle";
import Policy from "../components/Layout/Policy/Policy";


const HomePage = () => {
  return (
    <React.Fragment>

      <Sliders />
      <Categories />
      <Products />
      <Campaigns />
      <Products />
      <Blogs />
      <Brands />
      <CampaignSingle />
      <Policy />

    </React.Fragment>
  );
};

export default HomePage;