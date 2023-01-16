import React from 'react';

let flipers;

export function takeFlipers() {
   flipers = Array.prototype.slice.call(
    document.querySelectorAll('.card-flip')
  );
}

function backFlip() {
  flipers.forEach((el) => {
   if (el.classList.contains('is-flipped') ) { 

    el.childNodes[0].childNodes[1].classList.add('disappear')
    el.childNodes[0].childNodes[3].classList.add('disappear')
    el.childNodes[0].childNodes[5].classList.add('disappear')

    setTimeout(() => {
      el.childNodes[0].childNodes[1].style.display = 'none'
      el.childNodes[0].childNodes[3].style.display = 'none'
      el.childNodes[0].childNodes[5].style.display = 'none'

      el.childNodes[0].childNodes[1].classList.remove('disappear')
      el.childNodes[0].childNodes[3].classList.remove('disappear')
      el.childNodes[0].childNodes[5].classList.remove('disappear')

      el.classList.remove('is-flipped')
    }, 850);

    setTimeout(() => {
      el.childNodes[0].classList.remove('card-back')
  
      el.childNodes[0].childNodes[0].style.display = 'block'
      el.childNodes[0].childNodes[2].style.display = 'block'
      el.childNodes[0].childNodes[4].style.display = 'block'
  
      el.childNodes[0].childNodes[0].classList.add('appear')
      el.childNodes[0].childNodes[2].classList.add('appear')
      el.childNodes[0].childNodes[4].classList.add('appear')
  
      setTimeout(() => {
        el.childNodes[0].childNodes[0].classList.remove('appear')
        el.childNodes[0].childNodes[2].classList.remove('appear')
        el.childNodes[0].childNodes[4].classList.remove('appear')
      }, 1000);
    }, 1200);
   

      
    }
  });
}

function flip(e) {
  backFlip();
  
  let card = e.target.closest('.card-flip')
  
  //front part
  card.childNodes[0].childNodes[0].classList.add('disappear')
  card.childNodes[0].childNodes[2].classList.add('disappear')
  card.childNodes[0].childNodes[4].classList.add('disappear')

  setTimeout(() => {
    card.childNodes[0].childNodes[0].style.display = 'none'
    card.childNodes[0].childNodes[2].style.display = 'none'
    card.childNodes[0].childNodes[4].style.display = 'none'

    card.childNodes[0].childNodes[0].classList.remove('disappear')
    card.childNodes[0].childNodes[2].classList.remove('disappear')
    card.childNodes[0].childNodes[4].classList.remove('disappear')
    
    card.classList.toggle('is-flipped');

  }, 850);
 
  //back part
  setTimeout(() => {
    card.childNodes[0].classList.add('card-back')

    card.childNodes[0].childNodes[1].style.display = 'block'
    card.childNodes[0].childNodes[3].style.display = 'block'
    card.childNodes[0].childNodes[5].style.display = 'block'

    card.childNodes[0].childNodes[1].classList.add('appear')
    card.childNodes[0].childNodes[3].classList.add('appear')
    card.childNodes[0].childNodes[5].classList.add('appear')

    setTimeout(() => {
      card.childNodes[0].childNodes[1].classList.remove('appear')
      card.childNodes[0].childNodes[3].classList.remove('appear')
      card.childNodes[0].childNodes[5].classList.remove('appear')
    }, 1000);
  }, 1200);
 }

export default function Card({ inner, pic, title, descr, imgClass }) {
  return (
    
    <div className="card-flip">
      <div className="card-face ">
        <div className="card-inner">{inner}</div>
        <div className="card-title">{title}</div>
        <div className={imgClass}>{pic}</div>
        <div className="card-descr">{descr}</div>
        <div className="card-more" onClick={(e) => flip(e)}> Подробнее </div>
        <div className="card-moreBack" onClick={() => backFlip()}>Назад </div>
      </div>
    </div>
  );
}
