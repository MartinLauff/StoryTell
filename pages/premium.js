import TopBar from '../components/bars/TopBar';
import SideBar from '../components/bars/SideBar';
import BottomBar from '../components/bars/BottomBar';
import Layer from '../components/bars/Layer';

const Premium = () => {
  const style = {
    position: 'absolute',
    top: '50%',
    bottom: '0%',
    left: '50%',
    right: '0',
    transform: 'translate(-50%,-50%)',
    color: '#000',
    textAlign: 'center',
  };
  return (
    <div>
      <TopBar />
      <SideBar />
      <Layer />
      <h1 style={style}>Coming soon...</h1>
      <BottomBar />
    </div>
  );
};

export default Premium;
