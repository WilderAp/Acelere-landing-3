import texts from "../utils/texts.json";
import "../css/font.css";
import { FaFigma } from "react-icons/fa";

function Hero() {
  return (
    <section className="flex flex-col-reverse items-center justify-start mb-20 md:flex-row mt-40">
      <div className="md:w-1/2">
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
        <div
          id="title"
          className="text-start md:text-left text-6xl  mb-10 "
          style={{ maxWidth: "600px", fontFamily: "Space", color: "white" }}
        >
          <h1>{texts["section-two"].title}</h1>
          <h1 className="">{texts["section-two"].title2}</h1>
        </div>

        <div
          className="text-center md:text-left mb-5 "
          style={{
            display: "flex",
            color: "#A1A1AA",
            fontFamily: "Space",
            justifyContent: "space-between",
            maxWidth: "624px",
          }}
        >
          <h2 className="mb-5" style={{ maxWidth: "355px" }}>
            {texts["section-two"].body}
          </h2>
          <button
            style={{
              backgroundColor: "#C082FF",
              borderRadius: "4px",
              padding: "16px 32px 16px 32px",
              color: "#FFFFFF",
              minWidth: "201px",
              display: "flex",
              alignItems: "center",
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
