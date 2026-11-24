import { Link } from "react-router";

function RoomCard({
  room,
  bookedRoomId,
  bookRoom,
  cancelBooking,
}) {
  const bedsLeft = room.capacity - room.occupied;

  return (
    <div className="room-card">
      <h3>Room {room.roomNo}</h3>

      <p>Block: {room.block}</p>

      <p>Type: {room.type}</p>

      <p>Rent: ₹{room.rentPerMonth} / month</p>

      <p>
        {bedsLeft === 0
          ? "Room Full"
          : `${bedsLeft} beds left`}
      </p>

      {room.isBooked && (
        <p>Booked by you</p>
      )}

      {!room.isBooked && bedsLeft === 0 && (
        <p className="danger">Room Full</p>
      )}

      {!room.isBooked &&
        bedsLeft > 0 &&
        bookedRoomId !== null && (
          <p className="danger">
            Already booked another room
          </p>
        )}

      {!room.isBooked &&
        bedsLeft > 0 &&
        bookedRoomId === null && (
          <button onClick={() => bookRoom(room.id)}>
            Book Room
          </button>
        )}

      {room.isBooked && (
        <button
          className="cancel-btn"
          onClick={() => cancelBooking(room.id)}
        >
          Cancel Booking
        </button>
      )}

      <Link
        to={`/rooms/${room.id}`}
        className="details-link"
      >
        View Details
      </Link>
    </div>
  );
}

export default RoomCard;