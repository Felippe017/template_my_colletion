import React, { useState } from "react";
import { useCart } from "@app/context/CartContext";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { Link } from 'react-router-dom';
import { RightArrow, TitleHeaderTypography, DrawerComponent, TextFieldInput } from './styles'

import {
  ListItemButton, ListItemText, ListItemIcon, ListItem, List, Badge,
  InputAdornment, IconButton, Divider, Toolbar, Box
} from '@mui/material'

import { ChevronLeft, ChevronRight, PermIdentity, ShoppingCartOutlined,
  HomeOutlined, Search, Menu } from '@mui/icons-material'

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
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
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

interface HeaderComponentProps {
  children?: React.ReactNode;
}

export const HeaderComponent: React.FC<HeaderComponentProps> = ({
  children,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const { cart } = useCart();

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
            <Menu />
          </IconButton>
          <Link to="/home" style={{ textDecoration: 'none' }}>
            <TitleHeaderTypography
              noWrap
              data-testid="title-header"
              fontWeight={400}
              fontSize={25}
              fontFamily={'Inter'}
              sx={{ display: { xs: "none", sm: "block" }}}
            />
          </Link> 
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="Carrinho de compras"
              color="inherit"
              data-testid="shopping-cart"
              sx={{ marginRight: "8px", color: "#00FFA3" }}
            >
              <Badge 
                badgeContent={ cart.length ? cart.length : 0 }
                color="error"
                data-testid="total-items-cart"
              >
                <ShoppingCartOutlined />
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
              <PermIdentity />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <DrawerComponent
        width={drawerWidth}
        variant="persistent"
        anchor="left"
        open={open}
        data-testid="sidebar-menu"
      >
        <DrawerHeader>
          <IconButton data-testid="back-button" onClick={handleDrawerClose}>
            <ChevronLeft />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <TextFieldInput
          type="search"
          size="small"
          data-testid="search-bar"
          placeholder="BUSCAR"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
        <List sx={{ paddingTop: "25px" }}>
          <Link to="/home" style={{ textDecoration: 'none' }}>
            <ListItem key={"Home"} data-testid="home-button" disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: "#00FFA3" }}>
                  <HomeOutlined />
                </ListItemIcon>
                <ListItemText sx={{ color: "#00FFA3" }} primary={"Home"} />
                <RightArrow color={"#00FFA3"}>
                  <ChevronRight />
                </RightArrow>
              </ListItemButton>
            </ListItem>
          </Link>  
          <ListItem key={"Perfil"} data-testid="profile-button" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PermIdentity />
              </ListItemIcon>
              <ListItemText primary={"Perfil"} />
              <RightArrow>
                <ChevronRight />
              </RightArrow>
            </ListItemButton>
          </ListItem>
        </List>
      </DrawerComponent>
      <Main open={open}>
        {children}
      </Main>
    </Box>
  );
};
