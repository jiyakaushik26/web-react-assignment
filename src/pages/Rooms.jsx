import { useState } from "react";
import RoomCard from "../components/RoomCard";

function Rooms({
  rooms,
  bookedRoomId,
  bookRoom,
  cancelBooking,
}) {
  const [search, setSearch] = useState("");
  const [roomType, setRoomType] = useState("All");

  const filteredRooms = rooms.filter((room) => {
    const matchesSearch = room.roomNo
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesType =
      roomType === "All" || room.type === roomType;

    return matchesSearch && matchesType;
  });

  return (
    <div className="container">
      <h1>All Hostel Rooms</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Search room number..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
        >
          <option value="All">All Rooms</option>
          <option value="AC">AC</option>
          <option value="Non-AC">Non-AC</option>
        </select>
      </div>

      <div className="room-list">
        {filteredRooms.length > 0 ? (
          filteredRooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              bookedRoomId={bookedRoomId}
              bookRoom={bookRoom}
              cancelBooking={cancelBooking}
            />
          ))
        ) : (
          <p>No rooms found.</p>
        )}
      </div>
    </div>
  );
}

export default Rooms;