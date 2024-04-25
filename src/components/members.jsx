import texts from "../utils/texts.json";

function Members() {
  return (
    <main className="py-60">
      {/* header */}
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
        <h1 className="text-5xl font-bold mb-7" style={{ color: "#3030FF" }}>
          {texts["section-six"].title}
        </h1>
      </div>

      {/* Members */}
      <section className="sm:flex justify-center max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-4xl">
        {texts["section-six"].body.map((member) => (
          <div
            key={member.id}
            style={{
              flexDirection: "column",
            }}
          >
            <div
              className="rounded"
              style={{
                backgroundColor: "#EAEAFF",
                borderRadius: "2em",
                maxHeight: "480px",
                maxWidth: "320px",
                overflow: "hidden",
              }}
            >
              <img
                src={member.picture}
                alt="memberImg"
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
                style={{ color: "#3030FF" }}
              >
                {member.name}
              </h1>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
export default Members;
