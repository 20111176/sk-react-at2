import CardRegion from './CardRegion';

const regionsData = [
  {
    region: 'Rhovanion',
  },
  {
    region: 'Eriador',
  },
  {
    region: 'Bay of Belfalas',
  },
  {
    region: 'Mordor',
  },
  {
    region: 'The Soutwest',
  },
  {
    region: 'Arnor',
  },
];

const CardRegions = () => {
  return (
    <>
      <div className='row'>
        <div className='col-sm-12'>
          <h1 className='section-title'>Popular Regions</h1>
          <div id='regions'>
            {regionsData.map((Region, index) => (
              <CardRegion key={index} {...Region} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardRegions;
