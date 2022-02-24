import './App.css';
import Main from './main';
import $ from  'jquery';

function App() {
  if(!window.jQuery){
    window.jQuery = $;
  }
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
