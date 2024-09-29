import Categories from "../../components/categories/categories";
import SummerCollections from "../../components/collections/summer_collections";
import WinterCollections from "../../components/collections/winter_collections";
import FlashSale from "../../components/flash_sale/flash_sale";
import Sliders from "../../components/sliders/sliders";

const HomePage = () => {
  return (
    <div>
      <header>
        <Sliders />
      </header>
      <FlashSale />
      <Categories />
      <WinterCollections />
      <SummerCollections />
    </div>
  );
};

export default HomePage;
