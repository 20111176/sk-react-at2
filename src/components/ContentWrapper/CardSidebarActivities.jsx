import CardSidebarActivity from './CardSidebarActivity';

const activitiesData = [
  {
    request: 'Sam Minnée reviewed',
    title: 'The House With No Windows',
    comment: 'Awesome solitary confinement, mate. Spot on. Sweet as.',
    date: 'Just now',
  },
  {
    request: 'Ingo Schoomer asked a question about',
    title: 'The Mistake by the Lake',
    comment: 'Has this house been unit tested?',
    date: '37 minutes ago',
  },
];

const CardSidebarActivities = () => {
  return (
    <div className='col-sm-12'>
      <h2 className='section-title'>Activity</h2>
      <ul className='activity'>
        {activitiesData.map((Activity, index) => (
          <CardSidebarActivity key={index} {...Activity} />
        ))}
      </ul>
    </div>
  );
};

export default CardSidebarActivities;
