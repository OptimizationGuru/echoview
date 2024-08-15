import Header from './components/Header';
import Body from './components/Body';
import store from './utils/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="m-0 p-0">
        <Header />
        <Body />
        {/* 
        Hii
        Header
        Body
        Sidebar
        MainContainer
        ButtonList
        VideoContainer
        VideoCard
        WatchComponenet
        VideoPlayer
        Comments
        Sugesstions
        Sugesstions
       */}
      </div>
    </Provider>
  );
}

export default App;
