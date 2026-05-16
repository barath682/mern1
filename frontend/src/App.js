import { useState } from "react";
import axios from "axios";

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/register`,
        {
          name,
          email
        }
      );

      alert(response.data.message);

      setName("");
      setEmail("");

    } catch (error) {
      console.log(error);
      alert("Error sending data");
    }
  };

  return (
    <div>
      <h1>Register Form</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Submit
        </button>

      </form>
    </div>
  );
}

export default App;