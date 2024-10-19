/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
const CardSidebarActivity = ({
  request = 'Not yet reviewed',
  title = 'No title',
  comment = 'No comment',
  date = 'Just now',
}) => {
  return (
    <li className='col-lg-12'>
      <Link to='#'>
        <img src='http://placehold.it/70x70' alt='' />
      </Link>
      <div className='info'>
        <h5>
          {request}
          <Link to='#'>{title}</Link>
        </h5>
        <p>{comment}</p>
        <h6>{date}</h6>
      </div>
    </li>
  );
};

export default CardSidebarActivity;
