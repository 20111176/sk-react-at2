/**
 * This is RegionsPage that just serves as a page link purpose, not implementing card components.
 * It contains regions in Australia (Sydney, Melbourne, Brisbane, Perth, Adelaide, and Hobart).
 * Each cloud has an image placeholder for layout purposes.
 */

import { Link } from 'react-router-dom';
const RegionsPage = () => {
  return (
    <div className='main col-sm-12'>
      <h1 className='section-title'>Regions in Australia</h1>
      <div className='grid-style1 clearfix'>
        <div className='item col-md-4'>
          <div className='image'>
            <Link to='#'>
              <h3>Sydney</h3>
              <span className='location'>New South Wales</span>
            </Link>
            <img src='http://placehold.it/760x670' alt='' />
          </div>
        </div>
        <div className='item col-md-4'>
          <div className='image'>
            <Link to='#'>
              <h3>Melbourne</h3>
              <span className='location'>Victoria</span>
            </Link>
            <img src='http://placehold.it/760x670' alt='' />
          </div>
        </div>
        <div className='item col-md-4'>
          <div className='image'>
            <Link to='#'>
              <h3>Brisbane</h3>
              <span className='location'>Queensland</span>
            </Link>
            <img src='http://placehold.it/760x670' alt='' />
          </div>
        </div>
        <div className='item col-md-4'>
          <div className='image'>
            <Link to='#'>
              <h3>Perth</h3>
              <span className='location'>Western Australia</span>
            </Link>
            <img src='http://placehold.it/760x670' alt='' />
          </div>
        </div>
        <div className='item col-md-4'>
          <div className='image'>
            <Link to='#'>
              <h3>Adelaide</h3>
              <span className='location'>South Australia</span>
            </Link>
            <img src='http://placehold.it/760x670' alt='' />
          </div>
        </div>
        <div className='item col-md-4'>
          <div className='image'>
            <Link to='#'>
              <h3>Hobart</h3>
              <span className='location'>Tasmania</span>
            </Link>
            <img src='http://placehold.it/760x670' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionsPage;
