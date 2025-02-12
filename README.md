# Wellness Retreat

## Description

The **Wellness Retreat** application is a **React-based web app** designed to help users discover and explore **yoga boot camps** and wellness retreats. These courses focus on **mental and physical well-being**, including:

- **Mental Wellness**
- **Chronic Pain Management**
- **Stress Relief Camps**
- **Weight Loss Courses**
- **Pre/Post Natal Yoga & Detox Retreats**
- **Spiritual Growth** and many more!

The app features **search and filter functionalities**, along with **pagination** for browsing retreats. A **card-based layout** presents retreat details such as **location, date, price**, and more.

## Features

1. **Search**: Find retreats by title.
2. **Filter**: Filter retreats by tags and year.
3. **Pagination**: Navigate through multiple retreat pages.
4. **Responsive Design**: Optimized for various screen sizes.

## Installation

To run this project locally, follow these steps:

### 1. Clone the Repository

```sh
git clone https://github.com/your-username/wellness-retreats.git
```

### 2. Navigate to the Project Directory

```sh
cd wellness-retreats
```

### 3. Install Dependencies

```sh
npm install
```

### 4. Run the Development Server

```sh
npm start
```

The app will be available at **[http://localhost:3000](http://localhost:3000)**.

---

## API Integration

The app fetches **retreat data** from a **local JSON Server** to simulate backend behavior. In this case, db.json file serves this purpose.

### 1. Install JSON Server (if not installed)

```sh
npm install -g json-server
```



### 3. Start JSON Server

Run the following command to start the server:

```sh
json-server --watch db.json --port 3001
```

The API will be available at:

```
http://localhost:3001/retreats
```

---

## API Endpoints

- **Get all retreats:**
  ```
  GET /retreats
  ```
- **Get a specific retreat:**
  ```
  GET /retreats/:id
  ```
- **Add a new retreat:**
  ```
  POST /retreats
  ```
- **Update a retreat:**
  ```
  PUT /retreats/:id
  ```
- **Delete a retreat:**
  ```
  DELETE /retreats/:id
  ```

---

## Usage

- **Search**: Enter text in the search bar to find retreats by title.
- **Filter**: Use the dropdown menus to filter by tag and year.
- **Pagination**: Use the **Previous** and **Next** buttons to navigate through pages.
- **Real Images**: The app uses **Unsplash API** for real images. Update the `image` field in `db.json` for custom images.

---

## Tech Stack

- **React** (Frontend framework)
- **HTML & CSS** (Styling)
- **Axios** (API requests)
- **JavaScript** (Core functionality)
- **JSON Server** (Mock backend for API testing)

---

## Notes

- Restart the JSON Server after modifying `db.json`.
- Use **Postman** or **cURL** to test API requests.

---

