import { Route, Routes } from 'react-router-dom';
import './layout.css';
import './reset.css';
import './styles.css';
import { NavBar } from './components/NavBar';
import { NotFound } from './pages/NotFound';
import { Entries } from './pages/Entries';
import { EntryForm } from './pages/EntryForm';
function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route path="entries" element={<Entries />} />
        <Route path="entry-form" element={<EntryForm />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
