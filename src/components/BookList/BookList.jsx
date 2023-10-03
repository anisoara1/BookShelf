import React, { useState, useEffect } from 'react';
import css from './BookList.module.css';
import { API_URL } from 'api';
import axios from 'axios';
import { useAppContext } from 'components/Context/Context';
import { useNavigate } from 'react-router-dom';

const BookList = () => {
  const [books, setBooks] = useState([]);

  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();
  const navigate = useNavigate();

  const favoritesChecker = id => {
    const boolean = favorites.some(book => book.id === id);
    return boolean;
  };

  useEffect(() => {
    axios
      .get(API_URL)
      .then(res => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className={css.bookList}>
      {books.map(book => (
        <div key={book.id} className={css.book}>
          <div>
            <h2
              className={css.bookTitle}
              onClick={() => navigate(`/books/${book.id}`)}
            >
              {book.title}
            </h2>
          </div>
          <div>
            <img className={css.image} src={book.image_url} alt="#" />
          </div>
          <div>
            {favoritesChecker(book.id) ? (
              <button onClick={() => removeFromFavorites(book.id)}>
                Remove from Favorites
              </button>
            ) : (
              <button onClick={() => addToFavorites(book)}>
                Add to Favorites
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default BookList;
