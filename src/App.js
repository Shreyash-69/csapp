import Header from './comp/header';
import Main from './comp/main';
import Footer from './comp/footer';
import Codespace from './pages/codespace';
import './App.css';

function App() {
  return (
    <div className="App">
     <Header />
     <Codespace />
     <Main />
     <Footer />
    </div>
  );
}

export default App;
