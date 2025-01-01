import logo from './logo.svg';
import './App.css';
import Posts from './components/post/Posts';
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import { Menubar } from 'primereact/menubar';
import { useNavigate } from "react-router";
import './index.css';
import './flags.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  const items = [

    {
      label: 'posts',
      icon: 'pi pi-search',
      command: () => {
        navigate('./posts')
      }
    
    }
  ];
  return (
    <div className="App">
      <Menubar model={items} />
      <Routes>
        <Route path="/posts" element={<Posts />} />

      </Routes>
    </div>
  );
}

export default App;
