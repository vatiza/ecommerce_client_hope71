import { Button, Card, CardBody } from "@nextui-org/react";
import { FaGripfire } from "react-icons/fa";
import FreeMoodSliders from "../sliders/freemodesliders";
const FlashSale = () => {
  return (
    <div className="mt-5">
      <Card shadow="lg">
        <CardBody>
          <div className="flex justify-between ">
            <h1 className="text-xl font-bold inline-flex items-center">
              Flash Sale <FaGripfire className="text-red-600" />
            </h1>
            <Button color="primary" variant="bordered">
              See All
            </Button>
          </div>
        </CardBody>
      </Card>
      <div>
        <FreeMoodSliders />
      </div>
    </div>
  );
};

export default FlashSale;
