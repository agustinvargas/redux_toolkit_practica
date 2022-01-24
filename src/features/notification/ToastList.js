import React from 'react';
import { ToastContainer } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectNotify } from './notifySlice';
import ToastNotify from './ToastNotify';

export default function ToastList() {
  const toasts = useSelector(selectNotify);
  console.log('toast selector', toasts);

  return (
    <ToastContainer className='p-3 position-fixed' position='bottom-end'>
      {toasts.map((toast) => {
        console.log('TOAST', toast);
        return (
          <ToastNotify
            key={toast.id}
            id={toast.id}
            title={toast.title}
            body={toast.body}
          />
        );
      })}
    </ToastContainer>
  );
}
