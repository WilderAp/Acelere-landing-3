import texts from "../utils/texts.json";
import "../css/font.css";
import { FaFigma } from "react-icons/fa";
import useMediaQuery from "../hooks/useMediaQuery";

function Hero() {
  const isSmallScreen = useMediaQuery("(max-width: 640px)"); // Suponiendo 640px como el breakpoint para móviles

  return (
    <section className="flex flex-col lg:flex-row items-center lg:mt-40 mb-20 md:flex-row mt-10">
      <div className="md:w-1/2">
        <div className="flex lg:justify-start justify-center">
          <div
            style={{
              width: "fit-content",
              border: "1px groove #3F3F46",
              color: "#C082FF",
              fontFamily: "Space",
              marginBottom: "24px",
              backgroundColor: "#18181B",
              padding: "8px 16px 8px 16px",
            }}
            className="btn-sm text-gray-200  hover:bg-gray-800 "
          >
            <span>{texts["section-two"].bread}</span>
          </div>
        </div>
        <div
          id="title"
          className="text-center md:text-left text-4xl md:text-6xl mb-10 text-white font-space"
          style={{ maxWidth: "600px" }}
        >
          <h1>{texts["section-two"].title}</h1>
          <h1 className="">{texts["section-two"].title2}</h1>
        </div>

        <div className="text-center md:text-left mb-5 flex flex-col md:flex-row justify-between text-gray-400 font-space max-w-3xl mx-auto md:mx-0">
          <h2 className="mb-5 md:mb-0">{texts["section-two"].body}</h2>
          <button
            style={{
              backgroundColor: "#C082FF",
              borderRadius: "4px",
              padding: "12px 24px",
              color: "#FFFFFF",
              minWidth: "201px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
            }}
          >
            <FaFigma size={20} />
            {texts["section-two"].button}
          </button>
        </div>
      </div>
      <div className="md:w-1/4 md:mr-10"></div>
    </section>
  );
}
export default Hero;
