import CardProperties from './CardProperties';
import CardRegions from './CardRegions';
import CardArticles from './CardArticles';
import { Link } from 'react-router-dom';

const MainContent = () => {
  return (
    <>
      {/* <!-- BEGIN MAIN CONTENT --> */}
      <div className='main col-sm-8'>
        <CardProperties />
        <CardRegions />
        <CardArticles />

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
