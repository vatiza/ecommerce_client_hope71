
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";

const ProductsCard = ({ product }) => {
  const { title, price, image, category } = product;
  console.log(product);
  return (
    <div>
      <Link to="/">
        <Card className="">
          <CardBody className=" w-full">
            <Image
              alt="Card background"
              className=" "
              height={240}
              width={240}
              src={image}
            />
          </CardBody>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">{title}</p>
            <p className="font-semibold">${price}</p>
            <h4 className="font-bold text-large">{category}</h4>
          </CardHeader>
        </Card>
      </Link>
    </div>
  );
};

export default ProductsCard;
