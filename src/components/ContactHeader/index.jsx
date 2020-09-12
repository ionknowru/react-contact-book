import React from 'react';

import './ContactHeader.scss';

function ContactHeader({ onClickFavorite }) {
    return (
        <div className="contact__header">
            <h2>Контакты: 0</h2>
            <img onClick={onClickFavorite} src="https://img.icons8.com/ios/50/000000/star.png" alt="fav-icon"/>
        </div>
    );
}

export default ContactHeader;
