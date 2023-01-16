import React from 'react';

export default function Contacts() {
  return (
    <div className="contactsWrap" id="Contacts">
      <div className="contactsTitle">Контакты</div>
      <div className="contacts-inner">
        <div className="address">
          <div>Адрес:</div>
          <div>
            603163, Нижегородская область, г Нижний Новгород, Казанское ш, д. 7,
            кв. 273
          </div>
        </div>
        <div className="tel">
          <div>Телефон:</div>
          <div>+7 (999) 999-99-99</div>
        </div>
        <div className="email">
          <div>E-mail:</div>
          <div>example@.mail.ru</div>
        </div>
        <div className="work-hours">
          <div>Режим работы:</div>
          <div>Пн-Пт 8.00 - 20.00</div>
        </div>

        <div>Форма обратной связи</div>
      </div>
    </div>
  );
}
