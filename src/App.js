import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import './App.css';
import {   Container } from './components/index';
import { Header ,Footer } from './sections/index';
import { Browse, Details, Fortnite, Home, Profile, Pubg, Stream } from './Pages';

function App() {
  return (
    <>
    <Router>
    <Header />
    <Container>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/stream' element={<Stream />} />
        <Route path='/browse' element={<Browse />} />
        <Route path='/details' element={<Details />} />
        <Route path='/details/fortnite' element={<Fortnite />} />
        <Route path='/details/pubg' element={<Pubg />} />
      </Routes>
    </Container>
    <Footer />
    </Router>
    </>
  );
}

export default App;
