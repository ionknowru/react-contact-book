import React from 'react';
import ContactHeader from './components/ContactHeader';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';

import './index.scss';

function App() {
  const contacts = [
    {id: 1, title: 'Люда', phone: '8 808 900 11 22', desc: 'Люда из поселка Мытелки'},
    {id: 2, title: 'Бенджамин', phone: '1 800 111 222 333', desc: 'Бенжик из Калифорнии'},
    {id: 3, title: 'Руслан', phone: '10 800 11 22 33', desc: 'Русик просто'},
    {id: 4, title: 'Маман', phone: '777 777 77 77', desc: 'Мам0чка'}
  ];

  const onClickFav = () => {
    console.log(123);
  }

  return (
    <div className="contact">
      <ContactHeader onClickFavorite={onClickFav}/>

      <ContactList contacts={contacts} />

      <AddContact />

      <div className="contact__addForm"></div>
    </div>
  );
}

export default App;
