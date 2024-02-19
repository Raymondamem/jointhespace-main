import { Link } from "react-router-dom";

export const ProjectItem = (props) => {
  const { item } = props;

  const bgStyle = {
    backgroundImage: `url(${item.img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="w-full h-screen" style={bgStyle}>
      <div className="container mx-auto space-y-4 flex flex-col justify-center h-screen">
        <h3 className="text-2xl mt-20">{item?.sub}</h3>
        <h2 className="font-bold text-6xl uppercase">{item?.title}</h2>
        <Link
          to={"/"}
          className="border-2 border-white px-10 py-4 text-xl font-bold w-60 text-center cursor-pointer"
        >
          Rewatch
        </Link>
      </div>
    </div>
  );
};
