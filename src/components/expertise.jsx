import texts from "../utils/texts.json";
import useMediaQuery from "../hooks/useMediaQuery";

function Expertise() {
  const isSmallScreen = useMediaQuery("(max-width: 640px)"); // Suponiendo 640px como el breakpoint para móviles

  return (
    <section
      className="mb-40"
      style={{ display: "flex", justifyContent: "center" }}
    >
      {/* Section header */}
      <img
        src={
          !isSmallScreen
            ? texts["section-three"].picture1
            : texts["section-three"].picture2
        }
        alt="interface_img"
      />
    </section>
  );
}
export default Expertise;
