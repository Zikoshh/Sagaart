const styles = {
  cart: {
    width: '1750px',
    display: 'grid',
    rowGap: '84px',
    margin: '60px 80px 76px 80px',
  },
  container: { display: 'grid', justifyContent: 'space-between' },
  infoContainer: { paddingTop: '20px', width: '1750px', margin: '0px 0px 50px', },
  img: {
    height: '410px',
    width: '439px',
    objectFit: 'cover',
    objectPosition: 'center',
    borderRadius: '4px',
    margin: '0px 0px 50px 0px',
  },
    img1: {
    height: '410px',
    width: '439px',
    objectFit: 'cover',
    objectPosition: 'center',
    borderRadius: '4px',
  },
  imageInfo: {
    margin: '0px 611px 0px 40px;',
  },
  imageSection: {
    display: 'flex',
    width: '1750px',
  },
  imagePriceTotalPrice:{
    display: 'flex',
    justifycontent: 'end',
    flexDirection: 'row-reverse',
        margin: '0px 85px 0px 0px;',
  },
  buttonBuy: {
        margin: '0px 0px 0px 78%;',
  },
  imagePriceTotal: {fontWeight: '500', fontSize: '36px', lineHeight: '43.57px',color: 'text.secondary'},
  imagePriceTotalSum: {fontWeight: '500', fontSize: '36px', lineHeight: '43.57px'},
  imagePrice: { fontWeight: '500', fontSize: '36px', lineHeight: '43.57px' },
  title: { fontWeight: '700', fontSize: '36px', lineHeight: '43.57px' },
  imageAuthor: { fontWeight: '500', fontSize: '28px', lineHeight: '39.2px' },
  imageTitle: { fontWeight: '600', fontSize: '24px', lineHeight: '33.6px', color: 'text.secondary'},
  imageYear: { fontWeight: '400', fontSize: '24px', lineHeight: '33.6px' },
  imageSize: { fontWeight: '400', fontSize: '24px', lineHeight: '33.6px' },
  imageMaterial: { fontWeight: '400', fontSize: '24px', lineHeight: '33.6px' },
  imageStyle: { fontWeight: '400', fontSize: '24px', lineHeight: '33.6px' },
  imageAuthor1: { fontWeight: '500', fontSize: '28px', lineHeight: '39.2px' },
  imageTitle1: { fontWeight: '600', fontSize: '24px', lineHeight: '33.6px',color: 'text.secondary' },
  imageYear1: { fontWeight: '400', fontSize: '24px', lineHeight: '33.6px' },
  imageSize1: { fontWeight: '400', fontSize: '24px', lineHeight: '33.6px' },
  imageMaterial1: { fontWeight: '400', fontSize: '24px', lineHeight: '33.6px' },
  imageStyle1: { fontWeight: '400', fontSize: '24px', lineHeight: '33.6px' },
  paginationContainer: { display: 'flex', justifyContent: 'center' },
  pagination: {
    '& .MuiPaginationItem-root': {
      fontWeight: '400',
      fontSize: '20px',
      lineHeight: '24.2px',
      color: '#757575',
    },
    '& .MuiPaginationItem-root.Mui-selected': {
      color: '#252525',
    },
  },
};

export default styles;