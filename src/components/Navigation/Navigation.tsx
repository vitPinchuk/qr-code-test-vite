import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: "25px",
      }}
    >
      <Link to="/generate">Generate Qr Code</Link>
      <Link to="/scanner">QR code Scanner</Link>
      <Link to="/">Home</Link>
    </nav>
  );
};
