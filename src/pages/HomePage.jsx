// Importing necessary components for the homepage
import Hero from '../components/Hero';
import HomeAdvanceSearch from '../components/HomeAdvanceSearch';
import ContentWrapper from '../components/ContentWrapper';

// HomePage component: The main entry point of the application, responsible for rendering the homepage content.
const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeAdvanceSearch />
      <ContentWrapper />
    </>
  );
};

export default HomePage;
