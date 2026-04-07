import React, { useContext } from "react";
import "./gallery.css";
import { translations } from "../../Translations";
import { LanguageContext } from "../../components/LanguageContext";

export const Gallery: React.FC = () => {
  const { language } = useContext(LanguageContext); 
  const t = translations[language]; 
  const images = [
    "/images/work1.jpg",
    "/images/work2.jpg",
    "/images/work3.jpg",
    "/images/work4.jpg",
    "/images/work5.jpg",
    "/images/work6.jpg",
    "/images/work7.jpg",
    "/images/work8.jpg",
    "/images/work9.jpg",
    "/images/work10.jpg",
    "/images/work11.jpg",
    "/images/work12.jpg",
  ];

  return (
    <div className="gallery-page">
      <h1>{t.heroButton}</h1> 
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div key={index} className="gallery-item">
            <img src={img} alt={`work-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};
