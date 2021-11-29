import { useEffect } from 'react';
import Router from 'next/router';
import Cookies from 'js-cookie';
import useRequest from '../../hooks/use-request';

const Signout = () => {
  const { doRequest } = useRequest({
    url: 'http://localhost:8000/api/auth/signout',
    method: 'post',
    body: {},
    onSuccess: () => Router.push('/'),
  });

  useEffect(async () => {
    await doRequest();
    Cookies.remove('jwt');
    localStorage.removeItem('likedPosts');
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
export default Signout;
