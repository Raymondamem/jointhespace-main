import { Button } from "@material-tailwind/react";
import { useContext } from "react";
import { userContext } from "../contexts/MainContext";

export const Articles = () => {
  const { setArticle, setDialog } = useContext(userContext);
  const handleArticle = () => {
    setArticle(true);
    setDialog(true);
  };
  return (
    <div className="bg-[#0E0E0E] text-white overflow-x-hidden">
      <div className="container mx-auto max-w-screen-2xl">
        <div className="flex justify-between py-4">
          <h2 className="text-xl font-bold">Top News</h2>
          <Button
            onClick={() => handleArticle()}
            className="rounded-none border border-white"
          >
            Add Your News
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-4 custom-grid text-center">
          {/* first row */}
          <div className="space-y-5">
            {/* loop */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2"
                alt="ok"
                className="w-full h-72"
              />
              <h2 className="text-lg my-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit
              </h2>
            </div>
            {/* loop end */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2"
                alt="ok"
                className="w-full h-72"
              />
              <h2 className="text-lg my-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit
              </h2>
            </div>
          </div>
          {/* first row end*/}
          <div>
            {/* loop */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2"
                alt="ok"
                className="w-full h-40"
              />
              <h2 className="text-lg my-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit
              </h2>
            </div>
            {/* loop end */}
            {/* loop */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2"
                alt="ok"
                className="w-full h-40"
              />
              <h2 className="text-lg my-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit
              </h2>
            </div>
            {/* loop end */}
            {/* loop */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2"
                alt="ok"
                className="w-full h-40"
              />
              <h2 className="text-lg my-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit
              </h2>
            </div>
            {/* loop end */}
            {/* loop */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2"
                alt="ok"
                className="w-full h-40"
              />
              <h2 className="text-lg my-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit
              </h2>
            </div>
            {/* loop end */}
          </div>
          {/* sencond row end */}
          <div className="space-y-5">
            {/* loop */}
            <div className="flex">
              <img
                src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2"
                alt="ok"
                className="w-40 h-28 mr-2"
              />
              <h2 className="text-lg my-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit
              </h2>
            </div>
            {/* loop end */}
            {/* loop */}
            <div className="flex">
              <img
                src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2"
                alt="ok"
                className="w-40 h-28 mr-3"
              />
              <h2 className="text-lg my-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit
              </h2>
            </div>
            {/* loop end */}
            {/* loop */}
            <div className="flex">
              <img
                src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2"
                alt="ok"
                className="w-40 h-28 mr-3"
              />
              <h2 className="text-lg my-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit
              </h2>
            </div>
            {/* loop end */}
            {/* loop */}
            <div className="flex">
              <img
                src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2"
                alt="ok"
                className="w-40 h-28 mr-3"
              />
              <h2 className="text-lg my-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit
              </h2>
            </div>
            {/* loop end */}
            {/* loop */}
            <div className="flex">
              <img
                src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2"
                alt="ok"
                className="w-40 h-28 mr-3"
              />
              <h2 className="text-lg my-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit
              </h2>
            </div>
            {/* loop end */}
            {/* loop */}
            <div className="flex">
              <img
                src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2"
                alt="ok"
                className="w-40 h-28 mr-3"
              />
              <h2 className="text-lg my-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit
              </h2>
            </div>
            {/* loop end */}
            {/* loop */}
            <div className="flex">
              <img
                src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2"
                alt="ok"
                className="w-40 h-28 mr-3"
              />
              <h2 className="text-lg my-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit
              </h2>
            </div>
            {/* loop end */}
          </div>
          {/* third row end */}
        </div>
      </div>
    </div>
  );
};
