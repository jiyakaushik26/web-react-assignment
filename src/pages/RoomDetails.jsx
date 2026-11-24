import { useParams, Link } from "react-router";

function RoomDetails({
  rooms,
  bookedRoomId,
  bookRoom,
  cancelBooking,
}) {
  const { id } = useParams();

  const room = rooms.find(
    (room) => room.id === Number(id)
  );

  if (!room) {
    return (
      <div className="container">
        <h2>Room not found</h2>

        <Link to="/rooms">Back to Rooms</Link>
      </div>
    );
  }

  const bedsLeft = room.capacity - room.occupied;

  return (
    <div className="container">
      <h1>Room {room.roomNo} Details</h1>

      <div className="details-card">
        <p>Block: {room.block}</p>

        <p>Type: {room.type}</p>

        <p>Monthly Rent: ₹{room.rentPerMonth}</p>

        <p>Floor: {room.floor}</p>

        <p>Capacity: {room.capacity}</p>

        <p>Occupied: {room.occupied}</p>

        <p>Beds Left: {bedsLeft}</p>

        <h3>Facilities</h3>

        <ul>
          {room.facilities.map((facility, index) => (
            <li key={index}>{facility}</li>
          ))}
        </ul>

        {room.isBooked && (
          <button
            className="cancel-btn"
            onClick={() => cancelBooking(room.id)}
          >
            Cancel Booking
          </button>
        )}

        {!room.isBooked &&
          bedsLeft > 0 &&
          bookedRoomId === null && (
            <button onClick={() => bookRoom(room.id)}>
              Book Room
            </button>
          )}

        {!room.isBooked && bedsLeft === 0 && (
          <p>Room Full</p>
        )}

        {!room.isBooked &&
          bedsLeft > 0 &&
          bookedRoomId !== null && (
            <p>Already booked another room</p>
          )}
      </div>

      <Link to="/rooms">Back to Rooms</Link>
    </div>
  );
}

export default RoomDetails;