import React, { Component } from 'react';
import serv from '../../styles/Home-page/pics/services.png';
import Card from '../../components/Card/Card';
import { cardDataServices } from '../../components/Card/CardData';
import { takeFlipers } from '../../components/Card/Card';



class Services extends Component {
  componentDidMount() {
    takeFlipers();
   
  }
  render() {
    return (
      <>
        <div className="servis-wrap container" id="Services">
          <img className="background-img" src={serv} alt="pic" />
          <h2 className="servis-title">Наши услуги</h2>

          <div className="cards-wrap">
            {cardDataServices.length
              ? cardDataServices.map(el => {
                  return (
                    <Card
                      inner={el.inner}
                      imgClass={el.imgClass}
                      pic={el.pic}
                      title={el.title}
                      descr={el.descr}
                      key={el.id}
                    />
                  );
                })
              : null}
          </div>
        </div>
      </>
    );
  }
}

export default Services;
