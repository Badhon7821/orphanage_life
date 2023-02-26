const Hero = () => {
  return (
    <div className=" bg-gray-400 py-20">
      <div className="container mx-auto text-white">
        <h2 className="text-6xl pt-20 pb-3">Join us</h2>
        <h2 className="text-5xl pb-8">Change Their World</h2>
        <p className="text-2xl pb-14">
          Change Yours. This Will Change Everything.
        </p>
        <div className="pb-20  ">
          <a
            className="bg-orange-600 inline-block py-2 text-xl rounded-sm px-10 hover:bg-white duration-300 hover:text-orange-600"
            href="#"
          >
            Donate Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
