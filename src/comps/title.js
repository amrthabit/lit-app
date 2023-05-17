import Spiral from "../comps/spiral";

export default function Title({ atTop, ...props }) {
  const handleTitleClick = () => {
    // scroll id=experience into view
    const experience = document.getElementById("experience");
    experience.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="title"
      style={{ 
        height: "100dvh",
        width: "100%",
        // position centered until it is pushed to the top by container below
      }}
    >
      <Spiral atTop={atTop} />

      <div className="titleContainer" onClick={handleTitleClick}>
        <div style={{ fontSize: 50 }}>Amr Thabit</div>
        <div style={{ fontSize: 27.5 }}>Software Developer</div>
      </div>
    </div>
  );
}
