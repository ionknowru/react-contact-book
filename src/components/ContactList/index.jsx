import React from 'react';

import './ContactList.scss';

function ContactList({ contacts }) {
    return (
        <div className="contact__list">
            {contacts.map(contact => (
                <div ket={contact.id} className="contact__list-item">
                    <p>{contact.title}</p>
                    <img src="https://img.icons8.com/ios/24/000000/about.png" alt="info"/>
                </div>
            ))}
        </div>
    );
}

export default ContactList;
