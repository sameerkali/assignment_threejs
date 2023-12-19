import { Card1, Card2 } from "./Cards";

const Buttons = () => {
    return (
        <div className=" ml-72 flex gap-5 pb-5">
            <button className=" text-black underline">All Vehicles</button>
            <button className=" text-gray-600 hover:text-black hover:underline">2-Wheeler</button>
            <button className=" text-gray-600 hover:text-black hover:underline">4-Wheeler</button>
            <button className=" text-gray-600 hover:text-black hover:underline">6-Wheeler</button>
        </div>
    )
}

const CardsPage = () => {
  return (
    <>
<Buttons/>
      <img
        className="absolute top-[42rem] right-0 w-[3rem]"
        src="sideStyle_downArrow.png"
      />
      <img
        className="absolute left-0 top-[80rem]  w-[6rem]"
        src="sideStyle_sphere.png"
      />
      <img
        className="absolute top-[105rem] right-0  w-[6rem]"
        src="sideStyle_rock.png"
      />

      <Card1 />
      <Card2 />
      <Card1 />
    </>
  );
};

export default CardsPage;
