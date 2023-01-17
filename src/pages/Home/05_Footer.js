import React from 'react';
import line from '../../styles/Home-page/pics/line.png';

let Scroll = require('react-scroll');
//let scroll = Scroll.animateScroll;

export default function Footer() {
  return (
    <>
      <div className="footer-wrap container" id="Contacts">
        <img src={line} className="foot-line" alt="line" />
        <div className="contacts-inner">
          <div className="work-hours">
            <div>Режим работы:</div>
            <div>Пн-Пт 8.00 - 20.00</div>
          </div>
          <div className="address">
            <div>Адрес:</div>
            {/* <div>603163, Нижегородская область,</div>
            <div>г. Нижний Новгород,</div>
            <div>Какая-то улица, д. какой-то, кв. какая-то</div> */}
          </div>
          <div className="communic">
            <div className="tel">
              <div>Телефон:</div>
              <div>283-15-44</div>
            </div>
            <div className="email">
              <div>E-mail:</div>
              {/* <div>example@.mail.ru</div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
