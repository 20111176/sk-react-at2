// This is the footer section, which will be used across all pages to be added at the end.
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
const Footer = () => {
  return (
    <>
      {/* <!-- BEGIN FOOTER --> */}
      <footer id='footer'>
        <div id='footer-top' className='container'>
          <div className='row'>
            <div className='block col-sm-3'>
              <Link to='#'>
                <img src={logo} alt='One Ring Rentals' />
              </Link>
              <br />
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                commodo eros nibh, et dictum elit tincidunt eget. Pellentesque
                volutpat quam dignissim, convallis elit id, efficitur sem.
                Vivamus ac scelerisque sem. Aliquam sed enim rutrum nibh gravida
                pellentesque nec at metus.
              </p>
            </div>
            <div className='block col-sm-3'>
              <h3>Helpful Links</h3>
              <ul className='footer-links'>
                <li>
                  <Link to='#'>All rentals</Link>
                </li>
                <li>
                  <Link to='#'>List your rental</Link>
                </li>
                <li>
                  <Link to='#'>Read our FAQs</Link>
                </li>
              </ul>
            </div>
            <div className='block col-sm-6'>
              <h3>Popular regions</h3>
              <div className='row'>
                <div className='col-sm-6'>
                  <ul className='footer-listings'>
                    <li>
                      <div className='image'>
                        <Link to='#'>
                          <img src='http://placehold.it/760x670' alt='' />
                        </Link>
                      </div>
                      <p>
                        <Link to='#'>Rhovanion</Link>
                      </p>
                    </li>
                    <li>
                      <div className='image'>
                        <Link to='#'>
                          <img src='http://placehold.it/760x670' alt='' />
                        </Link>
                      </div>
                      <p>
                        <Link to='#'>Eriador</Link>
                      </p>
                    </li>
                    <li>
                      <div className='image'>
                        <Link to='#'>
                          <img src='http://placehold.it/760x670' alt='' />
                        </Link>
                      </div>
                      <p>
                        <Link to='#'>Bay of Belfalas</Link>
                      </p>
                    </li>
                  </ul>
                </div>
                <div className='col-sm-6'>
                  <ul className='footer-listings'>
                    <li>
                      <div className='image'>
                        <Link to='#'>
                          <img src='http://placehold.it/760x670' alt='' />
                        </Link>
                      </div>
                      <p>
                        <Link to='#'>Mordor</Link>
                      </p>
                    </li>
                    <li>
                      <div className='image'>
                        <Link to='#'>
                          <img src='http://placehold.it/760x670' alt='' />
                        </Link>
                      </div>
                      <p>
                        <Link to='#'>Arnor</Link>
                      </p>
                    </li>
                    <li>
                      <div className='image'>
                        <Link to='#'>
                          <img src='http://placehold.it/760x670' alt='' />
                        </Link>
                      </div>
                      <p>
                        <Link to='#'>Forlindon</Link>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- BEGIN COPYRIGHT --> */}
        <div id='copyright'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-12'>
                &copy; 2024 One Ring Rentals
                {/* <!-- BEGIN SOCIAL NETWORKS --> */}
                <ul className='social-networks'>
                  <li>
                    <Link to='#'>
                      <i className='fa fa-facebook'></i>
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <i className='fa fa-twitter'></i>
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <i className='fa fa-google'></i>
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <i className='fa fa-pinterest'></i>
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <i className='fa fa-youtube'></i>
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <i className='fa fa-rss'></i>
                    </Link>
                  </li>
                </ul>
                {/* <!-- END SOCIAL NETWORKS --> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- END COPYRIGHT --> */}
      </footer>
      {/* <!-- END FOOTER --> */}
    </>
  );
};

export default Footer;
