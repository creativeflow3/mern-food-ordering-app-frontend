import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useRef } from 'react';
import { useCreateMyUser } from '../api/MyUserApi';

const AuthCallbackPage = () => {
  const { user } = useAuth0();
  const navigate = useNavigate();
  const { createUser } = useCreateMyUser();
  const hasCreatedUser = useRef(false); // force just one render

  useEffect(() => {
    if (user?.sub && user?.email && !hasCreatedUser.current) {
      createUser({ auth0Id: user.sub, email: user.email });
      hasCreatedUser.current = true;
    }
    navigate('/');
  }, [createUser, navigate, user]);

  return <>Loading...</>;
};

export default AuthCallbackPage;
