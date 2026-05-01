function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #cc7d17, #7a3e2b)",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "350px",
          maxWidth: "90%",
        }}
      >
        {/* 📖 Book Image */}
        <img
          src="/images/cover1.jpeg"
          alt="Book Cover"
          style={{
            width: "100%",
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          }}
        />

        {/* ✨ Title (Top) */}
<h2
  style={{
    position: "absolute",
    top: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    color: "black",
    fontFamily: "'Dancing Script', cursive",
    fontSize: "30px",
    textAlign: "center",
  }}
>
  இல்லாளின் கவியிதழ்
</h2>

{/* ✍️ Author (Bottom) */}
<p
  style={{
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    color: "black",
    fontFamily: "'Dancing Script', cursive",
    fontSize: "14px",
    textAlign: "center",
  }}
>
  <b>ராஜேஸ்வரி செல்வகுமார்</b>
</p>
</div> 
</div> 

); 
} export default Home;