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
      {/* <img src="src\widgets\Catalog\assets\Цветы войны.jpg" alt="Цветы войны" /> */}
      <img src={ImgConstants.warFlowers} alt="" />
      <h2 className="catalog__image-author"></h2>
      <p className="catalog__image-title"></p>
      <h2 className="catalog__image-orginals"></h2>
      <p className="catalog__image-style"></p>
     </div>
    </div>
   </div>
  </Box>
 );
};

export default CatalogContent;
