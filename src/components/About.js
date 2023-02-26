const About = () => {
  return (
    <div className="container mx-auto">
      <div className="">
        <h2 className="text-3xl text-center mt-20 pb-6">
          Each day, an estimated 734 children become orphans
        </h2>
        <span></span>
        <p>
          Orphan Life Foundation is a worldwide non-profit orphanage funding
          organization that are dedicated to looking for the welfare of
          abandoned children and orphans. We help orphans by providing health
          and educational opportunities, stable housing and adoption services.
        </p>
        <p className="text-justify py-6">
          With the help of our charity program for orphans, we’ve developed a
          number of orphanages, infant adoption centers, and schools in
          underserved parts of Philippines,India,Columbia and Africa with proper
          learning resources and tools.
        </p>
        <p className="pb-10">
          Help us donate to orphans and improve their living situations.
        </p>
        <div className="pb-20 text-center ">
          <a
            className="bg-orange-600 inline-block py-2 text-xl rounded-sm px-10 border-2 hover:border-orange-600 hover:border-2 hover:py-2 hover:bg-white duration-300"
            href="#"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
