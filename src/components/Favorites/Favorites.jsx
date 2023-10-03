import React from 'react';
import css from './Favorites.module.css';
import { useAppContext } from 'components/Context/Context';

const Favorites = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();
  console.log('favorites are', favorites);

  const favoritesChecker = id => {
    const boolean = favorites.some(book => book.id === id);
    return boolean;
  };
  return (
    <div className={css.favorites}>
      {favorites.length > 0 ? (
        favorites.map(book => (
          <div key={book.id} className={css.book}>
            <div>
              <h4>{book.title}</h4>
            </div>
            <div>
              <img src={book.image_url} alt="#" />
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
        ))
      ) : (
        <h1>You don't have any favorite books yet!</h1>
      )}
    </div>
  );
};

export default Favorites;
