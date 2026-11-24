# Hostel Room Booking System 🏠

A React-based Hostel Room Booking System developed as part of the Web Development assignment at **Mirai School of Technology**.

The application allows students to explore hostel rooms, check availability, view room details, and book or cancel a room using a simple and interactive interface.

## Student Details

- **Name:** Your Name
- **UID:** Your UID
- **Problem Statement:** P1 – Hostel Room Booking
- **College:** Mirai School of Technology

## Live Demo

🔗 **Vercel Deployment:** Add your deployed link here

## GitHub Repository

🔗 **Source Code:** Add your GitHub repository link here

## Features

- View all available hostel rooms.
- Search rooms using room numbers.
- Filter rooms by AC and Non-AC type.
- View room details, including block, floor, rent, and facilities.
- Check room capacity and occupied beds.
- Display available beds for each room.
- Book an available room.
- Cancel an existing booking.
- Restrict students to booking only one room at a time.
- Prevent booking when a room is full.
- View booking details on the My Booking page.
- Navigate between pages using React Router.

## Tech Stack

- **React** – Component-based user interface.
- **JavaScript** – Application logic.
- **React Router** – Page navigation and dynamic routing.
- **HTML5** – Application structure.
- **CSS3** – Styling and layout.
- **Vite** – Development environment and build tool.

## Project Structure

```text
hostel-room-booking/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── RoomCard.jsx
│   ├── data/
│   │   └── rooms.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Rooms.jsx
│   │   ├── RoomDetails.jsx
│   │   └── MyBooking.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vercel.json
└── README.md
```

## Application Routes

| Route | Description |
|---|---|
| `/` | Home page with hostel statistics |
| `/rooms` | Browse, search, and filter rooms |
| `/rooms/:id` | View details of a particular room |
| `/my-booking` | View or cancel the current booking |

## Room Dataset

The application uses the provided local `rooms.js` dataset.

Each room contains the following information:

- `id` – Unique room identifier
- `roomNo` – Room number
- `block` – Hostel block
- `floor` – Floor number
- `type` – AC or Non-AC
- `capacity` – Maximum room occupancy
- `occupied` – Number of currently occupied beds
- `rentPerMonth` – Monthly room rent
- `facilities` – List of room facilities
- `isBooked` – Booking status

The dataset is used directly without modifying its structure.

## Booking Logic

- A room can be booked only when beds are available.
- A student can book only one room at a time.
- Booking a room increases its occupied count by one.
- Cancelling a booking decreases its occupied count by one.
- Room availability and booking status update dynamically.

## Installation and Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project directory

```bash
cd hostel-room-booking
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal.

## Production Build

To build the project:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Concepts Practised

- Functional components and JSX
- React `useState`
- Controlled inputs
- Props and component communication
- JavaScript `map()`, `filter()`, and `find()`
- Conditional rendering
- React Router
- Dynamic routing using `useParams()`
- State management and event handling

## Acknowledgement

This project was created as part of the Web Development assignment at Mirai School of Technology, using the provided P1 – Hostel Room Booking problem statement and dataset.

---

**Built with React, JavaScript, and Vite.**
