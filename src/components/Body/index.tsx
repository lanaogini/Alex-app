import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import "./styles.css";
import { translations } from "../../Translations";


const Body: React.FC = () => {
  const { language } = useContext(LanguageContext);

  
  const t = translations[language] || translations["ru"];

  return (
    <main className="main-content">

      
      <section className="advantages">
        <h2>{t.advantagesTitle}</h2>

        <div className="advantages-list">
          {t.advantagesList?.map((item: string, i: number) => (
            <div key={i}>✔ {item}</div>
          ))}
        </div>
      </section>

      
      <section className="services">
        <h2>{t.servicesTitle}</h2>

        <div className="service-cards">
          {t.services?.map((service: any, i: number) => (
            <div className="card" key={i}>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>

              <button
                onClick={() =>
                  window.open("https://wa.me/49123456789", "_blank")
                }
              >
                Заказать
              </button>
            </div>
          ))}
        </div>
      </section>

      
      <section className="reviews">
        <h2>{t.reviewsTitle}</h2>

        <div className="review-cards">
          {t.reviews?.map((review: any, i: number) => (
            <div className="review-card" key={i}>
              <p>"{review.text}"</p>
              <h4>— {review.author}</h4>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Body;