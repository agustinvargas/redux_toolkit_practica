import React from 'react';

import { Toast } from 'react-bootstrap';

import { useDispatch } from 'react-redux';
import { remove } from './notifySlice';

export default function ToastNotify({ id, title, body }) {
  const dispatch = useDispatch();
  return (
    <Toast onClose={() => dispatch(remove(id))}>
      <Toast.Header>
        <strong className='me-auto'>{title}</strong>
      </Toast.Header>
      <Toast.Body>{body}</Toast.Body>
    </Toast>
  );
}
