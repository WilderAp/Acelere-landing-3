import texts from "../../utils/texts.json";
import acelerate_logo from "../../../public/acelerate_logo.png";

function Footer() {
  return (
    <footer className="">
      <div className="mx-auto px-4 sm:px-1">
        {/* Top area: Blocks */}
        <div className="grid  lg:grid-cols-7 gap-8 py-8 md:py-12 border-t border-gray-200 ">
          {/* 1st block */}
          <div
            className="sm:col-span-2 md:col-span-3 lg:col-span-3 text-start ml-20"
            style={{ maxWidth: "600px" }}
          >
            <div
              className="font-bold flex items-center gap-4"
              style={{ color: "#FFFFFF", fontSize: "25px" }}
            >
              <img src={acelerate_logo} alt="logo" width={50} />
              {texts["section-one"].title}
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-1  flex  justify-center mx-w-auto gap-5">
            {/* <div className="sm:col-span-2 md:col-span-3 lg:col-span-1 mx-auto sm:flex sm:justify-center gap-5"> */}
            {/* Social as */}
            <div>
              <a
                href="#0"
                className="flex justify-center items-center  border shadow transition duration-150 ease-in-out"
                style={{
                  backgroundColor: "#27272A",
                  color: "white",
                  maxWidth: "40px",
                }}
                aria-label="Twitter"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                </svg>
              </a>
            </div>
            <div className="">
              <a
                href="#0"
                className="flex justify-center items-center border  shadow transition duration-150 ease-in-out"
                style={{
                  backgroundColor: "#27272A",
                  color: "white",
                  maxWidth: "40px",
                }}
                aria-label="Github"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                </svg>
              </a>
            </div>
            <div className="">
              <a
                href="#0"
                className="flex justify-center items-center  border shadow transition duration-150 ease-in-out"
                style={{
                  backgroundColor: "#27272A",
                  color: "white",
                  maxWidth: "40px",
                }}
                aria-label="Facebook"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                </svg>
              </a>
            </div>
          </div>

          {/* 3rd block */}
          <div
            className="sm:col-span-2 md:col-span-3 lg:col-span-2 lg:text-end sm: text-center"
            style={{ color: "#A1A1AA" }}
          >
            <ul className="text-sm">
              <li className="mb-3">
                <span className=" hover:text-gray-900 transition duration-150 ease-in-out">
                  {texts["section-seven"]["section-2"].item1}
                </span>
              </li>
              <li className="mb-3">
                <span className=" hover:text-white transition duration-150 ease-in-out">
                  {texts["section-seven"]["section-2"].item2}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom area */}
        {/* <div
          className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200"
          style={{ display: "flex", justifyContent: "center" }}
        > */}
        {/* Copyrights note */}
        {/* <div className="text-sm text-gray-600 mr-4">
            &copy; Copyright 2024 . All rights reserved.
          </div> */}
        {/* </div> */}
      </div>
    </footer>
  );
}
export default Footer;
