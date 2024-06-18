import "./Catalog.css";
import { Box } from "@mui/material";
import IconButton from "../../shared/ui/IconButton";
import Arrow from "./assets/arrow-forward.svg?react";
import FilterIcon from "./assets/whh_settingsandroid.svg?react";
// import Assets from "./constants";
import ImgConstants from "./ImgConstants";

const CatalogContent = () => {
 return (
  <Box>
   <div className="catalog__main">
    <div className="catalog__filters">
     <div className="catalog__filters-area">
      <button className="catalog__filter catalog__filter-price">
       Цена
       <IconButton className="catalog__filter-button" SvgIcon={Arrow} />
      </button>
      <button className="catalog__filter catalog__filter-size">
       Размеры
       <IconButton SvgIcon={Arrow} />
      </button>
      <button className="catalog__filter catalog__filter-orientation">
       Ориентация
       <IconButton SvgIcon={Arrow} />
      </button>
      <button className="catalog__filter catalog__filter-type">
       Категория
       <IconButton SvgIcon={Arrow} />
      </button>
      <button className="catalog__filter catalog__filter-style">
       Стили
       <IconButton SvgIcon={Arrow} />
      </button>
      <button className="catalog__filter catalog__filter-color">
       Цвет
       <IconButton SvgIcon={Arrow} />
      </button>
     </div>
     <div className="catalog__filter-recomended">
      <IconButton SvgIcon={FilterIcon} />
      <p>Рекомендованные</p>
     </div>
    </div>
    <div className="catalog__content">
     <div className="catalog__image">
      <img src={ImgConstants.warFlowers} alt="Цветы войны" />
      <h2 className="catalog__image-author">Анастасия Рыкунова</h2>
      <p className="catalog__image-title">Цветы войны</p>
      <div className="catalog__image-pricing">
       <h2 className="catalog__image-orginals">оригинал</h2>
       <p className="catalog__image-price">40 000 ₽</p>
      </div>
      <div className="catalog__image-pricing">
       <p className="catalog__image-style">Принт</p>
       <p className="catalog__image-style-price">6 000 ₽</p>
      </div>
     </div>
     <div className="catalog__image">
      <img src={ImgConstants.Melanholy} alt="" />
      <h2 className="catalog__image-author">Юлия Малинина</h2>
      <p className="catalog__image-title">Меланхолия</p>
      <div className="catalog__image-pricing">
       <h2 className="catalog__image-orginals">оригинал</h2>
       <p className="catalog__image-price">20 000 ₽</p>
      </div>
      <div className="catalog__image-pricing">
       <p className="catalog__image-style">Принт</p>
       <p className="catalog__image-style-price">4 000 ₽</p>
      </div>
     </div>
     <div className="catalog__image">
      <img src={ImgConstants.graphiteDay} alt="" />
      <h2 className="catalog__image-author">Мишель Ленц</h2>
      <p className="catalog__image-title">Графитовый день</p>
      <div className="catalog__image-pricing">
       <h2 className="catalog__image-orginals">оригинал</h2>
       <p className="catalog__image-price">160 000 ₽</p>
      </div>
      <div className="catalog__image-pricing">
       <p className="catalog__image-style">Принт</p>
       <p className="catalog__image-style-price">20 000 ₽</p>
      </div>
     </div>
     <div className="catalog__image">
      <img src={ImgConstants.sorryBook} alt="" />
      <h2 className="catalog__image-author">Бэт Гудвинт</h2>
      <p className="catalog__image-title">Прости, книга</p>
      <div className="catalog__image-pricing">
       <h2 className="catalog__image-orginals">оригинал</h2>
       <p className="catalog__image-price">20 000 ₽</p>
      </div>
      <div className="catalog__image-pricing">
       <p className="catalog__image-style">Принт</p>
       <p className="catalog__image-style-price">4 000 ₽</p>
      </div>
     </div>
     <div className="catalog__image">
      <img src={ImgConstants.peace} alt="" />
      <h2 className="catalog__image-author">Беонджи Ким</h2>
      <p className="catalog__image-title">Покой</p>
      <div className="catalog__image-pricing">
       <h2 className="catalog__image-orginals">оригинал</h2>
       <p className="catalog__image-price">180 000 ₽</p>
      </div>
      <div className="catalog__image-pricing">
       <p className="catalog__image-style">Принт</p>
       <p className="catalog__image-style-price">20 000 ₽</p>
      </div>
     </div>
     <div className="catalog__image">
      <img src={ImgConstants.Magic} alt="" />
      <h2 className="catalog__image-author">Лена Чижова</h2>
      <p className="catalog__image-title">Магия</p>
      <div className="catalog__image-pricing">
       <h2 className="catalog__image-orginals">оригинал</h2>
       <p className="catalog__image-price">80 000 ₽</p>
      </div>
      <div className="catalog__image-pricing">
       <p className="catalog__image-style">Принт</p>
       <p className="catalog__image-style-price">6 000 ₽</p>
      </div>
     </div>
     <div className="catalog__image">
      <img src={ImgConstants.hopeAngel} alt="" />
      <h2 className="catalog__image-author">Хейди Ланина</h2>
      <p className="catalog__image-title">Ангел надежды</p>
      <div className="catalog__image-pricing">
       <h2 className="catalog__image-orginals">оригинал</h2>
       <p className="catalog__image-price">120 000 ₽</p>
      </div>
      <div className="catalog__image-pricing">
       <p className="catalog__image-style">Принт</p>
       <p className="catalog__image-style-price">10 000 ₽</p>
      </div>
     </div>
     <div className="catalog__image">
      <img src={ImgConstants.carCulture} alt="" />
      <h2 className="catalog__image-author">Томас Сим</h2>
      <p className="catalog__image-title">Культура машин</p>
      <div className="catalog__image-pricing">
       <h2 className="catalog__image-orginals">оригинал</h2>
       <p className="catalog__image-price">120 000 ₽</p>
      </div>
      <div className="catalog__image-pricing">
       <p className="catalog__image-style">Принт</p>
       <p className="catalog__image-style-price">15 000 ₽</p>
      </div>
     </div>
     <div className="catalog__image">
      <img src={ImgConstants.AirSpace} alt="" />
      <h2 className="catalog__image-author">Марилина Марчика</h2>
      <p className="catalog__image-title">Воздух пространства</p>
      <div className="catalog__image-pricing">
       <h2 className="catalog__image-orginals">оригинал</h2>
       <p className="catalog__image-price">90 000 ₽</p>
      </div>
      <div className="catalog__image-pricing">
       <p className="catalog__image-style">Принт</p>
       <p className="catalog__image-style-price">6 000 ₽</p>
      </div>
     </div>
     <div className="catalog__image">
      <img src={ImgConstants.sameOne} alt="" />
      <h2 className="catalog__image-author">Каролина Ермоленко</h2>
      <p className="catalog__image-title">Тот самый</p>
      <div className="catalog__image-pricing">
       <h2 className="catalog__image-orginals">оригинал</h2>
       <p className="catalog__image-price">30 000 ₽</p>
      </div>
      <div className="catalog__image-pricing">
       <p className="catalog__image-style">Принт</p>
       <p className="catalog__image-style-price">6 000 ₽</p>
      </div>
     </div>
     <div className="catalog__image">
      <img src={ImgConstants.treesForce} alt="" />
      <h2 className="catalog__image-author">Пати Родгерс</h2>
      <p className="catalog__image-title">Сила среди деревьев</p>
      <div className="catalog__image-pricing">
       <h2 className="catalog__image-orginals">оригинал</h2>
       <p className="catalog__image-price">160 000 ₽</p>
      </div>
      <div className="catalog__image-pricing">
       <p className="catalog__image-style">Принт</p>
       <p className="catalog__image-style-price">16 000 ₽</p>
      </div>
     </div>
     <div className="catalog__image">
      <img src={ImgConstants.graphiteDay2} alt="" />
      <h2 className="catalog__image-author">Сами Мендиратта</h2>
      <p className="catalog__image-title">Графитовый день</p>
      <div className="catalog__image-pricing">
       <h2 className="catalog__image-orginals">оригинал</h2>
       <p className="catalog__image-price">90 000 ₽</p>
      </div>
      <div className="catalog__image-pricing">
       <p className="catalog__image-style">Принт</p>
       <p className="catalog__image-style-price">10 000 ₽</p>
      </div>
     </div>
     <div className="catalog__image">
      <img src={ImgConstants.InDream} alt="" />
      <h2 className="catalog__image-author">Егор Измайлов</h2>
      <p className="catalog__image-title">Во сне</p>
      <div className="catalog__image-pricing">
       <h2 className="catalog__image-orginals">оригинал</h2>
       <p className="catalog__image-price">30 000 ₽</p>
      </div>
      <div className="catalog__image-pricing">
       <p className="catalog__image-style">Принт</p>
       <p className="catalog__image-style-price">6 000 ₽</p>
      </div>
     </div>
     <div className="catalog__image">
      <img src={ImgConstants.nightAtMay} alt="" />
      <h2 className="catalog__image-author">Христофер Ларслуд</h2>
      <p className="catalog__image-title">Майская ночь</p>
      <div className="catalog__image-pricing">
       <h2 className="catalog__image-orginals">оригинал</h2>
       <p className="catalog__image-price">50 000 ₽</p>
      </div>
      <div className="catalog__image-pricing">
       <p className="catalog__image-style">Принт</p>
       <p className="catalog__image-style-price">7 000 ₽</p>
      </div>
     </div>
     <div className="catalog__image">
      <img src={ImgConstants.chaos} alt="" />
      <h2 className="catalog__image-author">Славомир Зомбэк</h2>
      <p className="catalog__image-title">Хаос</p>
      <div className="catalog__image-pricing">
       <h2 className="catalog__image-orginals">оригинал</h2>
       <p className="catalog__image-price">15 000 ₽</p>
      </div>
      <div className="catalog__image-pricing">
       <p className="catalog__image-style">Принт</p>
       <p className="catalog__image-style-price">4 000 ₽</p>
      </div>
     </div>
     <div className="catalog__image">
      <img src={ImgConstants.way} alt="" />
      <h2 className="catalog__image-author">Алек Фрэнкли</h2>
      <p className="catalog__image-title">Путь</p>
      <div className="catalog__image-pricing">
       <h2 className="catalog__image-orginals">оригинал</h2>
       <p className="catalog__image-price">40 000 ₽</p>
      </div>
      <div className="catalog__image-pricing">
       <p className="catalog__image-style">Принт</p>
       <p className="catalog__image-style-price">6 000 ₽</p>
      </div>
     </div>
     <div className="catalog__image catalog__image-grid">
      <img src={ImgConstants.fall} alt="" />
      <h2 className="catalog__image-author">София Маритина</h2>
      <p className="catalog__image-title">Падение</p>
      <div className="catalog__image-pricing">
       <h2 className="catalog__image-orginals">оригинал</h2>
       <p className="catalog__image-price">90 000 ₽</p>
      </div>
      <div className="catalog__image-pricing">
       <p className="catalog__image-style">Принт</p>
       <p className="catalog__image-style-price">10 000 ₽</p>
      </div>
     </div>
    </div>
   </div>
  </Box>
 );
};

export default CatalogContent;
