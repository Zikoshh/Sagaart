import { Box, Pagination, PaginationItem, Typography } from "@mui/material";
import { button, cart } from "./constants/data";
import styles from "./constants/styles";
import "./constants/style.css";

import ChevronLeftIcon from "./assets/chevronLeft.svg?react";
import ChevronRightIcon from "./assets/chevronRight.svg?react";

import Button from "../../../shared/ui/Button";

const Cart = () => {
 return (
  <Box sx={styles.cart}>
   <Box sx={styles.container}>
    <Box sx={styles.infoContainer}>
     <Typography sx={styles.title}>{cart.title}</Typography>
    </Box>
    <Box>
     <Box sx={styles.imageSection}>
      <Box component={"img"} src={cart.img} sx={styles.img} />
      <Box sx={styles.imageInfo}>
       <Typography sx={styles.imageAuthor}>{cart.imageAuthor}</Typography>
       <Typography sx={styles.imageTitle}>{cart.imageTitle}</Typography>
       <Typography sx={styles.imageYear}>{cart.imageYear}</Typography>
       <Typography sx={styles.imageSize}>{cart.imageSize}</Typography>
       <Typography sx={styles.imageMaterial}>{cart.imageMaterial}</Typography>
       <Typography sx={styles.imageStyle}>{cart.imageStyle}</Typography>
      </Box>
      <Typography sx={styles.imagePrice}>{cart.imagePrice}</Typography>
     </Box>
     <Box sx={styles.imageSection}>
      <Box component={"img"} src={cart.img1} sx={styles.img1} />
      <Box sx={styles.imageInfo}>
       <Typography sx={styles.imageAuthor1}>{cart.imageAuthor1}</Typography>
       <Typography sx={styles.imageTitle1}>{cart.imageTitle1}</Typography>
       <Typography sx={styles.imageYear1}>{cart.imageYear1}</Typography>
       <Typography sx={styles.imageSize1}>{cart.imageSize1}</Typography>
       <Typography sx={styles.imageMaterial1}>{cart.imageMaterial1}</Typography>
       <Typography sx={styles.imageStyle1}>{cart.imageStyle1}</Typography>
      </Box>
      <Typography sx={styles.imagePrice}>{cart.imagePrice1}</Typography>
     </Box>
    </Box>
   </Box>
   <Box sx={styles.imagePriceTotalPrice}>
    <Typography sx={styles.imagePriceTotalSum}>
     {cart.imagePriceTotalSum}
    </Typography>
    <Typography sx={styles.imagePriceTotal}>{cart.imagePriceTotal}</Typography>
   </Box>
   <Box sx={styles.buttonBuy}>
    <Button
     text={cart.buttonText}
     bgColor={button.bgColor}
     padding={button.padding}
     fontSize={button.fontSize}
     lineHeight={button.lineHeight}
     width={button.width}
     color={button.color}
    />
   </Box>
   <Box sx={styles.paginationContainer}>
    <Pagination
     sx={styles.pagination}
     count={100}
     renderItem={(item) => (
      <PaginationItem
       slots={{ previous: ChevronLeftIcon, next: ChevronRightIcon }}
       {...item}
      />
     )}
    />
   </Box>
  </Box>
 );
};

export default Cart;
