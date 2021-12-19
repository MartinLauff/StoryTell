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
      const {
        response: { data },
      } = err;
      if (!data.message) {
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
              {data.message.split(',').map((message) => (
                <li key={message}>{message.split(':').pop()}</li>
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
