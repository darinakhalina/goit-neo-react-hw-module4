import { ColorRing } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="color-ring-loading"
      wrapperStyle={{}}
      wrapperClass={css['loader']}
      colors={['#172daf', '#dbdef0', '#abb3e3', '#2f41a3', '#2f41a3']}
    />
  );
};

export default Loader;
