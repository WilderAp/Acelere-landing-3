import texts from "../utils/texts.json";
import { BsStars } from "react-icons/bs";
import { RxText } from "react-icons/rx";
import { IoIosExpand } from "react-icons/io";
import { PiUserFocus } from "react-icons/pi";

import "../css/font.css";

function Services() {
  return (
    <section className="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div className="pt-12 md:pt-20 flex justify-center">
        <div className="lg:text-left text-center  pb-12">
          <div
            style={{
              width: "fit-content",
              border: "1px groove #3F3F46",
              color: "#C082FF",
              fontFamily: "Space",
              marginBottom: "24px",
              padding: "8px 16px 8px 16px",
            }}
            className="btn-sm text-gray-200  hover:bg-gray-800 mx-auto"
          >
            <span>{texts["section-four"].breadcrum}</span>
          </div>
          <h1 className="text-4xl  text-center text-white">
            {texts["section-four"].title}
          </h1>
          <h1 className="text-4xl mb-4  text-center text-white">
            {texts["section-four"].title2}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-20">
            <div className="max-w-sm bg-black-200  shadow hover:bg-[#7A67FF] dark:bg-white-800 dark:border-white-700 dark:hover:bg-white-700 mx-auto ">
              <div className="p-6" style={{ width: "280px" }}>
                <div
                  className="lg:mr-80 md:mr-80 mx-auto"
                  style={{
                    color: "white",
                    border: "1px solid",
                    width: "fit-content",
                    marginBottom: "10px",
                  }}
                >
                  <BsStars size={30} />
                </div>
                <div>
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
                      {texts["section-four"].item1.title}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      {texts["section-four"].item1.description}
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="max-w-sm mx-auto  bg-black-200 border-transparent shadow hover:bg-[#7A67FF] dark:bg-white-800 dark:border-white-700 dark:hover:bg-white-700">
              <div className="p-6" style={{ width: "280px" }}>
                <div
                  className="lg:mr-80 md:mr-80 mx-auto"
                  style={{
                    color: "white",
                    border: "1px solid",
                    width: "fit-content",
                    marginBottom: "10px",
                  }}
                >
                  <RxText size={30} />
                </div>
                <div>
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
                      {texts["section-four"].item2.title}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      {texts["section-four"].item2.description}
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="max-w-sm mx-auto  bg-black-200 border-transparent shadow hover:bg-[#7A67FF] dark:bg-white-800 dark:border-white-700 dark:hover:bg-white-700">
              <div className="p-6" style={{ width: "280px" }}>
                <div
                  className="lg:mr-80 md:mr-80 mx-auto"
                  style={{
                    color: "white",
                    border: "1px solid",
                    width: "fit-content",
                    marginBottom: "10px",
                  }}
                >
                  <IoIosExpand size={30} />
                </div>
                <div>
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
                      {texts["section-four"].item3.title}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      {texts["section-four"].item3.description}
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="max-w-sm mx-auto  bg-black-200 border-transparent shadow hover:bg-[#7A67FF] dark:bg-white-800 dark:border-white-700 dark:hover:bg-white-700">
              <div className="p-6" style={{ width: "280px" }}>
                <div
                  className="lg:mr-80 md:mr-80 mx-auto"
                  style={{
                    color: "white",
                    border: "1px solid",
                    width: "fit-content",
                    marginBottom: "10px",
                  }}
                >
                  <PiUserFocus size={30} />
                </div>
                <div>
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
                      {texts["section-four"].item4.title}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      {texts["section-four"].item4.description}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Services;
