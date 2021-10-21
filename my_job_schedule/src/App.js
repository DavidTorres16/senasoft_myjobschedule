import './App.css';
import IndexPage from './modules/IndexPage/IndexPage';
import StaffSchedule from './components/StaffSchedule/StaffSchedule';

function App() {
  return (
    <div className="App w-100">
      <header className="containerApp">
        {/* <IndexPage/> */}
        <StaffSchedule/>
      </header>
    </div>
  );
}

export default App;
