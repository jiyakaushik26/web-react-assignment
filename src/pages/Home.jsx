function Home({ rooms, bookedRoomId }) {
  const totalRooms = rooms.length;

  const availableRooms = rooms.filter(
    (room) => room.occupied < room.capacity
  ).length;

  const bookedRoom = rooms.find(
    (room) => room.id === bookedRoomId
  );

  return (
    <div className="container">
      <h1>Hostel Room Booking</h1>

      <p>Find and book your hostel room easily.</p>

      <div className="summary">
        <div className="summary-card">
          <h2>{totalRooms}</h2>
          <p>Total Rooms</p>
        </div>

        <div className="summary-card">
          <h2>{availableRooms}</h2>
          <p>Rooms with Beds Left</p>
        </div>

        <div className="summary-card">
          <h2>
            {bookedRoom
              ? bookedRoom.roomNo
              : "No booking yet"}
          </h2>

          <p>Your Booking</p>
        </div>
      </div>
    </div>
  );
}

export default Home;