const FooterHai = () => {
  return (
    <div className="flex px-16 bg-[#152a31]">
      <div className="p-7 mt-16 px-5 w-[25rem] h-[30rem] bg-gradient-to-b from-[#152a31] to-black text-white">
        <div className="flex">
          <img
            className="h-7 relative top-[1.4rem] px-3"
            src="public/mail.png"
          />
          <h1 className="mb-10 mt-5  text-xl">
            We would love to hear from you
          </h1>
        </div>
        <h1 className="mb-10 custom_h1 text-3xl">GET IN TOUCH</h1>
        <input
          placeholder="Business Related"
          className=" mt-11 w-[22rem] h-14 px-4 text-lg placeholder-gray-800 bg-gray-100 rounded-2xl"
          type="text"
        />
        <input
          placeholder="Driver Related"
          className=" mt-5 w-[22rem] h-14 px-4 text-lg placeholder-gray-800 bg-gray-100 rounded-2xl"
          type="text"
        />
      </div>
      <div className=" text-white pt-16 pl-20 ">
        <div className="flex gap-14 mb-10">
          <div>
            home
            <div className="h-1 w-12 rounded-md bg-green-300 "></div>
          </div>
          <div>
            Business
            <div className=" h-1 w-[4rem] rounded-md bg-green-300 "></div>
          </div>
          <div>
            Driver
            <div className=" h-1 rounded-md bg-green-300 "></div>
          </div>
          <div>
            Vehicle
            <div className=" h-1 rounded-md bg-green-300 "></div>
          </div>
          <div>
            About us
            <div className=" h-1 rounded-md bg-green-300 "></div>
          </div>
        </div>
        <div>
          <h1 className="mb-7">located in</h1>
          <div className="flex gap-10">
            <p className="w-[20rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              sollicitudin, eros id tincidunt feugiat, sem magna tristique nunc,
              viverra vehic Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Nulla sollicitudin, eros id tincidunt feugiat, sem magna
              tristique nunc, viverra vehic
            </p>
            <p className="w-[20rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              sollicitudin, eros id tincidunt feugiat, sem magna tristique nunc,
              viverra vehic Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Nulla sollicitudin, eros id tincidunt feugiat, sem magna
              tristique nunc, viverra vehic Lorem ipsum
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterHai;
