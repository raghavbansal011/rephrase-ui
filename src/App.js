import './App.css';
import VideoPage from './components/video/video-page'
import Header from './components/header/header'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main-page'>
        <div className='side-container'>
          Side container with addition info...
        </div>
        <div className='page-boundary'>
          <VideoPage />
        </div>
      </div>
    </div>
  );
}

export default App;
