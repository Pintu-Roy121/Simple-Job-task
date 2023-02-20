import './App.css';
import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import RightSidebar from './components/RightSidebar/RightSidebar';

function App() {
  return (
    <div data-theme="light">
      {/* <div className="drawer drawer-mobile ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-[#F5F5F5] flex flex-col items-center justify-center">

          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <div className="menu h-auto p-4 w-96 m bg-[#FFFBF3] text-base-content">

            <LeftSidebar />


          </div>

        </div>
      </div> */}
      <div className='flex justify-between'>
        <LeftSidebar />
        <RightSidebar />
      </div>
    </div >
  );
}

export default App;
