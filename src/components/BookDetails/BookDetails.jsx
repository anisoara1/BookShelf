import React, { useState, useEffect } from 'react';
import css from './BookDetails.module.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BOOK_DETAILS_URL } from 'api';

const BookDetails = () => {
  const [book, setBook] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${BOOK_DETAILS_URL}/${id}`)
      .then(res => {
        setBook(res.data);
      })
      .catch(err => console.log(err));
  }, [id, setBook]);

  return (
    <div className={css.bookdetails}>
      <div className={css.card}>
        <h2>{book?.title}</h2>
        <img className={css.cardImg} src={book?.image_url} alt="#" />
      </div>
      <div className={css.details}>
        <h2>Description</h2>
        <p>{book?.description}</p>
        <h2>Authors</h2>
        <p>{book?.authors}</p>
        <h2>Genres</h2>
        <p>{book?.genres}</p>
      </div>
    </div>
  );
};

export default BookDetails;
