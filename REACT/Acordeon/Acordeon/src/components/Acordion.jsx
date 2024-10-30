import React, { useState } from "react";

const Accordion = ({ items, children }) => {
  const [acorActivo, setAcorActivo] = useState(null);

  const handleClick = (index) => {
    setAcorActivo(acorActivo === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <div className="accordion-title" onClick={() => handleClick(index)}>
            <h2>{item.title}</h2>
          </div>
          {acorActivo === index && (
            <div className="accordion-content">
              <p>{item.content}</p>
              {children}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
