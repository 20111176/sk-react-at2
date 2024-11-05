/**
 * This is RegionsPage that just serves as a page link purpose, not implementing card components.
 * It contains regions in Australia (Sydney, Melbourne, Brisbane, Perth, Adelaide, and Hobart).
 * Each cloud has an image placeholder for layout purposes.
 */

import CardRegions from '../components/ContentWrapper/CardRegions';
const RegionsPage = () => {
  return (
    <div className='main col-sm-12'>
      <div className='grid-style1 clearfix'>
        <CardRegions
          title='REGIONS IN AUSTRALIA'
          img='https://placehold.co/400x400'
        />
      </div>
    </div>
  );
};

export default RegionsPage;
