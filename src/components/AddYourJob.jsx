import { DialogBody, DialogHeader, Typography } from "@material-tailwind/react";
import { useContext } from "react";
import { userContext } from "../contexts/MainContext";

export const AddYourJob = () => {
  const { dialog, setDialog, setJob } = useContext(userContext);
  const handleOpen = () => {
    setDialog(!dialog);
    setJob(false);
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
            Job title
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
              <div className="modalinput">
                <label htmlFor="">Company</label>
                <input type="text" />
              </div>
              <div className="modalinput">
                <label htmlFor="">Job Location</label>
                <input type="text" />
              </div>
              <div className="modalinput">
                <label htmlFor="">Sallery {`(EUR)`}</label>
                <input type="email" />
              </div>
              <div className="grid grid-cols-3 gap-4  border-b-black border-8 border-double mt-3">
                <div className="modalinput text-center">
                  <label htmlFor="">About the role</label>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div className="modalinput text-center">
                  <label htmlFor="">Requirments</label>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div className="modalinput text-center">
                  <label htmlFor="">Benifits</label>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-3">
                <div className="modalinput">
                  <label htmlFor="">Your Name</label>
                  <input type="text" />
                </div>
                <div className="modalinput">
                  <label htmlFor="">Your Email Address</label>
                  <input type="email" />
                </div>
                <div className="modalinput">
                  <label htmlFor="">Add your cv {`(Max 5 MB)`}</label>
                  <input type="file" />
                </div>
              </div>

              <div className="flex items-start gap-6 mt-3">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-2 border-black"
                />
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
                    value={"Apply for a job"}
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
