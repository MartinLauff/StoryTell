import buildClient from '../../api/build-client';
import ArrowBar from '../../components/bars/ArrowBar';
import BottomBar from '../../components/bars/BottomBar';
import ActivityList from '../../components/lists/ActivityList';
import activityStyles from '../../styles/Activity.module.css';

const Notifications = ({ data }) => {
  return (
    <div>
      <ArrowBar title='Notifications' />
      <div className={activityStyles.mainTitle}>
        <svg
          width='15'
          height='23'
          viewBox='0 0 15 23'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M11.933 0.0941074C12.0665 0.172123 12.1698 0.293469 12.226 0.438322C12.2822 0.583174 12.288 0.742971 12.2426 0.891607L9.78673 8.93811H14.3179C14.4511 8.93805 14.5814 8.97732 14.6926 9.05106C14.8039 9.12481 14.8914 9.2298 14.9441 9.35307C14.9969 9.47635 15.0128 9.61251 14.9897 9.74475C14.9666 9.877 14.9056 9.99953 14.8143 10.0972L3.90558 21.7847C3.80003 21.8979 3.65958 21.9717 3.50711 21.9941C3.35464 22.0165 3.19915 21.9861 3.06598 21.908C2.93282 21.8298 2.82982 21.7085 2.7738 21.5638C2.71777 21.419 2.712 21.2594 2.75744 21.111L5.21326 13.0631H0.682065C0.548904 13.0632 0.418642 13.0239 0.30736 12.9501C0.196077 12.8764 0.108646 12.7714 0.0558587 12.6481C0.00307159 12.5249 -0.0127604 12.3887 0.0103171 12.2565C0.0333946 12.1242 0.0943711 12.0017 0.18572 11.904L11.0944 0.216482C11.1998 0.103456 11.3401 0.0297142 11.4923 0.00724665C11.6446 -0.0152209 11.7999 0.0149072 11.933 0.0927324V0.0941074ZM2.25974 11.6881H6.13641C6.24311 11.6881 6.34832 11.7133 6.44359 11.7618C6.53885 11.8102 6.62151 11.8805 6.68492 11.9671C6.74832 12.0536 6.79069 12.154 6.80863 12.26C6.82657 12.3661 6.81958 12.4749 6.78821 12.5777L4.92282 18.6869L12.7389 10.3131H8.86359C8.75689 10.3131 8.65167 10.2879 8.55641 10.2394C8.46114 10.191 8.37848 10.1207 8.31508 10.0341C8.25168 9.94759 8.20931 9.84726 8.19137 9.7412C8.17343 9.63514 8.18042 9.52632 8.21179 9.42348L10.0772 3.31436L2.25974 11.6881Z'
            fill='black'
          />
        </svg>
        <h2>All activity</h2>
      </div>
      <ActivityList activities={data.data} />
      <style style={{ display: 'none' }}>
        {`html::-webkit-scrollbar{width:1.6rem}html::-webkit-scrollbar-track{background:#fff;border-radius:100vw}html::-webkit-scrollbar-thumb{background:#545454;border:.4em solid #fff;border-radius:100vw;transition:all .3s}html::-webkit-scrollbar-thumb:hover{background:#6d6d6d}`}
      </style>
      <BottomBar />
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const client = buildClient(ctx);
  const { data } = await client.get('/api/users/activities/');

  return {
    props: {
      data,
    },
  };
};

export default Notifications;
