import poems from "../data/poems";
import PoemCard from "../components/PoemCard";

function Poems() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "30px",
        background: "linear-gradient(to right, #cc7d17, #7a3e2b)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#fdfdfd",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        கவிதைகள்
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "25px",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        {poems.map((poem) => (
          <PoemCard key={poem.id} poem={poem} />
        ))}
      </div>
    </div>
  );
}

export default Poems;