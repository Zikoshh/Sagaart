const styles = {
  sellModal: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    p: '60px',
    maxWidth: '880px',
    width: '100%',
    maxHeight: '100%',
    overflow: 'auto',
  },
  header: {
    display: 'flex',
    columnGap: '32px',
  },
  closeButton: {
    padding: '0',
    position: 'absolute',
    top: '35px',
    right: '32px',
  },
  title: {
    fontWeight: '400',
    fontSize: '36px',
    lineHeight: '50.4px',
    maxWidth: '597px',
  },
  inputsContainer: {
    display: 'grid',
    gap: 1,
    gridTemplateColumns: 'repeat(2, 1fr)',
    rowGap: '20px',
    columnGap: '16px',
    marginTop: '58px',
    marginBottom: '20px',
    width: '372px'
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '8px',
    width: '372px'
  },
  inputLabel: {
    fontSize: '20px',
    fontWeight: '500',
    lineHeight: '24.2px',
    color: '#757575',
  },
  input: {
    fontSize: '24px',
    fontWeight: '400',
    lineHeight: '33.6px',
    color: '#252525',
    '& .MuiOutlinedInput-input': {
      padding: '13px 0 13px 24px',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'gray',
    },
  },
  uploadLabel: {
    width: '592px',
    fontSize: '20px',
    fontWeight: '500',
    lineHeight: '24.2px',
  },
    uploadLabelImg: {
    width: '200px',
    fontSize: '20px',
    fontWeight: '500',
    lineHeight: '24.2px',
    margin: "-30px -53px 0px 0px",
    padding: "0px 10px 0px 0px"
  },
  imgProperties: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '4px',
  },
  imgPropertie: {
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '19.36px',
    color: '#757575',
    margin: "0px 0px 0px 0px",
  },
    imgPropertie1: {
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '19.36px',
    color: '#757575',
    margin: "5px 0px 0px 0px",
  },
  price: {
    textAlign: 'end',
    fontSize: '24px',
    lineHeight: '33.6px',
    marginBottom: '10px',
  },
  artImg: {
    display: 'flex',
    objectFit: 'cover',
    objectPosition: 'center',
    borderRadius: '4px',
    margin: '24px 0 12px 0',
    width: "160px",
    height: "162px",
  },
  uploadButton: {
    backgroundColor: 'white',
    height: '30px',
    // minWidth: '100px',
    padding: '0',
    mt: 12,
    mr: 1.6,
    '& .MuiButton-startIcon': {
      margin: '0',
    },
  },
  uploadIcon: {
    color: 'black',
    backgroundColor: 'white',
    border: '1px solid black',
    height: '30px',
    width: '30px',
    mb: 4,
    mr: 1,
  },
  imgContainer: {
        objectFit: 'cover',
        height: '162px',
    width: '160px',
    backgroundSize: "100%",
    display: "flex",
    flexDirection: "column",
  },
  imgBlock: {
    display: "flex",
    gap: "40px",
  }
};

export default styles;
