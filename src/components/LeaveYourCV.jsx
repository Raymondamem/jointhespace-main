import { DialogBody, DialogHeader, Typography } from "@material-tailwind/react";
import { useContext } from "react";
import { userContext } from "../contexts/MainContext";

export const LeaveYourCV = () => {
  const { dialog, setDialog, setLeaveCV } = useContext(userContext);
  const handleOpen = () => {
    setDialog(!dialog);
    setLeaveCV(false);
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
            Leave Your CV
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
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col justify-between">
            <form>
              <div className="modalinput">
                <label htmlFor="">Your Name</label>
                <input type="text" />
              </div>
              <div className="modalinput">
                <label htmlFor="">Your Phone Number</label>
                <input type="text" />
              </div>
              <div className="modalinput">
                <label htmlFor="">Your Email Address</label>
                <input type="email" />
              </div>
              <div className="modalinput">
                <label htmlFor="">
                  What kind of job you are looking for?{" "}
                  {`(Department / Position/ Location)`}
                </label>
                <textarea name="" id="" cols="10" rows="4"></textarea>
              </div>
              <div className="modalinput">
                <label htmlFor="">Add your cv {`(Max 5 MB)`}</label>
                <input type="file" />
              </div>
              <div className="modalinput">
                <label htmlFor="">
                  Add your profile link {`(ex: linkedin)`}
                </label>
                <input type="text" />
              </div>
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-2 border-black"
                />
                <p className="text-sm text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque incidunt tempora voluptatum, voluptate eum excepturi a
                  rem ex deleniti blanditiis sapiente qui accusamus, fugit
                  dolorum, eius aperiam tenetur porro! Ipsa quod voluptate
                  excepturi nihil. Temporibus placeat aperiam alias quis odit.
                </p>
              </div>
              <div className="modalsubmit">
                <input
                  type="submit"
                  value={"leave your CV"}
                  className="px-6 py-4 w-full capitalize bg-black text-white font-bold text-md cursor-pointer my-2"
                />
              </div>
            </form>
          </div>
          <div>
            <img
              className="w-full max-h-screen p-10"
              src={`${import.meta.env.BASE_URL}cvimage.png`}
              alt=""
            />
          </div>
        </div>
      </DialogBody>
    </div>
  );
};
