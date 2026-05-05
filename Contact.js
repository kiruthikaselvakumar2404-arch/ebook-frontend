import { useState, useEffect } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);

  // 🔥 CHANGE THIS to your real backend URL
  const API = "https://your-backend.onrender.com";

  // 📥 Fetch reviews
  useEffect(() => {
    fetch(`${API}/reviews`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.log(err));
  }, []);

  // 🚀 Submit review
  const handleSubmit = async () => {
    if (!name || !review || rating === 0) {
      alert("Please fill all fields");
      return;
    }

    const newReview = { name, review, rating };

    try {
      await fetch(`${API}/addReview`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReview),
      });

      alert("✅ Review submitted");

      // Refresh reviews
      const res = await fetch(`${API}/reviews`);
      const data = await res.json();
      setReviews(data);

      // Clear form
      setName("");
      setReview("");
      setRating(0);
    } catch (err) {
      console.log(err);
      alert("❌ Error submitting review");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        background: "linear-gradient(to right, #f8f5f2, #e8d9c5)",
        fontFamily: "'Noto Serif Tamil', serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        உங்கள் கருத்துகள்
      </h2>

      {/* 📝 FORM */}
      <div
        style={{
          maxWidth: "600px",
          margin: "auto",
          background: "white",
          padding: "25px",
          borderRadius: "15px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
        }}
      >
        <input
          type="text"
          placeholder="உங்கள் பெயர்"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <textarea
          placeholder="உங்கள் கருத்து..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
          rows="4"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        {/* ⭐ Rating */}
        <div style={{ margin: "15px 0", textAlign: "center" }}>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => setRating(star)}
              style={{
                fontSize: "28px",
                cursor: "pointer",
                color: star <= rating ? "#f4c430" : "#ccc",
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
            padding: "12px",
            background: "#cc7d17",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontSize: "16px",
          }}
        >
          Submit
        </button>
      </div>

      {/* 📋 REVIEWS */}
      <div style={{ maxWidth: "600px", margin: "40px auto" }}>
        {reviews.map((r, i) => (
          <div
            key={i}
            style={{
              background: "white",
              padding: "15px",
              marginBottom: "15px",
              borderRadius: "10px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            }}
          >
            <h4>{r.name}</h4>
            <p>{r.review}</p>
            <div style={{ color: "#f4c430" }}>
              {"★".repeat(r.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;