import { Circles } from 'react-loader-spinner';
const Loader = () => {
  return (
    <Circles
      height="80"
      width="80"
      color="#2131e1"
      ariaLabel="circles-loading"
      wrapperStyle={{ justifyContent: 'center' }}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loader;
