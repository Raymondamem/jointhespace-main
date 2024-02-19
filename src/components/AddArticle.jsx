import { DialogBody, DialogHeader, Typography } from "@material-tailwind/react";
import { useContext } from "react";
import { userContext } from "../contexts/MainContext";

export const AddArticle = () => {
  const { dialog, setDialog, setArticle } = useContext(userContext);
  const handleOpen = () => {
    setDialog(!dialog);
    setArticle(false);
  };
  return (
    <div className="overflow-y-hidden">
      <div className="flex items-center justify-between">
        <DialogHeader></DialogHeader>
        <DialogHeader>
          <Typography
            className="mb-1 text-center uppercase font-bold text-2xl"
            variant="h4"
          >
            Publish your article at jointhe.space
          </Typography>
        </DialogHeader>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="black"
          className="mr-3 h-8 w-8 font-bold cursor-pointer"
          onClick={handleOpen}
        >
          <path
            fill="black"
            d="m12 14.122l5.303 5.303a1.5 1.5 0 0 0 2.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 1 0-2.122-2.121L12 9.879L6.697 4.576a1.5 1.5 0 1 0-2.122 2.12L9.88 12l-5.304 5.304a1.5 1.5 0 1 0 2.122 2.12z"
          />
        </svg>
      </div>
      <DialogBody>
        <div>
          <div className="flex flex-col justify-between">
            <form>
              <h2 className="text-xl font-bold text-black my-2">
                Publisher Data
              </h2>
              <div className="grid grid-cols-3 gap-4 mt-3">
                <div className="modalinput">
                  <label htmlFor="">Posted By</label>
                  <input type="text" />
                </div>
                <div className="modalinput">
                  <label htmlFor="">Publisher Email</label>
                  <input type="email" />
                </div>
                <div className="modalinput">
                  <label htmlFor="">Your Phone Number</label>
                  <input type="text" />
                </div>
              </div>

              <h2 className="text-xl font-bold text-black my-2">
                Article Details
              </h2>
              <div className="grid grid-cols-3 gap-4 mt-3">
                <div className="modalinput">
                  <label htmlFor="">Article title</label>
                  <input type="text" />
                </div>
                <div className="modalinput">
                  <label htmlFor="">Add Picture {`(max 5)`}</label>
                  <input type="file" multiple />
                </div>
                <div className="modalinput">
                  <label htmlFor="">Region of topic</label>
                  <input type="text" />
                </div>
              </div>

              <div className="modalinput">
                <label htmlFor="">The Article</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>

              <div className="flex items-start gap-6 mt-3">
                <div className="w-4">
                  <input
                    type="checkbox"
                    className="border-2 border-black w-full h-full"
                  />
                </div>
                <p className="text-black text-md font-bold">
                  I Request to move my article to the {`"TOP NEWS"`} section
                </p>
              </div>

              <div className="flex items-start gap-6 mt-3">
                <div className="h-4 w-4">
                  <input
                    type="checkbox"
                    className="w-full h-full border-2 border-black"
                  />
                </div>
                <p className="text-black text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque incidunt tempora voluptatum, voluptate eum excepturi a
                  rem ex deleniti blanditiis sapiente qui accusamus, fugit
                  dolorum, eius aperiam tenetur porro! Ipsa quod voluptate
                  excepturi nihil. Temporibus placeat aperiam alias quis odit.
                </p>
                <div className="">
                  <input
                    type="submit"
                    value={"Add Article"}
                    className="px-6 py-4 bg-black text-white font-bold text-md cursor-pointer"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </DialogBody>
    </div>
  );
};
