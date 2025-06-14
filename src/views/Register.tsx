import { useState } from 'react';
import { useNavigate } from 'react-router';
import { supabase } from '../api/supabaseClient';
import { ROUTE_LOGIN } from '../utils/routes';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          displayName: userName
        }
      }
    })

    if (error) {
      setError(error.message);
    } else {
      setError(null);
      navigate(ROUTE_LOGIN)
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Usuario"
        value={userName}
        onChange={e => setUserName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      {error && <p>{error}</p>}
      <button type="submit">
        Registrarse
      </button>
    </form>
  );
}
