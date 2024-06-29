const styles = {
main: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '80px',
    margin: '80px',
  },
container: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    columnGap: '40px',
  },
title: {
    fontSize: '64px',
    fontWeight: '600',
    lineHeight: '70.4px',
    color: '#252525',
  },
subtitle: {
    fontSize: '32px',
    fontWeight: '400',
    lineHeight: '38.73px',
    color: '#757575',
    margin: '16px 0 24px 0',
  },
subscriptionImg: {
    width: '100%',
    height: '554px',
    borderRadius: '4px',
    objectFit: 'cover',
    objectPosition: 'center',
  },
catalogImg: {
    width: '100%',
    height: '439px',
    borderRadius: '4px',
    objectFit: 'cover',
    objectPosition: 'center',
  },
buttonsContainer: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '16px',
  },
cardsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    columnGap: '40px',
    gridTemplateRows: '471px',
  },
card: { position: 'relative' },
cardImg: {
    objectFit: 'cover',
    objectPosition: 'center',
    borderRadius: '4px',
    width: '100%',
    height: '100%',
  },
cardTitle: {
    position: 'absolute',
    left: '32px',
    bottom: '32px',
    color: 'white',
  },
SellInfoTitle: {
  fontWeight: '400',
  fontSize: '36px',
  lineHeight: '50.4px',
  margin: '0px 0px 0px 32px',
  width: 597,
  height: 150,
},
SellModal: {
  display: 'flex',
  flexDirection: 'column',
  gap: '40px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 890,
  height: 1029,
  bgcolor: 'background.paper',
  p: 7.50,
},
SellModalHeader: {
  display: 'flex',
},
InputTitle: {
  fontWeight: '400', fontSize: '20px', lineHeight: '24.2px', margin: '0px 0px 16px 0px', color: 'text.secondary'
},
UploadTip: {
  fontWeight: '500', fontSize: '20px', lineHeight: '24.2px', margin: '0px 0px 16px 0px',
},
SellArtInput: {
  width: 768,
  height: 60,
  fontsize: 60,
  fontweight: 800,
  margin: '-8px 0px 20px'
},
SellPrice:{
  fontWeight: '400',
  fontSize: '24px',
  lineHeight: '33.6px',
  margin: '-20px 0px 10px 0px',
  color: 'black',
},
ButtonWidth: '768px',
ButtonfontSize: '24px',

closeButton: {
  padding: '0',
  position: 'absolute',
  top: '35px',
  right: '32px',
},
uploadedImage: {
  Width: "160px",
  Height: "162px",
}
};

export default styles;
