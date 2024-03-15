import PropTypes from 'prop-types';

const Main = ({props}) => {
  return (
    <div className='max-w-7xl mx-auto flex md:flex-row flex-col justify-between items-center h-screen bg-blue-200'>
      <div className='w-2/3 flex justify-center items-center'>
        <h3 className='text-2xl font-bold'>Left Part</h3>
      </div>
      <div className='w-1/3 flex justify-center items-center'>
        <h3 className='text-2xl font-bold'>Right Part</h3>
      </div>
      
    </div>
  );
};

Main.propTypes = {
  props: PropTypes.any
};

export default Main;