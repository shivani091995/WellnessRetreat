# Wellness Retreat

## Description
**Wellness Retreat** is a **React web app** that helps users discover **yoga boot camps** and **wellness retreats** focused on **mental and physical well-being**.

## Features
- **Search & Filter**: Find retreats by title, tags, and year.
- **Pagination**: Browse retreats across multiple pages.
- **Responsive Design**: Works on all screen sizes.
- **Static Data**: Retreat data is fetched from `public/db.json`.

## Installation
1. **Clone the repository**:
   ```sh
   git clone https://github.com/shivani091995/WellnessRetreat.git
   ```
2. **Install dependencies**:
   ```sh
   npm install
   ```
3. **Start the development server**:
   ```sh
   npm start
   ```
   The app will run at **http://localhost:3000**.

## JSON Server (For Testing)
For local testing with a mock backend, use JSON Server:
1. **Install JSON Server**:
   ```sh
   npm install -g json-server
   ```
2. **Start the server**:
   ```sh
   json-server --watch db.json --port 3001
   ```
3. **API Endpoints**:
   - `GET /retreats` (All retreats)
   - `GET /retreats/:id` (Single retreat)
   - `POST /retreats` (Add a retreat)
   - `PUT /retreats/:id` (Update a retreat)
   - `DELETE /retreats/:id` (Remove a retreat)

## Tech Stack
- **React** (Frontend)
- **CSS** (Styling)
- **Axios** (API requests)
- **JSON Server** (Mock backend for testing)

