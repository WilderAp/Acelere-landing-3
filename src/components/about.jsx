import texts from "../utils/texts.json";
import "../css/font.css";
import { FaFigma } from "react-icons/fa";
import avatars from "../../public/avatars.png";

function About() {
  return (
    <main className="relative lg:flex justify-center items-center">
      {/* Backgrounds */}
      <div
        className="absolute inset-0 top-1 md:mt-24 lg:mt-0 bg-#F5F5FF-900 pointer-events-none"
        style={{ backgroundColor: "#18181B", borderRadius: "10px" }}
        aria-hidden="true"
      ></div>
      <div
        className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-#F5F5FF-200 transform translate-y-1/2"
        style={{ backgroundColor: "#18181B" }}
      ></div>
      {/* header - main info */}
      <section className="relative flex py-20 items-center justify-center ">
        <div
          className="max-w-3xl text-center pb-12 md:pb-20 flex mx-auto flex-col text-center "
          style={{
            maxWidth: "604px",
            fontFamily: "Space",
          }}
        >
          <div
            className="flex items-center gap-4 mx-auto"
            style={{ maxWidth: "450px" }}
          >
            <img src={avatars} alt="avatars" width={140} />
            <h1 className="text-xl text-start" style={{ color: "#A1A1AA" }}>
              {texts["section-five"].title}
            </h1>
          </div>
          <h1 className="text-5xl  mb-7" style={{ color: "#7967FF" }}>
            {texts["section-five"].subtitle}
          </h1>
          <div className="mx-auto">
            <button
              style={{
                backgroundColor: "#F3F2FF",
                borderRadius: "4px",
                padding: "16px 32px 16px 32px",
                color: "#09090B",
                width: "220px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <FaFigma size={20} />
              {texts["section-five"].breadcrum}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
export default About;
