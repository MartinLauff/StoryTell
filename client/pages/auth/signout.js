import { useEffect, useContext } from 'react';
import Router from 'next/router';
import { GlobalContext } from '../../context/GlobalCtx';
import Cookies from 'js-cookie';
import useRequest from '../../hooks/use-request';

const signout = () => {
  const { setCurrentUser, currentUser } = useContext(GlobalContext);
  const { doRequest } = useRequest({
    url: 'http://localhost:8000/api/auth/signout',
    method: 'post',
    body: {},
    onSuccess: () => Router.push('/'),
  });

  useEffect(async () => {
    await doRequest();
    Cookies.remove('jwt');
    setCurrentUser(null);
  }, []);

  const style = {
    fontSize: '4rem',
    fontWeight: '700',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  return <div style={style}>Signing you out...</div>;
};
export default signout;
