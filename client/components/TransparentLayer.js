const TransparentLayer = ({ state, setState }) => {
  const style = {
    position: 'fixed',
    zIndex: '9',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  };
  return (
    <div onClick={() => setState(false)} style={state ? style : null}></div>
  );
};

export default TransparentLayer;
