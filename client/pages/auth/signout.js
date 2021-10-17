import { useEffect } from 'react';
import Router from 'next/router';
import Cookies from 'js-cookie';
import useRequest from '../../hooks/use-request';

const signout = () => {
  const { doRequest } = useRequest({
    url: 'http://localhost:8000/api/auth/signout',
    method: 'post',
    body: {},
    onSuccess: () => Router.push('/'),
  });

  useEffect(async () => {
    await doRequest();
    Cookies.remove('jwt');
  }, []);

  return <div>Signing you out...</div>;
};
export default signout;
