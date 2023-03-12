import { useState, useContext, useEffect, useRef } from 'react';
import ArrowBar from '../../../components/bars/ArrowBar';
import { SocketContext } from '../../../context/SocketCtx';
import buildClient from '../../../api/build-client';
import chatStyles from '../../../styles/Chat.module.css';

const UserID = ({ data }) => {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);
  const messagesEndRef = useRef();
  const socket = useContext(SocketContext);

  useEffect(() => {
    socket.emit('connect-user', data.userId, data.user._id);
    socket.on('receive-message', (message) => {
      setList((oldState) => [...oldState, message]);
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    });
  }, [socket]);

  const submit = (e) => {
    e.preventDefault();
    if (text.length >= 1) {
      socket.emit('send-message', {
        senderID: data.userId,
        receiverID: data.user._id,
        text,
      });
      setText('');
    }
  };
  const renderedList = list.map((el, i) => (
    <div
      key={i}
      style={
        data.userId === el.senderID ? { flexFlow: 'column wrap-reverse' } : null
      }
      className={chatStyles.wrapper}
    >
      <p
        style={
          data.userId === el.senderID ? { backgroundColor: '#c5c5c5' } : null
        }
        className={chatStyles.message}
        key={i}
      >
        {el.text}
      </p>
    </div>
  ));
  return (
    <div>
      <ArrowBar image={data.user.photo} title={data.user.username} />
      <div className={chatStyles.wrap}>
        {renderedList}
        <div className={chatStyles.wrapperlastchild} ref={messagesEndRef}></div>
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
    },
  };
};

export default UserID;
