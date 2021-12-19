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
      setErrors(
        <div
          onClick={() => setErrors(null)}
          className={generalError.errorBanner}
        >
          <h4>Invalid parameters</h4>
          <ul style={{ listStyle: 'none' }}>
            {data.message.split(',').map((message) => (
              <li key={message}>
                {message.replace('Validation failed:', '').split(':')[1]}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return { doRequest, errors };
};

export default useRequest;
