import axios from 'axios';
import { useState } from 'react';
import generalError from '../styles/Error.module.css';

const useRequest = ({ url, method, headers, body, onSuccess }) => {
  const [errors, setErrors] = useState(null);

  const doRequest = async () => {
    try {
      setErrors(null);
      const response = await axios({
        method,
        url,
        data: {
          ...body,
        },
        headers,
      });

      if (onSuccess) {
        onSuccess(response.data);
      }

      return response.data;
    } catch (err) {
      console.log(err.response);
      if (!err.response.data.message) {
        setErrors(
          <div
            onClick={() => setErrors(null)}
            className={generalError.errorBanner}
          >
            <h4>Ooops....</h4>
            <ul style={{ listStyle: 'none' }}>
              {err.response.data.errors.map((err) => (
                <li key={err.message}>{err.message}</li>
              ))}
            </ul>
          </div>
        );
      } else {
        setErrors(
          <div
            onClick={() => setErrors(null)}
            className={generalError.errorBanner}
          >
            <h4>Invalid parameters</h4>
            <ul style={{ listStyle: 'none' }}>
              {err.response.data.message.split(',').map((message) => (
                <li key={message}>
                  {message
                    .split(':')
                    .pop()
                    .replace('jwt malformed', 'You are not logged in!')}
                </li>
              ))}
            </ul>
          </div>
        );
      }
    }
  };
  return { doRequest, errors };
};

export default useRequest;
