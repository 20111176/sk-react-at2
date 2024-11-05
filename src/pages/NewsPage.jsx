/**
 * This is NewsPage that just serves as a page link purpose, not implementing card components.
 * Each cloud has an image placeholder for layout purposes.
 */
import CardArticles from '../components/ContentWrapper/CardArticles';

const newsData = [
  {
    date: '2024-08-08',
    author: 'Admin',
    tags: ['Properties, ', 'Prices, ', 'best deals'],
    title: 'New Rental Regulations Announced',
    body: 'The government has announced new rental regulations effective from next month. Find out how this impacts you.',
  },
  {
    date: '2024-08-07',
    author: 'Admin',
    tags: ['Tips, ', 'Mortgage'],
    title: 'Top 10 Rental Properties in Sydney',
    body: 'Explore our list of the top 10 rental properties in Sydney for the month of August.',
  },
  {
    date: '2024-08-06',
    author: 'Admin',
    tags: ['Location, ', 'Price, ', 'House'],
    title: 'Customer Stories: Finding the Perfect Home',
    body: 'Read our customer stories about their journey to finding the perfect home through One Ring Rentals.',
  },
];

const NewsPage = () => {
  return (
    <div className='main col-sm-12'>
      <CardArticles title='Latest News' data={newsData} />
    </div>
  );
};

export default NewsPage;
