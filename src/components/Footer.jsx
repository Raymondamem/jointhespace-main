import { Typography } from "@material-tailwind/react";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="flex container mx-auto flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 py-6 text-center md:justify-between">
        <Typography color="blue-gray" className="font-normal text-white">
          &copy; 2024 Join The Space
        </Typography>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              variant="small"
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors text-white hover:text-blue-500 focus:text-white"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              variant="small"
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors text-white hover:text-blue-500 focus:text-blue-500"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              variant="small"
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors text-white hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              variant="small"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors text-white hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
    </footer>
  );
}
