import './App.css';
import { FooterComponent, HeaderComponent, RouterComponent } from './core/components';


function App() {
  return (
    <div className='productive-crud'>
      <HeaderComponent />
      <RouterComponent />
      <FooterComponent />
    </div>

  );
}

export default App;
