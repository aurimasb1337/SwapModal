import './App.css';
import TriggerComponent from './components/trigger/TriggerComponent';

function App() {
  return (
      <div className="App" data-testid='app'>
        <header className="App-header  bg-gray-900 ">
          <h3 data-testid='home-title' className="absolute top-20 left-1/2 transform -translate-x-1/2">Some <i>"Lorem Ipsum"</i> to prove it will get blurry. 🤓</h3>
          <div className="flex items-center justify-center h-screen">
            <TriggerComponent type='swapModal' />
          </div>
        </header>
      </div>
    
  );
}

export default App;
