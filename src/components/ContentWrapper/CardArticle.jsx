/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
const CardArticle = ({
  img = 'http://placehold.it/766x515',
  author = 'Admin',
  date = 'Jan 01 1999',
  comments = 'No comments',
  tags = 'No tags',
  title = 'No title',
  body = 'No body contents',
}) => {
  return (
    <div className='item col-md-4'>
      <div className='image'>
        <Link to='#'>
          <span className='btn btn-default'>
            <i className='fa fa-file-o'></i> Read More
          </span>
        </Link>
        <img src={img} alt='' />
      </div>
      <div className='tag'>
        <i className='fa fa-file-text'></i>
      </div>
      <div className='info-blog'>
        <ul className='top-info'>
          <li>
            <i className='fa fa-calendar'></i> {date}
          </li>
          <li>
            <i className='fa fa-comments-o'></i> {comments}
          </li>
          <li>
            <i className='fa fa-tags'></i> {tags}
          </li>
          <li>
            <i className='fa fa-user'></i> {author}
          </li>
        </ul>
        <h3>
          <Link to='#'>{title}</Link>
        </h3>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default CardArticle;
