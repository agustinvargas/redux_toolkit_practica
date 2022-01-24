import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get, gettingUsers, remove, selectUser } from './userSlice';

export default function UserList() {
  const { list } = useSelector(selectUser);
  console.log('users', list);
  const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(gettingUsers);

  //     return () => {};
  //   }, [dispatch]);

  return (
    <>
      <h1>Usuarios</h1>
      <button onClick={() => dispatch(gettingUsers())}>Dame usuarios</button>
      {list.length ? (
        <>
          <h3>Lista de usuarios</h3>
          <button onClick={() => dispatch(remove())}>Limpia usuarios</button>
          {list.map((e) => (
            <ul key={e.id}>
              <li>{e.name}</li>
              <li>{e.username}</li>
              <li>{e.email}</li>
            </ul>
          ))}
        </>
      ) : (
        <p>No hay usuarios cargados</p>
      )}
    </>
  );
}
