import React, { useState } from 'react';
import './SpaceWeatherResources.css';

const SpaceWeatherResources = () => {
  const [faqOpen, setFaqOpen] = useState(null);

  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const faqs = [
    // General FAQs...
    { question: "What causes geomagnetic storms?", answer: "Geomagnetic storms are caused by disturbances in the Earth's magnetosphere due to solar winds and solar phenomena like coronal mass ejections (CMEs)." },
    { question: "How do solar flares affect Earth?", answer: "Solar flares can affect Earth’s ionosphere and disrupt radio communications, GPS coordinates, and power grids." },

    // FAQs for research scientists
    { question: "What tools are used for space weather research?", answer: "Researchers use a variety of tools including satellites, ground-based observatories, and computer models to study and predict space weather events." },
    { question: "How does space weather impact climate research?", answer: "Space weather affects Earth's upper atmosphere and can contribute to climate variability, making it an important factor in climate research." },
    { question: "What are the current challenges in space weather prediction?", answer: "Challenges include accurately predicting the timing and impact of solar events, understanding the interaction between solar wind and Earth's magnetosphere, and improving the models used for forecasts." },

    // Kid-friendly FAQs
    { question: "Can you see space weather?", answer: "Yes! The Northern and Southern Lights, known as auroras, are visible displays caused by space weather." },
    { question: "Is space weather dangerous?", answer: "Space weather can affect satellites and power systems, but we're safe from its direct effects here on Earth thanks to our planet's magnetic field and atmosphere." },
    { question: "What are sunspots?", answer: "Sunspots are cooler, darker areas on the Sun's surface. They can be a sign of solar activity like solar flares." },
  ];
  return (
    <div className="space-weather-resources">
      {/* FAQs */}
      <div className="faqs">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button onClick={() => toggleFaq(index)} className="faq-question">
              {faq.question}
            </button>
            {faqOpen === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpaceWeatherResources;
