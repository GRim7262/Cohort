## Todo-app

### Tech Stack
- **Frontend:** React
- **Backend:** Express
- **Database:** MongoDB

### Features
- Anyone can create a todo
- Anyone can see existing todos
- Anyone can mark a todo as done
- CRUD operations for todos
- API integration with Express backend

### Setup Instructions

#### Prerequisites
- Node.js installed
- MongoDB installed and running

#### Backend Setup
1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the backend server:
   ```sh
   npm start
   ```

#### Frontend Setup
1. Navigate to the frontend folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend server:
   ```sh
   npm start
   ```

### API Endpoints
| Method | Endpoint       | Description          |
|--------|---------------|----------------------|
| GET    | /todos        | Get all todos       |
| POST   | /todos        | Create a new todo   |
| PUT    | /todos/:id    | Update a todo       |
| DELETE | /todos/:id    | Delete a todo       |

### Folder Structure
```
/todo-app
 ├── /backend
 │   ├── /models
 │   ├── /routes
 │   ├── server.js
 │   └── ...
 ├── /frontend
 │   ├── /src
 │   │   ├── /components
 │   │   ├── App.js
 │   │   └── ...
 ├── package.json
 └── README.md
```
