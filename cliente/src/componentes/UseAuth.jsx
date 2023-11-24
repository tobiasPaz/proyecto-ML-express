import { useState, useEffect, createContext } from "react";
const AuthContext = createContext();

function useAuth() {
  const [logeado, setLogeado] = useState({
    logeado: false,
    usuario: {},
  });

  const [cargando, setCargando] = useState(true);

  async function fetchLogeado() {
    const res = await fetch("http://localhost:4000/usuarios/usuario-logeado", {
      credentials: "include",
    });
    const data = await res.json();
    setLogeado(data);
    setCargando(false);
  }

  useEffect(() => {
    fetchLogeado();
  }, []);

  return {
    logeado,
    cargando,
    setLogeado,
  };
}

export default useAuth;
