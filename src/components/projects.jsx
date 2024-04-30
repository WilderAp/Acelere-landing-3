import texts from "../utils/texts.json";
import "../css/font.css";

function Projects() {
  return (
    <main className="mt-40">
      {/* header */}
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
        <h1
          className="text-5xl font-bold mb-7"
          style={{ color: "white", fontFamily: "Space" }}
        >
          {texts["section-eight"].title}
        </h1>
      </div>

      {/* Members */}
      <section className="flex flex-between gap-20 justify-center">
        {texts["section-eight"].body.map((project) => (
          <div key={project.id}>
            <div
              className="rounded"
              style={{
                backgroundColor: "",
                overflow: "hidden",
              }}
            >
              <img
                src={project.picture}
                alt="projectImg"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
            <div className="text-center">
              <h1
                className="font-bold mt-5 text-xl"
                style={{ color: "#7967FF" }}
              >
                {project.name}
              </h1>
              <p style={{ color: "white" }}>{project.role}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
export default Projects;
