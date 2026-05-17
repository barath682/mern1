// import { useEffect, useState } from "react";
// import axios from "axios";

// function App1display() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     axios
//       .get( `${process.env.REACT_APP_API_URL}/users`)
//       .then((res) => {
//         setUsers(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.log(err);
//         setError("Failed to fetch users");
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Users List</h1>

//       {loading && <p>Loading...</p>}

//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {!loading &&
//         !error &&
//         users.map((user) => (
//           <div
//             key={user._id}
//             style={{
//               border: "1px solid black",
//               margin: "10px",
//               padding: "10px",
//             }}
//           >
//             <p>Name: {user.name}</p>
//             <p>Email: {user.email}</p>
//           </div>
//         ))}
//     </div>
//   );
// }

// export default App1display;

// import { useState } from "react";
// import axios from "axios";

// function App1display() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const fetchUsers = async () => {
//     setLoading(true);
//     setError("");

//     try {
//       const res = await axios.get(
//         `${process.env.REACT_APP_API_URL}/users`
//       );
//       setUsers(res.data);
//     } catch (err) {
//       console.log(err);
//       setError("Failed to fetch users");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Users List</h1>

//       {/* Button */}
//       <button onClick={fetchUsers} style={{ padding: "10px", marginBottom: "10px" }}>
//         Show Users
//       </button>

//       {/* Loading */}
//       {loading && <p>Loading...</p>}

//       {/* Error */}
//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {/* Users Display */}
//       {users.map((user) => (
//         <div
//           key={user._id}
//           style={{
//             border: "1px solid black",
//             margin: "10px",
//             padding: "10px",
//           }}
//         >
//           <p>Name: {user.name}</p>
//           <p>Email: {user.email}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App1display;

import { useState } from "react";
import axios from "axios";

function App1display() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/users`
      );
      setUsers(res.data);
    } catch (err) {
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  // DELETE
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/delete/${id}`
      );

      setUsers(users.filter((u) => u._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  // UPDATE
  const handleUpdate = async (id) => {
    const name = prompt("Enter new name");
    const email = prompt("Enter new email");

    try {
      const res = await axios.put(
        `${process.env.REACT_APP_API_URL}/update/${id}`,
        { name, email }
      );

      setUsers(
        users.map((u) => (u._id === id ? res.data : u))
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Users List</h1>

      <button onClick={fetchUsers}>Show Users</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {users.map((user) => (
        <div key={user._id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>

          <button onClick={() => handleUpdate(user._id)}>
            Update
          </button>

          <button
            onClick={() => handleDelete(user._id)}
            style={{ marginLeft: "10px", color: "red" }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App1display;