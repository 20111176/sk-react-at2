import CardArticle from './CardArticle';

const articlesData = [
  {
    date: 'July 30, 2014',
    comments: 2,
    tags: ['Properties', 'Prices', 'best deals'],
    title: 'How to get your dream property for the best price?',
    body: 'Sed rutrum urna id tellus euismod gravida. Praesent placerat, mauris ac pellentesque fringilla, tortor libero condimen.',
  },
  {
    date: 'July 24, 2014',
    comments: 4,
    tags: ['Tips', 'Mortgage'],
    title: '7 tips to get the best mortgage.',
    body: 'Sed rutrum urna id tellus euismod gravida. Praesent placerat, mauris ac pellentesque fringilla, tortor libero condimen.',
  },
  {
    date: 'July 05, 2014',
    comments: 1,
    tags: ['Location', 'Price', 'House'],
    title: "House, location or price: What's the most important factor?",
    body: 'Sed rutrum urna id tellus euismod gravida. Praesent placerat, mauris ac pellentesque fringilla, tortor libero condimen.',
  },
];

const CardArticles = () => {
  return (
    <>
      <h1 className='section-title'>Recent Articles</h1>
      <div className='grid-style1'>
        {articlesData.map((article, index) => (
          <CardArticle key={index} {...article} />
        ))}
      </div>
    </>
  );
};

export default CardArticles;
