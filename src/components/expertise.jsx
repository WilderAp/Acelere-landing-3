import texts from "../utils/texts.json";

function Expertise() {
  return (
    <section className="mb-40">
      {/* Section header */}
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
        <h1 className="text-3xl font-bold">{texts["section-three"].title}</h1>
      </div>

      <body id="cards" className="">
        {/* Items */}
        <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-4xl">
          {/* 1st item */}
          <div className="relative flex flex-col items-center p-6 py-10 bg-white rounded border">
            <div className="flex items-center gap-4 justify-start w-full">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2  rounded"
                style={{ backgroundColor: "#EAEAFF" }}
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              ></svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                {texts["section-three"].item1.title}
              </h4>
            </div>
            <p className="text-gray-600 text-start">
              {texts["section-three"].item1.body}
            </p>
          </div>
          {/* 2nd item */}
          <div className="relative flex flex-col items-center p-6 py-10 bg-white rounded border">
            <div className="flex items-center gap-4 justify-start w-full">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2  rounded"
                style={{ backgroundColor: "#EAEAFF" }}
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              ></svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                {texts["section-three"].item2.title}
              </h4>
            </div>
            <p className="text-gray-600 text-start">
              {texts["section-three"].item2.body}
            </p>
          </div>
          {/* 3th item */}
          <div className="relative flex flex-col items-center p-6 py-10 bg-white rounded border">
            <div className="flex items-center gap-4 justify-start w-full">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2  rounded"
                style={{ backgroundColor: "#EAEAFF" }}
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              ></svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                {texts["section-three"].item3.title}
              </h4>
            </div>
            <p className="text-gray-600 text-start">
              {texts["section-three"].item3.body}
            </p>
          </div>
        </div>
      </body>
    </section>
  );
}
export default Expertise;
