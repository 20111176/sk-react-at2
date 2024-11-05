import CardProperties from './CardProperties';
import CardRegions from './CardRegions';
import CardArticles from './CardArticles';
import { Link } from 'react-router-dom';

const articlesData = [
  {
    date: 'July 30, 2014',
    comments: 2,
    tags: ['Properties, ', 'Prices, ', 'best deals'],
    title: 'How to get your dream property for the best price?',
    body: 'Sed rutrum urna id tellus euismod gravida. Praesent placerat, mauris ac pellentesque fringilla, tortor libero condimen.',
  },
  {
    date: 'July 24, 2014',
    comments: 4,
    tags: ['Tips, ', 'Mortgage'],
    title: '7 tips to get the best mortgage.',
    body: 'Sed rutrum urna id tellus euismod gravida. Praesent placerat, mauris ac pellentesque fringilla, tortor libero condimen.',
  },
  {
    date: 'July 05, 2014',
    comments: 1,
    tags: ['Location, ', 'Price, ', 'House'],
    title: "House, location or price: What's the most important factor?",
    body: 'Sed rutrum urna id tellus euismod gravida. Praesent placerat, mauris ac pellentesque fringilla, tortor libero condimen.',
  },
];

const MainContent = () => {
  return (
    <>
      {/* <!-- BEGIN MAIN CONTENT --> */}
      <div className='main col-sm-8'>
        <CardProperties />
        <CardRegions
          limit='6'
          title='POPULAR REGIONS'
          img='https://placehold.co/194x194'
        />
        <CardArticles title='Recent Articles' data={articlesData} />

        <div className='center'>
          <Link to='#' className='btn btn-default-color'>
            View All News
          </Link>
        </div>
      </div>
      {/* <!-- END MAIN CONTENT --> */}
    </>
  );
};

export default MainContent;
