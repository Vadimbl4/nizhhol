import map from '../../styles/Home-page/pics/map.png';
import delivery from '../../styles/Home-page/pics/delivery.png';
import garant from '../../styles/Home-page/pics/garant.png';
import hands from '../../styles/Home-page/pics/hands.png';
import lines from '../../styles/Home-page/pics/lines.png';
import items from '../../styles/Home-page/pics/items.png';

export let MainSwiperData = [
  {
    title: 'ООО "Нижегородская Холодильная Лига"',
    inner: (
      <>
        <div className="firstInner">
          Производство, установка и обслуживание холодильного оборудования
        </div>
        <img key="items" className="items" src={items} alt="pic" />
      </>
    ),
  },
  {
    title: 'Оказываем услуги по всей России',
    inner: <img key="map" className="map" src={map} alt="pic" />,
  },
  {
    title: 'Отрасли с которыми мы работаем',
    inner: (
      <>
        <div className="slideInner">Общепит</div>
        <div className="slideInner">Аптеки</div>
        <div className="slideInner">Рестораны и кафе</div>
        <div className="slideInner">Цветочные магазины</div>
        <br />
        <br />
        <div className="slideInner">И многие другие</div>
        <img key="hands" className="hands" src={hands} alt="pic" />
        <img key="lines" className="lines" src={lines} alt="pic" />
      </>
    ),
  },
  {
    title: 'Доставка',
    inner: (
      <>
        <div className="slideInner">Соблюдение сроков</div>
        <div className="slideInner">Оперативность</div>
        <div className="slideInner">По всей территории РФ</div>
        <img key="delivery" className="delivery" src={delivery} alt="pic" />
        <img key="lines" className="lines" src={lines} alt="pic" />
      </>
    ),
  },
  {
    title: 'Гарантия',
    inner: (
      <>
        <div className="slideInner">Гарантия от производителя на оборудование</div>
        <div className="slideInner">Гарантия 1 год на услуги по установке</div>
        <div className="slideInner"> Гарантия 1 год на услуги по обслуживанию</div>
        <img key="garant" className="garant" src={garant} alt="pic" />
        <img key="lines" className="lines" src={lines} alt="pic" />
      </>
    ),
  },
];
