/* eslint-disable react/prop-types */
import CardArticle from './CardArticle';

const CardArticles = (props) => {
  return (
    <>
      <h1 className='section-title'>{props.title}</h1>
      <div className='grid-style1'>
        {props.data.map((article, index) => (
          <CardArticle key={index} {...article} />
        ))}
      </div>
    </>
  );
};

export default CardArticles;
