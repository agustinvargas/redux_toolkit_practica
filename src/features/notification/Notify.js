import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from './notifySlice';

export default function Notify() {
  const [form, setForm] = useState({
    title: '',
    body: '',
  });

  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(form);

    dispatch(add(form));
  };

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <>
      <h1>Notificaciones</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input onChange={handleChange} placeholder='título' name='title' />
        <input onChange={handleChange} placeholder='mensaje' name='body' />
        <button type='submit'>Notificar</button>
      </form>
    </>
  );
}
