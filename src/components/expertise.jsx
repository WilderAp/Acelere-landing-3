import texts from "../utils/texts.json";

function Expertise() {
  return (
    <section
      className="mb-40"
      style={{ display: "flex", justifyContent: "center" }}
    >
      {/* Section header */}
      <img src={texts["section-three"].picture} alt="interface_img" />
    </section>
  );
}
export default Expertise;
