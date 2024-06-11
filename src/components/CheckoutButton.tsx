import { useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import { Button } from './ui/button';
import LoadingButton from './LoadingButton';

const CheckoutButton = () => {
  const {
    isAuthenticated,
    isLoading: isAuthLoading,
    loginWithRedirect,
  } = useAuth0();

  const { pathname } = useLocation();

  const onLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnto: pathname,
      },
    });
  };

  if (!isAuthenticated) {
    return (
      <Button onClick={onLogin} className="bg-orange-500 flex1">
        Log in to check out
      </Button>
    );
  }

  if (isAuthLoading) {
    return <LoadingButton />;
  }
};

export default CheckoutButton;
