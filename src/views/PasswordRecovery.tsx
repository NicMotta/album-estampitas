import { useState } from 'react';
import { useNavigate } from 'react-router';
import { supabase } from '../api/supabaseClient';
import { ROUTE_LOGIN } from '../utils/routes';

export default function PasswordRecovery() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.resetPasswordForEmail(email)

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
      {error && <p>{error}</p>}
      <button type="submit">
        Recuperar contraseña
      </button>
    </form>
  );
}
