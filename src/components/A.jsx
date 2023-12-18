const A = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <img src="skeliton_loading.png" />
        <div className="space-y-4 mt-10 absolute top-[25rem]">
          {/* Add "hover:bg-red-700 hover:text-gray-200" to each button class */}
          <button className="bg-red-500 text-white px-3 py-1 rounded-lg mx-5 hover:bg-red-700 hover:text-gray-200">1</button>
          <button className="bg-red-500 text-white px-3 py-1 rounded-lg mx-5 hover:bg-red-700 hover:text-gray-200">2</button>
          <button className="bg-red-500 text-white mx-5 px-3 py-1 rounded-lg hover:bg-red-700 hover:text-gray-200">3</button>
          <button className="bg-red-500 text-white mx-5 px-3 py-1 rounded-lg hover:bg-red-700 hover:text-gray-200">4</button>
        </div>
      </div>
    </>
  );
};

export default A;
