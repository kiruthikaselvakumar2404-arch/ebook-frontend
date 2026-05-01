import { useParams, Link } from "react-router-dom";
import poems from "../data/poems";

function PoemDetail() {
  const { id } = useParams();
  const poemId = parseInt(id);

  const poem = poems.find((p) => p.id === poemId);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #cc7d17, #7a3e2b)",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "auto",
          background: "white",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
        }}
      >
        <h2>{poem.title}</h2>

        {/* 📄 Poem Content */}
        <p style={{ whiteSpace: "pre-line", marginTop: "20px" }}>
          {poem.content}
        </p>

        {/* 🔥 Navigation Buttons */}
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* ⬅ Back / Previous */}
          {poemId === 1 ? (
            <Link to="/poems">
              <button
                style={{
                  padding: "10px 20px",
                  background: "#d2a719",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                ⬅ Back
              </button>
            </Link>
          ) : (
            <Link to={`/poem/${poemId - 1}`}>
              <button
                style={{
                  padding: "10px 20px",
                  background: "#d2a719",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                ⬅ Previous
              </button>
            </Link>
          )}

          {/* ➡ Next */}
          {poemId < poems.length && (
            <Link to={`/poem/${poemId + 1}`}>
              <button
                style={{
                  padding: "10px 20px",
                  background: "#d2a719",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                Next ➡
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default PoemDetail;