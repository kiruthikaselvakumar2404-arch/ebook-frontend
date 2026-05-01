import { useState, useEffect } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);

  // 🔥 Fetch reviews from backend
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.log(err));
  }, []);

  // 🔥 Submit review to backend
  const handleSubmit = async () => {
    if (!name || !review || rating === 0) {
      alert("Fill all fields");
      return;
    }

    const newReview = { name, review, rating };

    await fetch("http://localhost:5000/addReview", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    });

    alert("✅ Review submitted");

    // Refresh reviews
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));

    // Clear fields
    setName("");
    setReview("");
    setRating(0);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        background: "linear-gradient(to right, #f8f5f2, #e8d9c5)",
      }}
    >
      <h2 style={{ textAlign: "center" }}>கருத்துகள்</h2>

      {/* FORM */}
      <div
        style={{
          maxWidth: "600px",
          margin: "auto",
          background: "white",
          padding: "25px",
          borderRadius: "15px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
        }}
      >
        <input
          type="text"
          placeholder="உங்கள் பெயர்"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        />

        <textarea
          placeholder="உங்கள் கருத்து..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
          rows="4"
          style={{ width: "100%", padding: "10px" }}
        />

        {/* ⭐ Rating */}
        <div style={{ margin: "15px 0" }}>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => setRating(star)}
              style={{
                fontSize: "25px",
                cursor: "pointer",
                color: star <= rating ? "gold" : "#ccc",
              }}
            >
              ★
            </span>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          style={{
            width: "100%",
            padding: "10px",
            background: "#cc7d17",
            color: "white",
            border: "none",
            borderRadius: "8px",
          }}
        >
          Submit
        </button>
      </div>

      {/* REVIEWS */}
      <div style={{ maxWidth: "600px", margin: "30px auto" }}>
        {reviews.map((r, i) => (
          <div
            key={i}
            style={{
              background: "white",
              padding: "15px",
              marginBottom: "15px",
              borderRadius: "10px",
              boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h4>{r.name}</h4>
            <p>{r.review}</p>
            <div style={{ color: "gold" }}>
              {"★".repeat(r.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;