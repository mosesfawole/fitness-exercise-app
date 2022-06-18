import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="80px" bgColor="##fff3f4">
      <Stack gap="40px" alignItems="center" px="10px" pt="24px">
        <img src={Logo} alt="logo" width="200px" height="40px" />
        <Typography>
          Made with ❤️ by{" "}
          <a href="http://www.github.com/mosesfawole">Moses Fawole</a>
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
