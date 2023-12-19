const Hero = () => {
  return (
    <div className="relative flex flex-col items-center bg-cover bg-no-repeat h-[90vh] py-16 ">
      {/* Main vehicle image */}
      <img
        src="Main_Image.png"
        alt="Modern SUV driving on a scenic coastal road"
        className="w-full object-cover md:w-3/4"
      />

      {/* Center image */}
      <img
        src="../../public/ChotaHathi.png"
        alt="Modern SUV driving on a scenic coastal road"
        className="z-10 absolute top-[13rem] ml-[2rem]  w-[35rem]"
      />

      {/* Feature images */}
      <img
        src="feature2.png"
        alt="Modern SUV driving on a scenic coastal road"
        className="absolute top-[17rem] left-[26rem] w-32"
      />

      <img
        src="feature1.png"
        alt="Modern SUV driving on a scenic coastal road"
        className="absolute top-[27rem] left-[19rem] w-[11rem]"
      />
      <img
        src="feature3.png"
        alt="Modern SUV driving on a scenic coastal road"
        className="absolute top-[17rem] right-[23rem] w-32"
      />

      <img
        src="feature4.png"
        alt="Modern SUV driving on a scenic coastal road"
        className="absolute top-[25rem] right-[21rem] w-32"
      />
    </div>
  );
};

export default Hero;
