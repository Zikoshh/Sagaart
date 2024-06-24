import { Box, Typography } from "@mui/material";
import { title } from "./constants/data.ts";
import styles from "./constants/styles.ts";

const OnSale = () => {
 return (
  <Box sx={styles.subscription}>
   <Typography sx={styles.title}>{title}</Typography>
  </Box>
 );
};

export default OnSale;
