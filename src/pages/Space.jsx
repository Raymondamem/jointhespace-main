/* eslint-disable no-undef */
import { Button } from "@material-tailwind/react";
import { userContext } from "../contexts/MainContext";
import { useContext } from "react";

const data = Array.from({ length: 100 }, (_, index) => ({
  jobTitle: `Job Title ${index + 1}`,
  company: `Company ${index + 1}`,
  location: `Location ${index + 1}`,
  salary: `$${(index + 1) * 1000}`, // Assuming salary increases by $1000 for each entry
}));

const tableRows = data.map((entry, index) => (
  <tr key={index} className="border-2 border-white uppercase">
    <td className="px-6 py-4 whitespace-nowrap">{entry.jobTitle}</td>
    <td className="px-6 py-4 whitespace-nowrap">{entry.company}</td>
    <td className="px-6 py-4 whitespace-nowrap">{entry.location}</td>
    <td className="px-6 py-4 whitespace-nowrap">{entry.salary}</td>
  </tr>
));

export const Space = () => {
  const { setDialog, setLeaveCV, setJob } = useContext(userContext);
  const handleCV = () => {
    setLeaveCV(true);
    setDialog(true);
  };
  const handleJob = () => {
    setJob(true);
    setDialog(true);
  };
  return (
    <div className="bg-[#0E0E0E] text-white">
      <div className="grid grid-cols-2 gap-8 px-10 custom-grid-space">
        {/* Left Side */}
        <div className="col-span-1 max-h-screen">
          <div className="flex flex-col h-full">
            {/* Image */}
            <img
              src={`${import.meta.env.BASE_URL}spacejob.png`}
              alt="Image"
              className="w-full h-[800px]"
            />

            {/* Buttons */}
            <div className="flex justify-center mt-4 gap-6 px-10 py-4 border-2 border-white bg-black">
              <button className="bg-white text-black font-bold w-full py-2 px-4 rounded">
                Planet View
              </button>
              <button className="bg-white text-black font-bold w-full py-2 px-4 rounded">
                Maps View
              </button>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="col-span-1 overflow-y-auto">
          <div className="flex gap-4">
            <Button
              onClick={() => handleCV()}
              className="uppercase font-semibold w-full border border-white rounded-none"
            >
              Leave Your CV
            </Button>
            <Button
              onClick={() => handleJob()}
              className="uppercase font-semibold w-full border border-white rounded-none"
            >
              Add Your Job
            </Button>
          </div>
          <div>
            <h2 className="uppercase text-2xl font-bold text-center my-6">
              Find your future job
            </h2>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Keywords"
              className="searchinput w-3/6"
            />
            <input
              type="text"
              placeholder="Location"
              className="searchinput w-2/6"
            />
            <input
              type="submit"
              value={"search"}
              className="w-1/6 searchbutton"
            />
          </div>
          <div className="max-h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-white scrollbar-track-white">
            {/* List of Posts */}
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-md text-white uppercase font-bold">
                    Job Title
                  </th>
                  <th className="px-6 py-3 text-left text-md text-white uppercase font-bold">
                    Company
                  </th>
                  <th className="px-6 py-3 text-left text-md text-white uppercase font-bold">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-md text-white uppercase font-bold">
                    Salary
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white gap-y-4">
                {tableRows}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
