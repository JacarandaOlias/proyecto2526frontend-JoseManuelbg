import { useState, useEffect } from "react";
import {jwtDecode} from "jwt-decode";

interface UserPayload {
  sub: string;
  email: string;
  roles: string[];
  iat?: number;
  exp?: number;
}

export default function Home() {
  const [user, setUser] = useState<UserPayload | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const pureToken = token.startsWith("Bearer ") ? token.slice(7) : token;
      const decoded: UserPayload = jwtDecode(pureToken);
      setUser(decoded);
    }
  }, []);

  if (!user) return <p>No hay usuario logueado</p>;

  return (
    <div>
      <h1>Bienvenido {user.email}</h1> {/* aquí no hay name, usamos email */}
      <p>Email: {user.email}</p>
      <p>Roles: {user.roles.join(", ")}</p>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
