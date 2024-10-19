/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
const CardProperty = ({
  title = 'No title',
  location = 'No location',
  img = 'http://placehold.it/760x670',
  price = 'No price',
}) => {
  return (
    <div className='item col-md-4'>
      <div className='image'>
        <Link to='#'>
          <h3>{title}</h3>
          <span className='location'>{location}</span>
        </Link>
        <img src={img} alt='' />
      </div>
      <div className='price'>
        <span>${price}</span>
        <p>per night</p>
      </div>
      <ul className='amenities'>
        <li>
          <i className='icon-bedrooms'></i> 4
        </li>
        <li>
          <i className='icon-bathrooms'></i> 3
        </li>
      </ul>
    </div>
  );
};

export default CardProperty;
