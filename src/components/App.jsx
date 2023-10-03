import { Routes, Route } from 'react-router-dom';
import BookList from './BookList/BookList';
import BookDetails from './BookDetails/BookDetails';
import Favorites from './Favorites/Favorites';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

export const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <Footer />
    </div>
  );
};
