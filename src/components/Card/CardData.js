import gear from '../../styles/Home-page/pics/gear.png';
import wrench from '../../styles/Home-page/pics/wrench.png';

export const cardDataServices = [
  {
    inner: 'Производство',
    imgClass: 'production-img',
    pic: [
      <img key="gear1" className="gear1" src={gear} alt="pic" />,
      <img key="gear2" className="gear2" src={gear} alt="pic" />,
      <img key="gear3" className="gear3" src={gear} alt="pic" />,
    ],
    title: 'Производство',
    descr: (
      <div>
        Мы предлагаем услуги по производству холодильного, климатического и технологического оборудования на
        основании потребностей наших покупателей.
        <br />
        <br />
        Наши специалисты спроектируют и произведут оборудование по Вашему
        техническому заданию. В случае отсутствия четкого ТЗ – помогут его
        составить.
        <br />
        <br />
        Также, сотрудничая с нами вы получаете бесценный опыт более хз скольки
        предприятий в Российской Федерации
      </div>
    ),
    id: 'cardDataServices1',
  },
  {
    inner: 'Установка',
    imgClass: 'install-img',
    pic: <img key="wrench" className="wrench" src={wrench} alt="pic" />,
    title: 'Установка',
    descr: (
      <div>
        Монтаж и пуско-наладочные работы производятся в несколько этапов:
        <br />
        <br />
        1. Подготовительный этап
        <br />
        Выезд специалистов на объект, осмотр установочной площадки
        <br />
        <br />
        2. Этап согласования
        <br />
        Согласование сроков проведения работ
        <br />
        <br />
        3. Установочный этап
        <br />
        <br />
        4. Этап диагностики
        <br />
        Тестирование оборудования на корректную работу
        <br />
        <br />
        5. Пуско-наладочный этап
        <br />
        Финальная настройка оборудования для последующего ввода в эксплуатацию
      </div>
    ),
    id: 'cardDataServices2',
  },
  {
    inner: 'Обслуживание',
    imgClass: 'service',
    pic: [
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="1706.667"
        viewBox="0 0 1280 1181"
        key="svg1"
        id="svg1"
      >
        <path d="M619.3 95.3C606 135.5 578.2 220 557.5 283c-20.7 63-42.5 129.1-48.4 147l-10.8 32.5-234.7.3c-151 .1-234.6.6-234.4 1.2.2.5 84.4 61.3 187.3 135.1 102.9 73.7 188 135.1 189.3 136.3l2.2 2.2-17.6 53.4c-9.6 29.4-29 88.1-42.9 130.5-13.9 42.3-36.6 111.4-50.5 153.5-13.8 42.1-27.1 82.5-29.5 89.7-2.4 7.3-4 13.3-3.6 13.3.5 0 85.8-61 189.7-135.6C588.4 945.6 643 907 644.5 907.2c1.1.3 86.7 61.3 190.3 135.7 103.6 74.4 188.6 135.1 188.8 134.8.5-.5-15.7-50-106.1-325.2-36.4-110.8-37.7-114.5-37.3-115.6.2-.5 85.1-61.8 188.7-136.2 103.6-74.3 188.6-135.8 188.9-136.5.3-.9-47.7-1.2-233.6-1.2-186 0-234.1-.3-234.9-1.3-.5-.6-33.2-99.5-72.7-219.7-39.5-120.2-72.1-218.8-72.5-219.2-.4-.4-11.5 32.2-24.8 72.5z" />
      </svg>,
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="1706.667"
        viewBox="0 0 1280 1181"
        key="svg2"
        id="svg2"
      >
        <path d="M619.3 95.3C606 135.5 578.2 220 557.5 283c-20.7 63-42.5 129.1-48.4 147l-10.8 32.5-234.7.3c-151 .1-234.6.6-234.4 1.2.2.5 84.4 61.3 187.3 135.1 102.9 73.7 188 135.1 189.3 136.3l2.2 2.2-17.6 53.4c-9.6 29.4-29 88.1-42.9 130.5-13.9 42.3-36.6 111.4-50.5 153.5-13.8 42.1-27.1 82.5-29.5 89.7-2.4 7.3-4 13.3-3.6 13.3.5 0 85.8-61 189.7-135.6C588.4 945.6 643 907 644.5 907.2c1.1.3 86.7 61.3 190.3 135.7 103.6 74.4 188.6 135.1 188.8 134.8.5-.5-15.7-50-106.1-325.2-36.4-110.8-37.7-114.5-37.3-115.6.2-.5 85.1-61.8 188.7-136.2 103.6-74.3 188.6-135.8 188.9-136.5.3-.9-47.7-1.2-233.6-1.2-186 0-234.1-.3-234.9-1.3-.5-.6-33.2-99.5-72.7-219.7-39.5-120.2-72.1-218.8-72.5-219.2-.4-.4-11.5 32.2-24.8 72.5z" />
      </svg>,
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="1706.667"
        viewBox="0 0 1280 1181"
        key="svg3"
        id="svg3"
      >
        <path d="M619.3 95.3C606 135.5 578.2 220 557.5 283c-20.7 63-42.5 129.1-48.4 147l-10.8 32.5-234.7.3c-151 .1-234.6.6-234.4 1.2.2.5 84.4 61.3 187.3 135.1 102.9 73.7 188 135.1 189.3 136.3l2.2 2.2-17.6 53.4c-9.6 29.4-29 88.1-42.9 130.5-13.9 42.3-36.6 111.4-50.5 153.5-13.8 42.1-27.1 82.5-29.5 89.7-2.4 7.3-4 13.3-3.6 13.3.5 0 85.8-61 189.7-135.6C588.4 945.6 643 907 644.5 907.2c1.1.3 86.7 61.3 190.3 135.7 103.6 74.4 188.6 135.1 188.8 134.8.5-.5-15.7-50-106.1-325.2-36.4-110.8-37.7-114.5-37.3-115.6.2-.5 85.1-61.8 188.7-136.2 103.6-74.3 188.6-135.8 188.9-136.5.3-.9-47.7-1.2-233.6-1.2-186 0-234.1-.3-234.9-1.3-.5-.6-33.2-99.5-72.7-219.7-39.5-120.2-72.1-218.8-72.5-219.2-.4-.4-11.5 32.2-24.8 72.5z" />
      </svg>,
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="1706.667"
        viewBox="0 0 1280 1181"
        key="svg4"
        id="svg4"
      >
        <path d="M619.3 95.3C606 135.5 578.2 220 557.5 283c-20.7 63-42.5 129.1-48.4 147l-10.8 32.5-234.7.3c-151 .1-234.6.6-234.4 1.2.2.5 84.4 61.3 187.3 135.1 102.9 73.7 188 135.1 189.3 136.3l2.2 2.2-17.6 53.4c-9.6 29.4-29 88.1-42.9 130.5-13.9 42.3-36.6 111.4-50.5 153.5-13.8 42.1-27.1 82.5-29.5 89.7-2.4 7.3-4 13.3-3.6 13.3.5 0 85.8-61 189.7-135.6C588.4 945.6 643 907 644.5 907.2c1.1.3 86.7 61.3 190.3 135.7 103.6 74.4 188.6 135.1 188.8 134.8.5-.5-15.7-50-106.1-325.2-36.4-110.8-37.7-114.5-37.3-115.6.2-.5 85.1-61.8 188.7-136.2 103.6-74.3 188.6-135.8 188.9-136.5.3-.9-47.7-1.2-233.6-1.2-186 0-234.1-.3-234.9-1.3-.5-.6-33.2-99.5-72.7-219.7-39.5-120.2-72.1-218.8-72.5-219.2-.4-.4-11.5 32.2-24.8 72.5z" />
      </svg>,
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="1706.667"
        viewBox="0 0 1280 1181"
        id="svg5"
        key="svg5"
      >
        <path d="M619.3 95.3C606 135.5 578.2 220 557.5 283c-20.7 63-42.5 129.1-48.4 147l-10.8 32.5-234.7.3c-151 .1-234.6.6-234.4 1.2.2.5 84.4 61.3 187.3 135.1 102.9 73.7 188 135.1 189.3 136.3l2.2 2.2-17.6 53.4c-9.6 29.4-29 88.1-42.9 130.5-13.9 42.3-36.6 111.4-50.5 153.5-13.8 42.1-27.1 82.5-29.5 89.7-2.4 7.3-4 13.3-3.6 13.3.5 0 85.8-61 189.7-135.6C588.4 945.6 643 907 644.5 907.2c1.1.3 86.7 61.3 190.3 135.7 103.6 74.4 188.6 135.1 188.8 134.8.5-.5-15.7-50-106.1-325.2-36.4-110.8-37.7-114.5-37.3-115.6.2-.5 85.1-61.8 188.7-136.2 103.6-74.3 188.6-135.8 188.9-136.5.3-.9-47.7-1.2-233.6-1.2-186 0-234.1-.3-234.9-1.3-.5-.6-33.2-99.5-72.7-219.7-39.5-120.2-72.1-218.8-72.5-219.2-.4-.4-11.5 32.2-24.8 72.5z" />
      </svg>,
    ],
    title: 'Обслуживание',
    descr: (
      <div>
        Наша компания предоставляет такие услуги, как:
        <br />
        <br />
        1. Диагностика холодильного оборудования
        <br />
        <br />
        2. Техническое обслуживание ХО
        <br />
        <br />
        3. Ремонт ХО
        <br />
        <br />
      </div>
    ),

    id: 'cardDataServices3',
  },
];
