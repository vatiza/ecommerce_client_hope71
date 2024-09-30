import { Button, Image } from "@nextui-org/react";
import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";

const ProductsCard = ({ product }) => {
  const { id, title, price, rating, image, } = product;

  return (
    <>
      <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
        <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
          <Image className="object-cover" src={image} alt={title} />
          <span className="absolute top-0 z-10 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
            39% OFF
          </span>
        </div>

        <div className="mt-4 px-5 pb-5">
          <Link to={`/product/${id}`} href="#">
            <h5 className="text-xl tracking-tight text-slate-900">{title}</h5>
          </Link>
          <div className="mt-2 mb-5 flex items-center justify-between ">
            {/* TODO:Offer price implement change to dynamic */}
            <p>
              <span className="text-3xl font-bold text-slate-900">
                ${price}
              </span>
              <span className="text-sm text-slate-900 line-through">$699</span>
            </p>
            <div className="flex items-center">
              <Rating style={{ maxWidth: 105 }} readOnly value={rating.rate} />
              <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                {rating.rate}
              </span>
            </div>
          </div>

          <Button className=" " color="primary">
            Add to Cart
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductsCard;
