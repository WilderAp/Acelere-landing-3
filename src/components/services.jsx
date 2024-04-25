import devImg from "../../public/dev.png";
import texts from "../utils/texts.json";

function Services() {
  return (
    <main className="flex flex-col w-auto justify-center relative max-w-6xl mx-auto px-4 sm:px-40">
      {/* 1st Section */}
      <section className="flex">
        <div>
          <img src={devImg} alt="devImg" width={220} />
        </div>

        <div
          className="max-w-3xl mx-auto text-center pb-12 md:pb-20 flex flex-col text-start pl-20"
          style={{ maxWidth: "600px" }}
        >
          <h1 className="text-3xl font-bold mb-7">
            {texts["section-four"].title}
          </h1>
          <p className="text-xl text-gray-600">{texts["section-four"].body}</p>
        </div>
      </section>
      {/* 2nd Section */}
      <section className="flex">
        <div
          className="max-w-3xl mx-auto text-center pb-12 md:pb-20 flex flex-col text-start pr-20"
          style={{ maxWidth: "600px" }}
        >
          <h1 className="text-3xl font-bold mb-7">
            {texts["section-four"].title2}
          </h1>
          <p className="text-xl text-gray-600">{texts["section-four"].body2}</p>
        </div>

        <div>
          <img src={devImg} alt="devImg" width={220} />
        </div>
      </section>
    </main>
  );
}
export default Services;
