import { Link } from "react-router-dom";

export const Investors = () => {
  return (
    <div className="bg-[#0E0E0E] text-white min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          <div className="mx-auto flex flex-col items-center justify-center">
            <img src={`${import.meta.env.BASE_URL}logo2.jpg`} alt="" />
            <Link
              to={"/"}
              className="bg-black border border-white px-10 py-5 mt-4"
            >
              Looking for funds for my projects
            </Link>
          </div>
          <div className="mx-auto flex flex-col items-center justify-center">
            <img src={`${import.meta.env.BASE_URL}logo1.jpg`} alt="" />
            <Link
              to={"/"}
              className="bg-black border border-white px-10 py-5 mt-4"
            >
              Looking for space-related projects to invest
            </Link>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="uppercase text-center text-3xl leading-relaxed mb-6">
            Lets have a meeting soon : Click Here
          </h2>
        </div>
      </div>
    </div>
  );
};
