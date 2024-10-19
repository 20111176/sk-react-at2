/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
const CardRegion = ({ img = 'http://placehold.it/194x194', region }) => {
  return (
    <div className='item'>
      <Link to='#'>
        <img src={img} alt='' />
        <h3>{region}</h3>
      </Link>
    </div>
  );
};

export default CardRegion;
