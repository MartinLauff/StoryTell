import Link from 'next/link';
import { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalCtx';
import BarStyles from '../../styles/Bar.module.css';

const SideBar = () => {
  const [toggle, setToggle] = useState(false);
  const { sidebar, setSidebar, setRotateDots } = useContext(GlobalContext);
  const scrollStyle = `html::-webkit-scrollbar{width:1.6rem}html::-webkit-scrollbar-track{background:#fff;border-radius:100vw}html::-webkit-scrollbar-thumb{background:#545454;border:.4em solid #fff;border-radius:100vw;transition:all .3s}html::-webkit-scrollbar-thumb:hover{background:#6d6d6d}`;
  const close = () => {
    setSidebar(false);
    setRotateDots(false);
  };

  return (
    <div
      className={`${BarStyles.sidebar} ${
        sidebar ? BarStyles.open : BarStyles.close
      }`}
    >
      <style style={{ display: 'none' }}>
        {sidebar ? `body {overflow: hidden;}` : scrollStyle}
      </style>
      <h3>Storytell</h3>
      <Link href='/posts'>
        <a onClick={close}>
          <svg
            width='21'
            height='19'
            viewBox='0 0 21 19'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M20.4153 10.4558H18.4925V17.3558C18.4925 17.8675 18.2694 18.5058 17.3425 18.5058H12.7425V11.6058H8.14249V18.5058H3.54249C2.61559 18.5058 2.39249 17.8675 2.39249 17.3558V10.4558H0.469692C-0.218008 10.4558 -0.0708078 10.0832 0.400692 9.5956L9.62829 0.3588C9.85254 0.1265 10.1469 0.0115 10.4425 0C10.738 0.0115 11.0324 0.12535 11.2567 0.3588L20.4831 9.59445C20.9558 10.0832 21.103 10.4558 20.4153 10.4558Z'
              fill='black'
            />
          </svg>
          <span>Home</span>
        </a>
      </Link>
      <Link href='/premium'>
        <a onClick={close}>
          <svg
            width='22'
            height='18'
            viewBox='0 0 22 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M18.15 15.4H3.85C3.5475 15.4 3.3 15.6475 3.3 15.95V17.05C3.3 17.3525 3.5475 17.6 3.85 17.6H18.15C18.4525 17.6 18.7 17.3525 18.7 17.05V15.95C18.7 15.6475 18.4525 15.4 18.15 15.4ZM20.35 4.4C19.4391 4.4 18.7 5.13906 18.7 6.05C18.7 6.29406 18.755 6.52094 18.8513 6.73063L16.3625 8.2225C15.8331 8.53875 15.1491 8.36 14.8431 7.82375L12.0416 2.92188C12.4094 2.61937 12.65 2.16563 12.65 1.65C12.65 0.739063 11.9109 0 11 0C10.0891 0 9.35 0.739063 9.35 1.65C9.35 2.16563 9.59063 2.61937 9.95844 2.92188L7.15688 7.82375C6.85094 8.36 6.16344 8.53875 5.6375 8.2225L3.15219 6.73063C3.245 6.52438 3.30344 6.29406 3.30344 6.05C3.30344 5.13906 2.56438 4.4 1.65344 4.4C0.7425 4.4 0 5.13906 0 6.05C0 6.96094 0.739063 7.7 1.65 7.7C1.73938 7.7 1.82875 7.68625 1.91469 7.6725L4.4 14.3H17.6L20.0853 7.6725C20.1712 7.68625 20.2606 7.7 20.35 7.7C21.2609 7.7 22 6.96094 22 6.05C22 5.13906 21.2609 4.4 20.35 4.4Z'
              fill='black'
            />
          </svg>
          <span>Get Storytell Pro</span>
        </a>
      </Link>
      <Link href={{ pathname: '/posts/create-post', query: { q: 'feedback' } }}>
        <a onClick={close}>
          <svg
            width='19'
            height='19'
            viewBox='0 0 19 19'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M16.5 0.75H2.5C1.5375 0.75 0.75875 1.5375 0.75875 2.5L0.75 18.25L4.25 14.75H16.5C17.4625 14.75 18.25 13.9625 18.25 13V2.5C18.25 1.5375 17.4625 0.75 16.5 0.75ZM10.375 11.25H8.625V9.5H10.375V11.25ZM10.375 7.75H8.625V4.25H10.375V7.75Z'
              fill='black'
            />
          </svg>
          <span>Send feedback</span>
        </a>
      </Link>
      <div>
        <svg
          width='18'
          height='18'
          viewBox='0 0 18 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M9 0C7.21997 0 5.47991 0.527841 3.99987 1.51677C2.51983 2.50571 1.36628 3.91131 0.685088 5.55585C0.00389951 7.20038 -0.17433 9.00998 0.172937 10.7558C0.520203 12.5016 1.37737 14.1053 2.63604 15.364C3.89472 16.6226 5.49836 17.4798 7.24419 17.8271C8.99002 18.1743 10.7996 17.9961 12.4442 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722 12.5201 18 10.78 18 9C18 8.54 17.96 8.08 17.9 7.64C17.4003 8.34066 16.7401 8.91146 15.9746 9.30465C15.2091 9.69784 14.3606 9.90198 13.5 9.9C12.3552 9.90003 11.24 9.53643 10.3152 8.86166C9.39041 8.18688 8.70385 7.23581 8.35454 6.14561C8.00523 5.05541 8.01123 3.88243 8.37167 2.79586C8.73211 1.70928 9.42836 0.765281 10.36 0.0999999C9.92 0.0399999 9.46 0 9 0Z'
            fill='black'
          />
        </svg>
        <span>Dark mode</span>
        <div
          onClick={() => setToggle((oldState) => !oldState)}
          className={BarStyles.toggle}
        >
          <div className={toggle ? BarStyles.dark : BarStyles.white}></div>
        </div>
      </div>
      <Link href='/auth/signout'>
        <a onClick={close}>
          <svg
            width='18'
            height='18'
            viewBox='0 0 18 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M3 0C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V15C0 15.7956 0.316071 16.5587 0.87868 17.1213C1.44129 17.6839 2.20435 18 3 18H8C8.26522 18 8.51957 17.8946 8.70711 17.7071C8.89464 17.5196 9 17.2652 9 17C9 16.7348 8.89464 16.4804 8.70711 16.2929C8.51957 16.1054 8.26522 16 8 16H3C2.73478 16 2.48043 15.8946 2.29289 15.7071C2.10536 15.5196 2 15.2652 2 15V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H8C8.26522 2 8.51957 1.89464 8.70711 1.70711C8.89464 1.51957 9 1.26522 9 1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0H3Z'
              fill='#FF4040'
            />
            <path
              d='M12.293 4.29303C12.4805 4.10556 12.7348 4.00024 13 4.00024C13.2652 4.00024 13.5195 4.10556 13.707 4.29303L17.707 8.29303C17.8945 8.48056 17.9998 8.73487 17.9998 9.00003C17.9998 9.26519 17.8945 9.5195 17.707 9.70703L13.707 13.707C13.5184 13.8892 13.2658 13.99 13.0036 13.9877C12.7414 13.9854 12.4906 13.8803 12.3052 13.6948C12.1198 13.5094 12.0146 13.2586 12.0123 12.9964C12.01 12.7342 12.1108 12.4816 12.293 12.293L14.586 10H7C6.73478 10 6.48043 9.89467 6.29289 9.70714C6.10536 9.5196 6 9.26525 6 9.00003C6 8.73481 6.10536 8.48046 6.29289 8.29292C6.48043 8.10539 6.73478 8.00003 7 8.00003H14.586L12.293 5.70703C12.1055 5.5195 12.0002 5.26519 12.0002 5.00003C12.0002 4.73487 12.1055 4.48056 12.293 4.29303Z'
              fill='#FF4040'
            />
          </svg>
          <span style={{ color: '#FF4040' }}>Log out</span>
        </a>
      </Link>
      <h3>Popular topics</h3>
      <Link href='/topics/[topicSlug]' as={'/topics/fitness'}>
        <a onClick={close}>
          <img src='/fitness.jpg' alt='fitness' />
          <span>s/Fitness</span>
        </a>
      </Link>
      <Link href='/topics/[topicSlug]' as={'/topics/startups'}>
        <a onClick={close}>
          <img src='/startups.jpg' alt='startups' />
          <span>s/Startups</span>
        </a>
      </Link>
      <Link href='/topics/[topicSlug]' as={'/topics/language'}>
        <a onClick={close}>
          <img src='/language.jpg' alt='language' />
          <span>s/Language</span>
        </a>
      </Link>
      <Link href='/topics/[topicSlug]' as={'/topics/school'}>
        <a onClick={close}>
          <img src='/school.jpg' alt='school' />
          <span>s/School</span>
        </a>
      </Link>
      <Link href='/topics/[topicSlug]' as={'/topics/traveling'}>
        <a onClick={close}>
          <img src='/traveling.jpg' alt='traveling' />
          <span>s/Traveling</span>
        </a>
      </Link>
    </div>
  );
};
export default SideBar;
