import { NavLink, Form } from 'react-router-dom';
import UploadIcon from '@mui/icons-material/Upload';
import * as React from 'react';
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import {
  Box,
  Typography,
  IconButton,
  TextField,
  styled,
  Button,
  InputAdornment,
} from '@mui/material';
import {
  subscriptionData,
  catalogData,
  subscriptionButton,
  catalogBuyButton,
  catalogSellButton,
  cardsData,
  logoSize,
  modalData,
  button,
} from './constants/data';
import styles from './constants/styles';
import Logo from '../../../shared/ui/Logo';
import CloseIcon from './assets/close.svg?react';
import subscriptionImg from './assets/subscriptionImg.jpeg';
import catalogImg from './assets/catalogImg.png';
import uploadedImage from './assets/uploadedImage.png';
import ButtonUI from '../../../shared/ui/Button';
import MIR from '../../routes/cart/assets/MIR.svg?react';
import PenIcon from '../../routes/cart/assets/pen.svg?react';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
  color: 'black',
});

const Main = () => {
  const [sellModalOpen, setSellModalOpen] = useState(false);
  const [cardModalOpen, setCardModalOpen] = useState(false);

  const handleOpenSellModal = () => {
    setSellModalOpen(true);
  };

  const handleCloseSellModal = () => {
    setSellModalOpen(false);
  };

  const handleOpenCardModal = () => {
    setCardModalOpen(true);
  };

  const handleCloseCardModal = () => {
    setCardModalOpen(false);
  };

  return (
    <Box sx={styles.main}>
      <Box sx={styles.container}>
        <Box>
          <Typography sx={styles.title}>{subscriptionData.title}</Typography>
          <Typography sx={styles.subtitle}>
            {subscriptionData.subtitle}
          </Typography>
          <ButtonUI
            text={subscriptionButton.text}
            bgColor={subscriptionButton.bgColor}
            padding={subscriptionButton.padding}
            fontSize={subscriptionButton.fontSize}
            lineHeight={subscriptionButton.lineHeight}
            width={subscriptionButton.width}
            color={subscriptionButton.color}
          />
        </Box>
        <Box
          component={'img'}
          src={subscriptionImg}
          sx={styles.subscriptionImg}
        ></Box>
      </Box>
      <Box sx={styles.container}>
        <Box component={'img'} src={catalogImg} sx={styles.catalogImg}></Box>
        <Box>
          <Typography sx={styles.title}>{catalogData.title}</Typography>
          <Typography sx={styles.subtitle}>{catalogData.subtitle}</Typography>
          <Box sx={styles.buttonsContainer}>
            <ButtonUI
              text={catalogBuyButton.text}
              bgColor={catalogBuyButton.bgColor}
              padding={catalogBuyButton.padding}
              fontSize={catalogBuyButton.fontSize}
              lineHeight={catalogBuyButton.lineHeight}
              width={catalogBuyButton.width}
              color={catalogBuyButton.color}
            />
            <ButtonUI
              onClick={handleOpenSellModal}
              text={catalogSellButton.text}
              bgColor={catalogSellButton.bgColor}
              padding={catalogSellButton.padding}
              fontSize={catalogSellButton.fontSize}
              lineHeight={catalogSellButton.lineHeight}
              width={catalogSellButton.width}
              color={catalogSellButton.color}
              borderColor={catalogSellButton.borderColor}
            />
          </Box>
        </Box>
      </Box>
      <Box sx={styles.cardsContainer}>
        {cardsData.map((card) => {
          return (
            <Box key={card.title} sx={styles.card}>
              <NavLink to={card.rout}>
                <Box component={'img'} src={card.img} sx={styles.cardImg}></Box>
              </NavLink>
              <Typography sx={styles.cardTitle}>{card.title}</Typography>
            </Box>
          );
        })}
      </Box>
      <SellModalWindow
        open={sellModalOpen}
        handleClose={handleCloseSellModal}
        handleOpenCard={handleOpenCardModal}
      />
      <CardModal open={cardModalOpen} handleClose={handleCloseCardModal} />
    </Box>
  );
};

function SellModalWindow({
  open,
  handleClose,
  handleOpenCard,
}: {
  open: boolean;
  handleClose: () => void;
  handleOpenCard: () => void;
}) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleClose();
    handleOpenCard();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={styles.SellModal}>
        <Box sx={styles.SellModalHeader}>
          <Logo width={logoSize.width} height={logoSize.height} />
          <Typography sx={styles.SellInfoTitle}>
            {modalData.SellTitle}
          </Typography>
          <IconButton onMouseDown={handleClose} sx={styles.closeButton}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Form color="primary" onSubmit={handleSubmit}>
          <Typography sx={styles.InputTitle}>
            {modalData.SellAuthorTitle}
          </Typography>
          <TextField
            sx={styles.SellArtInput}
            inputProps={{ style: { fontSize: 24 } }}
            placeholder="Имя фамилия"
            required
          ></TextField>
          <Typography sx={styles.InputTitle}>
            {modalData.SellArtTitle}
          </Typography>
          <TextField
            sx={styles.SellArtInput}
            inputProps={{ style: { fontSize: 24 } }}
            required
          ></TextField>
          <Typography sx={styles.InputTitle}>
            {modalData.SellArtDescriptionTitle}
          </Typography>
          <TextField
            sx={styles.SellArtInput}
            inputProps={{ style: { fontSize: 24 } }}
            placeholder="Холст, масло ..."
          ></TextField>
          <Typography sx={styles.UploadTip}>{modalData.UploadTip}</Typography>
          <Box>
            <Box
              component={'img'}
              src={uploadedImage}
              sx={styles.uploadedImage}
            ></Box>
            <Typography>{modalData.ImageName}</Typography>
            <Typography>{modalData.ImageSize}</Typography>
          </Box>

          <Button
            sx={{
              backgroundColor: 'white',
              height: '50px',
            }}
            component="label"
            role={undefined}
            tabIndex={-1}
            startIcon={
              <UploadIcon
                sx={{
                  color: 'black',
                  backgroundColor: 'white',
                  border: '1px solid black',
                  height: '30px',
                  width: '30px',
                }}
              />
            }
          >
            <VisuallyHiddenInput type="file" />
          </Button>

          <Box sx={styles.SellPrice}>
            <Typography align="right" sx={styles.SellPrice}>
              {modalData.SellPrice}
            </Typography>
          </Box>
          <ButtonUI
            type="submit"
            text={modalData.buttonText}
            bgColor={button.bgColor}
            padding={button.padding}
            fontSize={styles.ButtonfontSize}
            lineHeight={modalData.buttonlineHeight}
            color={button.color}
            width={styles.ButtonWidth}
          />
        </Form>
      </Box>
    </Modal>
  );
}

function CardModal({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) {
  return (
    <React.Fragment>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={styles.CardModal}>
          <Box sx={styles.CardModalTitleCotainer}>
            <Logo width={logoSize.width} height={logoSize.height} />
            <Typography sx={styles.CardModalTitle}>
              {modalData.CardModalTitle}
            </Typography>
            <IconButton onMouseDown={handleClose} sx={styles.closeButton}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Typography sx={styles.CardModaIDInfo}>
            Иванов Иван, ivanov@gmail.com, +375 29 258 12 13{' '}
          </Typography>
          <Form>
            <Box sx={styles.PurchaseInfoCardArea}>
              <TextField
                inputProps={{ style: { fontSize: 20 } }}
                placeholder="MIR **1111"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MIR width={'77.91'} height={'26'} />
                    </InputAdornment>
                  ),
                }}
                sx={styles.PurchaseInfoCard}
                required
              ></TextField>
              <Box sx={styles.PurchaseInfoPenIcon}>
                <PenIcon type="button" cursor={'pointer'} />
              </Box>
            </Box>
            <ButtonUI
              type="submit"
              text={modalData.cardButtonText}
              bgColor={button.bgColor}
              padding={button.padding}
              fontSize={styles.ButtonfontSize}
              lineHeight={modalData.buttonlineHeight}
              color={button.color}
              width={styles.CardButtonWidth}
            />
          </Form>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default Main;
