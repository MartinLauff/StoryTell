import { useState } from 'react';
import buildClient from '../../../api/build-client';
import chatStyles from '../../../styles/Chat.module.css';
import ArrowBar from '../../../components/bars/ArrowBar';

const UserID = ({ data }) => {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    if (text.length >= 1) {
      setList((oldState) => [...oldState, text]);
      setText('');
    }
  };
  const renderedList = list.map((el, i) => (
    <p className={chatStyles.message} key={i}>
      {el}
    </p>
  ));
  return (
    <div>
      <ArrowBar image={data.user.photo} title={data.user.username} />
      <div className={chatStyles.wrap}>
        <div className={chatStyles.wrapper}>{renderedList}</div>
      </div>
      <div className={chatStyles.formWrap}>
        <form onSubmit={submit} className={chatStyles.chatForm}>
          <input
            className={chatStyles.input}
            maxLength='22'
            onChange={(e) => setText(e.target.value)}
            value={text}
            type='text'
            placeholder='Message...'
          />
          <button
            onClick={submit}
            disabled={text.length >= 1 ? false : true}
            className={`${chatStyles.submit} ${
              text.length >= 1 ? chatStyles.sendON : null
            }`}
            type='submit'
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
export const getServerSideProps = async (ctx) => {
  const { userID } = ctx.query;
  const client = buildClient(ctx);
  const { data } = await client.get(`/api/users/${userID}`);

  return {
    props: {
      data,
      userID,
    },
  };
};

export default UserID;
