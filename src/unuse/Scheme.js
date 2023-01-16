import React from 'react';
import coop from '../styles/pics/cooperation.png'

export default function Scheme() {
  return (
    <>
      <div className="schemeWrap" id="Scheme">
        <img className='coop' src={coop}/>
        <div className="schemeTitle">Схема работы</div>
        <div className="innerWrap">
          <div className="firstStage">
            <div className="innerTitle"><span>1.</span> Подготовительный этап</div>
            <div className="arrow">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="innerDesc" style={{lineHeight: '25px'}}>
              Выезд на объект,
              <br /> осмотр,
              <br /> разработка схем,
              <br /> согласование
            </div>
          </div>
          <div className="secondStage">
            <div className="innerTitle"><span>2.</span> Установочный этап</div>
            <div className="arrow">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="innerDesc">Монтаж, сборка</div>
          </div>
          <div className="thirdStage">
            <div className="inners">
              <div className="diagnostics">
                <div className="innerTitle"><span>3.</span> Диагностический этап</div>
                <div className="arrow">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="starts">
                <div className="innerTitle"><span>4.</span> Пуско-наладочный этап</div>
                <div className="arrow">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
            <div className="innerDesc1">
              Тестирование, заправка, пуско-наладочные работы
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
