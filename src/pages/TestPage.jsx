import { Link } from 'react-router-dom';

const TestPage = () => {
  return (
    <div className='container is-centered'>
      <ul className='nav navbar-nav is-active'>
        <li>
          <Link to='/sk-react-at2/testcard'>Test Card Articles</Link>
        </li>
        <li>
          <Link to='/sk-react-at2/testfooter'>Test Footer</Link>
        </li>
        <li>
          <Link to='/sk-react-at2/testheader'>Test Header</Link>
        </li>
        <li>
          <Link to='/sk-react-at2/home'>Home page</Link>
        </li>
      </ul>
    </div>
  );
};

export default TestPage;
