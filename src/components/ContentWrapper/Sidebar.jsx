import CardSidebarAboutList from './CardSidebarAboutList';
import CardSidebarActivities from './CardSidebarActivities';

const Sidebar = () => {
  return (
    <>
      {/* <!-- BEGIN SIDEBAR --> */}
      <div className='sidebar col-sm-4'>
        <CardSidebarAboutList />
        <CardSidebarActivities />
      </div>
      {/* <!-- END SIDEBAR --> */}
    </>
  );
};

export default Sidebar;
