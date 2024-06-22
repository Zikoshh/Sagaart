const styles = {
  cart: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '84px',
    margin: '60px 80px 76px 80px',
  },
  container: { display: 'grid', justifyContent: 'space-between' },
  infoContainer: { paddingTop: '20px', width: '754px' },
  img: {
    height: '410px',
    width: '439px',
    objectFit: 'cover',
    objectPosition: 'center',
    borderRadius: '4px',
    margin: '50px 0px',
  },
    img1: {
    height: '410px',
    width: '439px',
    objectFit: 'cover',
    objectPosition: 'center',
    borderRadius: '4px',
  },
  title: { fontWeight: '700', fontSize: '36px', lineHeight: '43.57px' },
  imageAuthor: { fontWeight: '700', fontSize: '36px', lineHeight: '43.57px' },
  imageTitle: { fontWeight: '700', fontSize: '36px', lineHeight: '43.57px' },
  imageYear: { fontWeight: '700', fontSize: '36px', lineHeight: '43.57px' },
  imageSize: { fontWeight: '700', fontSize: '36px', lineHeight: '43.57px' },
  imageMaterial: { fontWeight: '700', fontSize: '36px', lineHeight: '43.57px' },
  imageStyle: { fontWeight: '700', fontSize: '36px', lineHeight: '43.57px' },
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
