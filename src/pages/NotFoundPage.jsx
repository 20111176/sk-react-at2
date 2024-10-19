/**
 * This is a custom 404 page that serves as a Not Found result page.
 * It displays an error message for users who try to access non-existent routes.
 */

import { Link } from 'react-router-dom';
const NotFoundPage = () => {
  return (
    <div>
      <h2>PAGE NOT FOUND (404)</h2>
      <p>
        The page you are looking for could not be found.<br></br>
      </p>
      <Link to='/'>&gt; Go Back</Link>
    </div>
  );
};

export default NotFoundPage;
