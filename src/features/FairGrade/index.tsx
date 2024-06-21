import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styles from "./styles";

export default function FairGradeModal() {
 const [open, setOpen] = React.useState(false);
 const fairGradeModalOpen = () => setOpen(true);
 const fairGradeModalClose = () => setOpen(false);

 return (
  <div>
   <Button onClick={fairGradeModalOpen}>Modal test</Button>
   <Modal
    open={open}
    onClose={fairGradeModalClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
   >
    <Box sx={styles}>
     <Typography id="modal-modal-title" variant="h6" component="h2">
      Test image price title
     </Typography>
     <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      modal test
     </Typography>
    </Box>
   </Modal>
  </div>
 );
}
