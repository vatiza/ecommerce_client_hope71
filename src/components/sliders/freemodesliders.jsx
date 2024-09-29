import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import GetProducts from "../../utils/getProducts";
import ProductsCard from "../shared/ui/card/products_card";
import { Spinner } from "@nextui-org/react";

const FreeMoodSliders = () => {
  const [products, loading] = GetProducts();
  const productsLimit = products.slice(0, 9);
  console.log(products);
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <div>
          {loading ? (
            <Spinner color="primary" />
          ) : (
            productsLimit.map((product) => (
              <SwiperSlide className="p-5" key={product.id}>
                <ProductsCard product={product} />
              </SwiperSlide>
            ))
          )}
        </div>
      </Swiper>
    </>
  );
};

export default FreeMoodSliders;
