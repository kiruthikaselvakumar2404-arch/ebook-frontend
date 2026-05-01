import { Link } from "react-router-dom";

function PoemCard({ poem }) {
  return (
    <div
      style={{
        background: "#eedf9f",
        padding: "20px",
        borderRadius: "15px",
        width: "300px",
        boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
border: "1px solid #eca738",
      }}
    >
      <h3 style={{ marginBottom: "10px" }}>{poem.title}</h3>

      <p style={{ height: "80px", overflow: "hidden" }}>
        {poem.content.substring(0, 100)}...
      </p>

      <Link to={`/poem/${poem.id}`}>
        <button
          style={{
            marginTop: "10px",
            padding: "8px 15px",
            background: "#d2a719",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Read More
        </button>
      </Link>
    </div>
  );
}

export default PoemCard;
