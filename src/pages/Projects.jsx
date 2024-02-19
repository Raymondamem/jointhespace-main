import { ProjectItem } from "../components/ProjectItem";

const items = [
  {
    img: "https://sxcontent9668.azureedge.us/cms-assets/assets/AX_3_Splashdown_Drone_20240209_000648_Higher_Res_Upscale_sharpen_Desktop_36389d8611.jpg",
    title: "AX-3 MISSION",
    sub: "DRAGON RETURNS TO EARTH",
    link: "/",
  },
  {
    img: "https://sxcontent9668.azureedge.us/cms-assets/assets/Starlink_G7_13_OS_56_4799_Desktop_a41ea27c02.jpg",
    title: "Starlink mission",
    sub: "Recent Launch",
    link: "/",
  },
];

export const Projects = () => {
  return (
    <div className="bg-[#0E0E0E] text-white">
      {items.map((item, idx) => (
        <ProjectItem key={idx} item={item} />
      ))}
    </div>
  );
};
