import { Box, styled } from "@mui/material";
import type { BoxProps } from "@mui/material/Box";

const MyBox = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
  [theme.breakpoints.up("sm")]: {
    paddingLeft: theme.spacing(7),
    paddingRight: theme.spacing(7),
  },
  [theme.breakpoints.up("md")]: {
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
  },
  [theme.breakpoints.up("lg")]: {
    paddingLeft: theme.spacing(12),
    paddingRight: theme.spacing(12),
  },
  [theme.breakpoints.up("xl")]: {
    paddingLeft: theme.spacing(15),
    paddingRight: theme.spacing(15),
  },
}));

export default MyBox;
