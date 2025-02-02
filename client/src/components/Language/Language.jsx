import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageLoader } from '../ImageLoader';
import Ukraine from '../../assets/images/icons/countries/ukraine.svg';
import Russia from '../../assets/images/icons/countries/russia.svg';
import England from '../../assets/images/icons/countries/england.svg';

const RU = 'ru';
const EN = 'en';
const UA = 'ua';

const Language = () => {
  const [lang, setLang] = useState(RU);
  const { i18n } = useTranslation();

  const getImage = (val) => {
    switch (val) {
      case RU:
        return <ImageLoader src={Russia} alt={val} />;
      case UA:
        return <ImageLoader src={Ukraine} alt={val} />;
      case EN:
        return <ImageLoader src={England} alt={val} />;
      default:
        return <ImageLoader src={Russia} alt={val} />;
    }
  };

  const changeLanguage = () => {
    const currentLang = lang === RU ? EN : RU;
    setLang(currentLang);
    i18n.changeLanguage(currentLang);
  };

  return (
    <div className="language-btn-container">
      <div className="language-btn" onClick={changeLanguage}>
        {lang === RU ? getImage(EN) : getImage(RU)}
      </div>
    </div>
  );
};

export default Language;
