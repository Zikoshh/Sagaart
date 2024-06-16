import { Box } from "@mui/material";
import Logo from "../../shared/ui/Logo";
import { logoSize } from "./constants";
import SearchInput from "../../shared/ui/SearchInput";
import NavLink from "../../shared/ui/NavLink";
import Button from "../../shared/ui/Button";

const Header = () => {
 return (
  <Box sx={{ p: "28px 80px", display: "flex", columnGap: "66px" }}>
   <Box sx={{ display: "flex", columnGap: "48px", width: "100%" }}>
    <Logo width={logoSize.width} height={logoSize.height} />
    <Box
     sx={{
      paddingBottom: "11px",
      display: "flex",
      flexDirection: "column",
      rowGap: "28px",
      maxWidth: "1150px",
      width: "100%",
     }}
    >
     <SearchInput />
     <Box
      sx={{
       display: "flex",
       justifyContent: "space-between",
      }}
     >
      <NavLink rout="/main" text="Главная" />
      <NavLink rout="/catalog" text="Каталог" />
      <NavLink rout="/appraisal" text="Честная оценка " />
      <NavLink rout="/pricing" text="Ценообразование" />
      <NavLink rout="/consultation" text="Арт-консультация" />
      <NavLink rout="/news" text="Новости" />
     </Box>
    </Box>
   </Box>
   <Box sx={{ display: "flex", alignItems: "flex-start", columnGap: "12px" }}>
    <Button
     text="Вход"
     bgColor="white"
     padding="16px 0"
     fontSize="24px"
     lineHeight="33.6px"
     width="140px"
     color="#252525"
     borderColor="#757575"
    />
    <Button
     text="Регистрация"
     bgColor="#252525"
     padding="16px 0"
     fontSize="24px"
     lineHeight="33.6px"
     width="232px"
     color="white"
    />
   </Box>
  </Box>
 );
};

export default Header;
