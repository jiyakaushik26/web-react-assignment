import RoomCard from "../components/RoomCard";

function MyBooking({
  rooms,
  bookedRoomId,
  cancelBooking,
}) {
  const bookedRoom = rooms.find(
    (room) => room.id === bookedRoomId
  );

  return (
    <div className="container">
      <h1>My Booking</h1>

      {bookedRoom ? (
        <>
          <p>
            Your monthly rent is ₹
            {bookedRoom.rentPerMonth}
          </p>

          <RoomCard
            room={bookedRoom}
            bookedRoomId={bookedRoomId}
            cancelBooking={cancelBooking}
          />
        </>
      ) : (
        <p>You have not booked any room.</p>
      )}
    </div>
  );
}

export default MyBooking;