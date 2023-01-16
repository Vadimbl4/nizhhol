import React from 'react';
import Accordion from '../../components/Accordion/accordion';
import { accordionFaqData } from '../../components/Accordion/accordionData';

export default function Faq() {
  return (
    <>
      <div className="faq-wrap container" id="Faq">
        <h2 className="faq-title">Часто задаваемые вопросы</h2>
        <div className="accordion">
          {accordionFaqData.map((el) => (
            <Accordion title={el.title} content={el.content} key={el.title} />
          ))}
        </div>
      </div>
    </>
  );
}
