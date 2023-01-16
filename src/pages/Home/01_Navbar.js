import React from 'react';
import { Component } from 'react';
import { Link } from 'react-scroll';
import line from '../../styles/Home-page/pics/line.png';
import logo from '../../styles/Home-page/pics/logo.png';

let Scroll = require('react-scroll');
let scroll = Scroll.animateScroll;

function burger() {
  let burgerToggle = document.querySelector('.burger');
  const list = document.querySelector('.list');
  const body = document.querySelector('body');

  function listener() {
    list.classList.toggle('burg');
    burgerToggle.classList.remove('active-burger');
    body.classList.remove('locked');
  }

  burgerToggle.addEventListener('click', () => {
    list.removeEventListener('click', listener);
    if (!list.classList.contains('burg')) {
      list.classList.add('burg');
      burgerToggle.classList.add('active-burger');
      body.classList.add('locked');
      list.addEventListener('click', listener);
      return;
    } else {
      list.classList.toggle('burg');
      burgerToggle.classList.remove('active-burger');
      body.classList.remove('locked');
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth > 770) {
        list.classList.remove('burg');
        burger.classList.remove('active-burger');
        body.classList.remove('locked');
      }
    });
  });
}

class Navbar extends Component {
  componentDidMount() {
    burger();
  }
  render() {
    return (
      <div className="navbar-wrap container">
        <img src={line} className="line" alt="line" />
        <img
          className="logo"
          alt="logo"
          src={logo}
          id="Logo"
          onClick={() => scroll.scrollToTop()}
        />

        <div className="list">
          <Link
            to="Services"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Услуги
          </Link>

          <Link to="Faq" spy={false} smooth={true} offset={-80} duration={500}>
            Вопросы
          </Link>

          <Link
            to=""
            spy={false}
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => scroll.scrollToBottom()}
          >
            Контакты
          </Link>
        </div>
        <div className="burger">
          <span></span>
        </div>
      </div>
    );
  }
}

export default Navbar;