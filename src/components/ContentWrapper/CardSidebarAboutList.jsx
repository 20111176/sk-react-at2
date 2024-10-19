import CardSidebarAbout from './CardSidebarAbout';
import { Link } from 'react-router-dom';

const aboutData = [
  {
    date: 'Available Now',
    detail: 'Private Beach',
    location: 'Lossarnach, Eriado',
  },
  {
    date: 'Available on 24 July',
    detail: 'Mountain views',
    location: 'Hyarnustar, Rhovanion',
  },
  {
    date: 'Available 5 July',
    detail: 'Heart of the village',
    location: 'Minhiriath, Eriador',
  },
  {
    date: 'Available 6 July',
    detail: 'The city life',
    location: 'West Beleriand, Mordor',
  },
];

const CardSidebarAboutList = () => {
  return (
    <>
      {/* <!-- BEGIN SIDEBAR ABOUT --> */}
      <div className='col-sm-12'>
        <h2 className='section-title'>Last minute deals</h2>
        <ul className='latest-news'>
          {aboutData.map((About, index) => (
            <CardSidebarAbout key={index} {...About} />
          ))}
        </ul>
        <p className='center'>
          <Link className='btn btn-fullcolor' to='#'>
            More deals
          </Link>
        </p>
      </div>
      {/* <!-- END SIDEBAR ABOUT --> */}
    </>
  );
};

export default CardSidebarAboutList;
