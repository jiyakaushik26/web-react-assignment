import { Link } from "react-router";

function Navbar({ bookedRoomId }) {
  return (
    <nav className="navbar">
      <h2>HostelHub</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/rooms">Rooms</Link>

        <Link to="/my-booking">
          My Booking ({bookedRoomId !== null ? 1 : 0})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;