import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ListItemButton from "@mui/material/ListItemButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

interface HeaderComponentProps {
  children?: React.ReactNode[];
}

export const HeaderComponent: React.FC<HeaderComponentProps> = ({
  children,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleDrawerOpen = (): void => {
    setOpen(true);
  };

  const handleDrawerClose = (): void => {
    setOpen(false);
  };

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));

  const RightArrow = styled("div")(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  }));

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: "#223041" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            data-testid="hamburguer-menu"
            onClick={handleDrawerOpen}
            sx={{ mr: 2, ...(open && { display: "none" }), color: "#00FFA3" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="div"
            variant="h6"
            noWrap
            data-testid="title-header"
            sx={{
              fontWeight: 400,
              fontSize: "25px",
              fontFamily: "Inter",
              lineHeight: "36.26px",
              position: "relative",
              "&::before": {
                content: "'My'",
                color: "#00FFA3",
              },
              "&::after": {
                content: "'Collection'",
                color: "white",
              },
              display: { xs: "none", sm: "block" },
            }}
          />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="Carrinho de compras"
              color="inherit"
              data-testid="shopping-cart"
              sx={{ marginRight: "8px", color: "#00FFA3" }}
            >
              <Badge badgeContent={17} color="error">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              data-testid="profile-icon"
              sx={{ backgroundColor: "#15202E", color: "white" }}
            >
              <PermIdentityIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
        data-testid="sidebar-menu"
      >
        <DrawerHeader>
          <IconButton data-testid="back-button" onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <TextField
          type="search"
          size="small"
          data-testid="search-bar"
          placeholder="BUSCAR"
          sx={{
            backgroundColor: "#F4F4F4",
            width: "203px",
            left: "18px",
            top: "12px",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <List sx={{ paddingTop: "25px" }}>
          <ListItem key={"Home"} data-testid="home-button" disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "#00FFA3" }}>
                <HomeOutlinedIcon />
              </ListItemIcon>
              <ListItemText sx={{ color: "#00FFA3" }} primary={"Home"} />
              <RightArrow sx={{ color: "#00FFA3" }}>
                <ChevronRightIcon />
              </RightArrow>
            </ListItemButton>
          </ListItem>
          <ListItem key={"Perfil"} data-testid="profile-button" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PermIdentityIcon />
              </ListItemIcon>
              <ListItemText primary={"Perfil"} />
              <RightArrow>
                <ChevronRightIcon />
              </RightArrow>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
};
