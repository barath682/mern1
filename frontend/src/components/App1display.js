import { useEffect, useState } from "react";
import axios from "axios";

function App1display() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get( `${process.env.REACT_APP_API_URL}/users`)
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to fetch users");
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Users List</h1>

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading &&
        !error &&
        users.map((user) => (
          <div
            key={user._id}
            style={{
              border: "1px solid black",
              margin: "10px",
              padding: "10px",
            }}
          >
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </div>
        ))}
    </div>
  );
}

export default App1display;