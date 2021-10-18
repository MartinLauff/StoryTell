import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalCtx';
import BarStyles from '../../styles/Bar.module.css';

const Layer = () => {
  const { sidebar, setSidebar, setRotateDots } = useContext(GlobalContext);
  const layerOff = () => {
    setSidebar(false);
    setRotateDots(false);
  };

  return (
    <>
      <div
        onClick={layerOff}
        className={`${sidebar ? BarStyles.layer : BarStyles.hide}`}
      ></div>
    </>
  );
};

export default Layer;
