import { Button, Card, CardBody } from "@nextui-org/react";
import FreeMoodSliders from "../sliders/freemodesliders";
import { WiHot } from "react-icons/wi";

const SummerCollections = () => {
  return (
    <div className="mt-5">
      <Card shadow="lg">
        <CardBody>
          <div className="flex justify-between ">
            <h1 className="text-xl font-bold inline-flex items-center">
              Summer Collections <WiHot className="text-red-600" />
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

export default SummerCollections;
