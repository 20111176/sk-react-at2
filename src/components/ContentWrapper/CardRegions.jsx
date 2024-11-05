/* eslint-disable react/prop-types */
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
  {
    region: 'Sydney',
  },
  {
    region: 'Melbourne',
  },
  {
    region: 'Hobart',
  },
  {
    region: 'Adelaide',
  },
  {
    region: 'Brisbane',
  },
  {
    region: 'Perth',
  },
];

const CardRegions = (props) => {
  return (
    <>
      <div className='row'>
        {/* <div className='col-sm-12'> */}
        <div className='col-sm-12'>
          <h1 className='section-title'>{props.title}</h1>
          <div id='regions'>
            {regionsData.slice(0, props.limit).map((Region, index) => (
              <CardRegion img={props.img} key={index} {...Region} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardRegions;
