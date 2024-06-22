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
    <Box component={"img"} src={cart.img} sx={styles.img} />
    <Box>
     <Typography sx={styles.imageAuthor}>{cart.imageAuthor}</Typography>
     <Typography sx={styles.imageTitle}>{cart.imageTitle}</Typography>
     <Typography sx={styles.imageYear}>{cart.imageYear}</Typography>
     <Typography sx={styles.imageSize}>{cart.imageSize}</Typography>
     <Typography sx={styles.imageMaterial}>{cart.imageMaterial}</Typography>
     <Typography sx={styles.imageStyle}>{cart.imageStyle}</Typography>
    </Box>
    <Box component={"img"} src={cart.img1} sx={styles.img1} />
    <Typography sx={styles.imageAuthor}>{cart.imageAuthor}</Typography>
    <Typography sx={styles.imageTitle}>{cart.imageTitle}</Typography>
    <Typography sx={styles.imageYear}>{cart.imageYear}</Typography>
    <Typography sx={styles.imageSize}>{cart.imageSize}</Typography>
    <Typography sx={styles.imageMaterial}>{cart.imageMaterial}</Typography>
    <Typography sx={styles.imageStyle}>{cart.imageStyle}</Typography>
   </Box>
   <Button
    text={cart.buttonText}
    bgColor={button.bgColor}
    padding={button.padding}
    fontSize={button.fontSize}
    lineHeight={button.lineHeight}
    width={button.width}
    color={button.color}
   />
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
