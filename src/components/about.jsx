import texts from "../utils/texts.json";

function About() {
  return (
    <main className="relative lg:flex justify-center items-center">
      {/* Backgrounds */}
      <div
        className="absolute inset-0 top-1 md:mt-24 lg:mt-0 bg-#F5F5FF-900 pointer-events-none"
        style={{ backgroundColor: "#F5F5FF" }}
        aria-hidden="true"
      ></div>
      <div
        className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-#F5F5FF-200 transform translate-y-1/2"
        style={{ backgroundColor: "#F5F5FF" }}
      ></div>
      {/* header - main info */}
      <section className="relative flex py-20 ">
        <div
          className="max-w-3xl mx-auto text-center pb-12 md:pb-20 flex flex-col text-start px-10"
          style={{ maxWidth: "600px" }}
        >
          <h1 className="text-3xl font-bold mb-7">
            {texts["section-five"].title}
          </h1>
          <h1 className="text-5xl font-bold mb-7" style={{ color: "#3030FF" }}>
            {texts["section-five"].subtitle}
          </h1>
          <p className="text-xl text-gray-600">{texts["section-five"].body}</p>
        </div>
      </section>

      {/* Items */}
      <section className="relative px-7">
        {/* 1st item */}
        <div className="flex flex-between p-6 bg-white rounded shadow-sm mb-4">
          <div className="flex flex-col">
            <h2 style={{ color: "#3030FF" }}>
              {texts["section-five"].item1.title}
            </h2>
            <p>{texts["section-five"].item1.body}</p>
          </div>
          <figure style={{ color: "#3030FF" }}>
            {texts["section-five"].item1.logo}
          </figure>
        </div>
        {/* 2nd item */}
        <div className="flex flex-between p-6 bg-white rounded shadow-sm mb-4">
          <div className="flex flex-col">
            <h2 style={{ color: "#3030FF" }}>
              {texts["section-five"].item2.title}
            </h2>
            <p>{texts["section-five"].item2.body}</p>
          </div>
          <figure style={{ color: "#3030FF" }}>
            {texts["section-five"].item2.logo}
          </figure>
        </div>
        {/* 3rd item */}
        <div className="flex flex-between p-6 bg-white rounded shadow-sm mb-4 ">
          <div className="flex flex-col">
            <h2 style={{ color: "#3030FF" }}>
              {texts["section-five"].item3.title}
            </h2>
            <p>{texts["section-five"].item3.body}</p>
          </div>
          <figure style={{ color: "#3030FF" }}>
            {texts["section-five"].item3.logo}
          </figure>
        </div>
      </section>
    </main>
  );
}
export default About;
