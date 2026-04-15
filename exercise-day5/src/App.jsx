import React, { Suspense, use } from "react";

const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }
  return res.json();
};

const usersPromise = fetchUsers();

function Users() {
  const users = use(usersPromise);

  return (
    <div style={styles.grid}>
      {users.map((user) => (
        <div key={user.id} style={styles.card}>
          <div style={styles.avatar}>
            {user.name.charAt(0)}
          </div>

          <h2>{user.name}</h2>
          <p><b>Username:</b> {user.username}</p>
          <p><b>Email:</b> {user.email}</p>
          <p><b>Phone:</b> {user.phone}</p>
          <p><b>Company:</b> {user.company.name}</p>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div style={styles.container}>
      <h1>User Card Gallery</h1>

      <Suspense fallback={<h2>Loading users...</h2>}>
        <Users />
      </Suspense>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    fontFamily: "Arial",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },
  card: {
    padding: "15px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    background: "#ffffff",
  },
  avatar: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    background: "#4f46e5",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    margin: "0 auto 10px",
  },
};