import React, { useContext } from "react";
import ClientHeader from "../../layouts/HeaderForClient/HeaderForClient";
import Banner from "./partials/Banner/Banner";
import Clothing from "../../components/Clothing/Clothing";
import Discover from "./partials/Discover/Discover";
import Speech from "./partials/Speech/Speech";
import BestSellerForWomen from "./partials/BestSellerForWomen.jsx/BestSellerForWomen";
import Promo from "./partials/Promo/Promo";
import Footer from "../../layouts/Footer/Footer";
import { userContext } from "../../hooks/context/user";
export default function Home() {
  const firstSpeech = `"CELEBREYTE" AN ERA OF EXCLUSIVE LUXURY \n Discover a world of uniqueness with our collection of limited clothing, where each piece is a unique\nexpression of style and individuality, you won't find anywhere else.`;
  const secondSpeech = `Share information about your brand with your customers. Describe a product, make announcements,\n or welcome customers to your store.`;
  const { user, setUser } = useContext(userContext);
  console.log(user, "RENDER IN HOME");
  return (
    <div>
      <Banner />
      <Speech text={firstSpeech} backgroundColor="bg-light-subtle" />
      <Discover />
      <Speech text={secondSpeech} backgroundColor="bg-secondary-subtle" />
      <BestSellerForWomen />
      {/* <Promo /> */}
    </div>
  );
}
