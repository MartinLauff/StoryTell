import axios from 'axios';
import { useState } from 'react';
import generalError from '../styles/Error.module.css';

const useRequest = ({ url, method, headers, body, onSuccess }) => {
  const [errors, setErrors] = useState(null);

  const doRequest = async (props = {}) => {
    try {
      setErrors(null);
      const response = await axios[method](
        url,
        { ...body, ...props },
        {
          headers,
        }
      );

      if (onSuccess) {
        onSuccess(response.data);
      }

      return response.data;
    } catch (err) {
      setErrors(
        <div className={generalError.errorBanner}>
          <h4>Ooops....</h4>
          <ul style={{ listStyle: 'none' }}>
            {err.response.data.errors.map((err) => (
              <li key={err.message}>{err.message}</li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return { doRequest, errors };
};

export default useRequest;
