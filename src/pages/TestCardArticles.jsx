import CardArticles from '../components/ContentWrapper/CardArticles';
const articlesData = [
  {
    date: 'July 30, 2014',
    comments: 2,
    tags: ['Properties, ', 'Prices, ', 'best deals'],
    title: 'How to get your dream property for the best price?',
    body: 'Sed rutrum urna id tellus euismod gravida. Praesent placerat, mauris ac pellentesque fringilla, tortor libero condimen.',
  },
  {
    date: 'July 24, 2014',
    comments: 4,
    tags: ['Tips, ', 'Mortgage'],
    title: '7 tips to get the best mortgage.',
    body: 'Sed rutrum urna id tellus euismod gravida. Praesent placerat, mauris ac pellentesque fringilla, tortor libero condimen.',
  },
  {
    date: 'July 05, 2014',
    comments: 1,
    tags: ['Location, ', 'Price, ', 'House'],
    title: "House, location or price: What's the most important factor?",
    body: 'Sed rutrum urna id tellus euismod gravida. Praesent placerat, mauris ac pellentesque fringilla, tortor libero condimen.',
  },
];
const TestCardArticles = () => {
  return <CardArticles title='test article page' data={articlesData} />;
};

export default TestCardArticles;
