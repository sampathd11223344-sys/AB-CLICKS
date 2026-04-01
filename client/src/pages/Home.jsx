import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>AB Clicks</h1>
      <p>Capturing Moments, Creating Memories</p>

      <Link to="/booking">
        <button>Book Now</button>
      </Link>
    </div>
  );
}
