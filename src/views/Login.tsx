import { useState } from 'react';
import { useNavigate } from 'react-router';
import { supabase } from '../api/supabaseClient';
import { $user } from '../utils/store';
import { ROUTE_HOME, ROUTE_REGISTER, ROUTE_PASSWORD_RECOVERY } from '../utils/routes';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) {
      setError(error.message);
    } else {
      setError(null);
      $user.set({ email: data.user.email, id: data.user.id })
      navigate(ROUTE_HOME)
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h1>Iniciar sesión</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      {error && <p >{error}</p>}
      <button type="submit" >
        Ingresar
      </button>

      <button
        type="button"
        onClick={() => {
          navigate(ROUTE_REGISTER)
        }}
      >
        Registrarse
      </button>
        <button
        type="button"
        onClick={() => {
          navigate(ROUTE_PASSWORD_RECOVERY)
        }}
      >
        Recuperar contraseña
      </button>
    </form>
  );
}
