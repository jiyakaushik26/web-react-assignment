import { useState } from "react";
import { Routes, Route } from "react-router";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import RoomDetails from "./pages/RoomDetails";
import MyBooking from "./pages/MyBooking";

import roomData from "./data/rooms";

function App() {
  const [rooms, setRooms] = useState(roomData);
  const [bookedRoomId, setBookedRoomId] = useState(null);

  function bookRoom(id) {
    if (bookedRoomId !== null) {
      return;
    }

    const selectedRoom = rooms.find(
      (room) => room.id === id
    );

    if (!selectedRoom || selectedRoom.occupied >= selectedRoom.capacity) {
      return;
    }

    const updatedRooms = rooms.map((room) => {
      if (room.id === id) {
        return {
          ...room,
          isBooked: true,
          occupied: room.occupied + 1,
        };
      }

      return room;
    });

    setRooms(updatedRooms);
    setBookedRoomId(id);
  }

  function cancelBooking(id) {
    const updatedRooms = rooms.map((room) => {
      if (room.id === id) {
        return {
          ...room,
          isBooked: false,
          occupied: room.occupied - 1,
        };
      }

      return room;
    });

    setRooms(updatedRooms);
    setBookedRoomId(null);
  }

  return (
    <>
      <Navbar bookedRoomId={bookedRoomId} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              rooms={rooms}
              bookedRoomId={bookedRoomId}
            />
          }
        />

        <Route
          path="/rooms"
          element={
            <Rooms
              rooms={rooms}
              bookedRoomId={bookedRoomId}
              bookRoom={bookRoom}
              cancelBooking={cancelBooking}
            />
          }
        />

        <Route
          path="/rooms/:id"
          element={
            <RoomDetails
              rooms={rooms}
              bookedRoomId={bookedRoomId}
              bookRoom={bookRoom}
              cancelBooking={cancelBooking}
            />
          }
        />

        <Route
          path="/my-booking"
          element={
            <MyBooking
              rooms={rooms}
              bookedRoomId={bookedRoomId}
              cancelBooking={cancelBooking}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;