import CardProperty from './CardProperty';

const propertiesData = [
  {
    title: 'Luxury Apartment with great views',
    location: 'Upper East Side, New York',
    price: '950',
  },
  {
    title: 'Stunning Villa with 5 bedrooms',
    location: 'Miami Beach, Florida',
    price: '1,300',
  },
  {
    title: 'Recent construction with 3 bedrooms',
    location: 'Park Slope, New York',
    price: '560',
  },
  {
    title: 'Modern construction with parking space',
    location: 'Midtown, New York',
    price: '85',
  },
  {
    title: 'Single Family Townhouse',
    location: 'Cobble Hill, New York',
    price: '840',
  },
  {
    title: '3 bedroom villa with garage for rent',
    location: 'Bal Harbour, Florida',
    price: '150',
  },
];

const CardProperties = () => {
  return (
    <>
      <h1 className='section-title'>Featured Properties</h1>
      <div className='grid-style1 clearfix'>
        {propertiesData.map((property, index) => (
          <CardProperty key={index} {...property} />
        ))}
      </div>
    </>
  );
};

export default CardProperties;
