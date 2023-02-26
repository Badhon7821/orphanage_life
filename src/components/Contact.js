const Contact = () => {
  return (
    <div className="bg-gray-400 pb-20">
      <div className="container mx-auto ">
        <div className="text-center">
          <h1 className="pt-16 pb-8 text-4xl text-white ">Contact US</h1>
          <h2 className="text-white/60 text-2xl pb-10">
            Orphan life Foundation,
            <br /> Panchagarh, Vitargarh, Road No- 1121
          </h2>
        </div>
        <form className="w-full">
          <div className="flex gap-2">
            <div className="w-[50%] mb-4">
              <label
                className="text-xl text-white/80 font-semibold"
                htmlFor="FirstName"
              >
                First Name:{" "}
              </label>
              <input
                type="text"
                className="w-[100%] py-2 px-2 rounded-sm"
                placeholder="Enter First Name"
              />
            </div>
            <div className="w-[50%]">
              <label
                className="text-xl text-white/80 font-semibold"
                htmlFor="LastName"
              >
                Last Name:{" "}
              </label>
              <input
                type="text"
                className="w-[100%] py-2 px-2 rounded-sm"
                placeholder="Enter Last Name"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="text-xl text-white/80 font-semibold"
              htmlFor="Email"
            >
              {" "}
              Email:{" "}
            </label>
            <input
              type="email"
              className="w-[100%] py-2 px-2 rounded-sm"
              placeholder="Enter Email "
            />
          </div>
          <div className="mb-4">
            <label
              className="text-xl text-white/80 font-semibold"
              htmlFor="Phone"
            >
              Phone no:{" "}
            </label>
            <input
              type="text"
              className="w-full py-2 px-2 rounded-sm"
              placeholder="Enter First Name"
            />
          </div>
          <div className="mt-10">
            <input
              className="bg-white py-1 px-5 text-gray-500 text-xl rounded-sm duration-300 border-2 border-white  hover:border-2
              hover:border-gray-500 hover:bg-gray-600 hover:text-white"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
