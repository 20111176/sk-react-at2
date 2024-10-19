/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
const CardSidebarAbout = ({
  img = 'http://placehold.it/100x100',
  date = 'Available Now',
  detail = '',
  location = '',
}) => {
  return (
    <li className='col-md-12'>
      <div className='image'>
        <Link to='#'></Link>
        <img alt='' src={img} />
      </div>

      <ul className='top-info'>
        <li>
          <i className='fa fa-calendar'></i>
          {date}
        </li>
      </ul>

      <h4>
        <Link to='#'>{detail}</Link>
        <p>{location}</p>
      </h4>
    </li>
  );
};

export default CardSidebarAbout;
