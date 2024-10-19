// This is the Hero section, which includes sliding sections.

import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <>
      {/* <!-- BEGIN HOME SLIDER SECTION --> */}
      <div
        id='carousel-example-generic'
        className='carousel slide'
        data-ride='carousel'>
        {/* <!-- Wrapper for slides --> */}
        <div className='carousel-inner' role='listbox'>
          <div
            className='item active'
            id='slide1'
            style={{
              background:
                "url('http://placehold.it/1920x605') no-repeat left center",
              backgroundSize: 'cover',
            }}>
            {/* <!-- Ready for JS Injection --> */}
            <div className='carousel-caption'>
              <div className='caption sfr slider-title'>Breathtaking views</div>
              <div className='caption sfl slider-subtitle'>
                Relaxation in the Bay of Belfalas
              </div>
              <Link to='#' className='caption sfb btn btn-default btn-lg'>
                Learn More
              </Link>
            </div>
          </div>
          <div
            className='item'
            id='slide2'
            style={{
              background:
                "url('http://placehold.it/1920x605') no-repeat left center",
              backgroundSize: 'cover',
            }}>
            <div className='carousel-caption'>
              <div className='caption sfr slider-title'>The simple life</div>
              <div className='caption sfl slider-subtitle'>
                Lush gardens in Mordor
              </div>
              <Link to='#' className='caption sfb btn btn-default btn-lg'>
                Learn More
              </Link>
            </div>
          </div>
        </div>
        {/* <!-- Blue Filter --> */}
        <div id='home-search-section'></div>

        {/* <!-- Controls --> */}
        <Link
          className='left carousel-control'
          to='#carousel-example-generic'
          role='button'
          data-slide='prev'>
          <span className='glyphicon glyphicon-chevron-left'></span>
          <span className='sr-only'>Previous</span>
        </Link>
        <Link
          className='right carousel-control'
          to='#carousel-example-generic'
          role='button'
          data-slide='next'>
          <span className='glyphicon glyphicon-chevron-right'></span>
          <span className='sr-only'>Next</span>
        </Link>
        {/* <!-- END HOME SLIDER SECTION --> */}
      </div>
    </>
  );
};

export default Hero;
