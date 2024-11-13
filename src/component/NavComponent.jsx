import {
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import DehazeIcon from "@mui/icons-material/Dehaze";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import MoodRoundedIcon from "@mui/icons-material/MoodRounded";
import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { buttonStyleM } from "../until/style";
import Search from "./Search";

const NavComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null)

  const nav = useNavigate();

  const handleSearchClick = () => {
    nav("/search");
    setSearchOpen(true);
  };

  const handleMenuClick = (path) => {
    setMenuOpen(false);
    nav(path);
  };

  useEffect (() => {
    const handelClickOutside = (event) => {

if (menuRef.current && !menuRef.current.contains(event.target)){
  setMenuOpen(false);
}
    }
    document.addEventListener("mousedown", handelClickOutside);

    return () => {
      document.removeEventListener("mousedown", handelClickOutside)
    }
  }, [])

  useEffect(() => {
    if (location.pathname === "/search") {
      setSearchOpen(true);
    } else {
      setSearchOpen(false);
    }
  }, [location.pathname]);

  return (
    <Box
      px={3}
      py={1}
      sx={{
        width: "100%",
        position: "relative",
   
    
        top: 0,
        height: 85,
        
        backgroundImage: "linear-gradient(270deg, #000000, #121212, #1E1E1E)",
        animation: "gradient 15s ease infinite",
        backgroundSize: "400% 400%",
      }}
    >
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Box py={1} sx={buttonStyleM}>
            <h2 className="customFont">MovieNight</h2>
          </Box>
        </Box>

        <Box
          sx={{
            display: { md: "flex", sm: "none", xs: "none" },
            gap: 2,
            alignItems: "center",
            
          }}
        >
          {!searchOpen && (
            <IconButton
              onClick={handleSearchClick}
              sx={{ flexDirection: "column", display: "flex" }}
            >
              <Box>
                <SearchIcon
                  sx={{
                    color: "text.secondary",
                    fontSize: 30,
                    position: "relative",
                  }}
                />

                <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
                  Search
                </Typography>
              </Box>
            </IconButton>
          )}
          <NavLink className={"nav-links"} to={"/mylist"}>
            <IconButton sx={{ flexDirection: "column", display: "flex" }}>
              <AddCircleOutlineRoundedIcon sx={{ fontSize: 30 }} />
              <Typography sx={{ fontSize: 14 }}>My List</Typography>
            </IconButton>
          </NavLink>

          <NavLink className={"nav-links"} to={"/watched"}>
            <IconButton
              className="nav-links"
              sx={{ flexDirection: "column", display: "flex" }}
            >
              <MoodRoundedIcon sx={{ fontSize: 30 }} />
              <Typography sx={{ fontSize: 14 }}>Watched</Typography>
            </IconButton>
          </NavLink>
          <Divider orientation="vertical" flexItem />
          <NavLink className={"nav-links"} to={"/"}>
            <IconButton
              className="nav-links"
              sx={{ flexDirection: "column", display: "flex" }}
            >
              <HomeIcon sx={{ fontSize: 30 }} />
              <Typography sx={{ fontSize: 14 }}>Home</Typography>
            </IconButton>
          </NavLink>
        </Box>

        <Box sx={{ display: { md: "none", sm: "flex", pointerEvents: 'cursor'} }}>
          <IconButton
            sx={{ color: "text.secondary", fontSize: 60 }}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <DehazeIcon sx={{ fontSize: 50 }} />
          </IconButton>
          {menuOpen && (
            <Box
            ref={menuRef}
              sx={{
               
                position: "absolute",
                top: 85,
                right: 0,
                width: { sm: 340, xs: 200 },
                height: 260,
                backgroundColor: "background.paper",
                color: "text.secondary",
                zIndex: 2000,
                
              }}
            >
              <MenuList>
                <MenuItem
                  onClick={() => {
                    handleSearchClick();
                    handleMenuClick("/search");
                  }}
                >
                  <ListItemIcon>
                    <SearchIcon
                      sx={{ size: "small", color: "text.secondary", my: 1 }}
                    />
                  </ListItemIcon>
                  <ListItemText>search</ListItemText>
                </MenuItem>

                <MenuItem onClick={() => handleMenuClick("/mylist")}>
                  <ListItemIcon>
                    <AddCircleOutlineRoundedIcon
                      sx={{ size: "small", color: "text.secondary", my: 1 }}
                    />
                  </ListItemIcon>
                  <ListItemText>My List</ListItemText>
                </MenuItem>

                <MenuItem onClick={() => handleMenuClick("/watched")}>
                  <ListItemIcon>
                    <MoodRoundedIcon
                      sx={{ size: "small", color: "text.secondary", my: 1 }}
                    />
                  </ListItemIcon>
                  <ListItemText>Watched</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => handleMenuClick("/")}>
                  <ListItemIcon>
                    <HomeIcon
                      sx={{ size: "small", color: "text.secondary", my: 1 }}
                    />
                  </ListItemIcon>
                  <ListItemText>Home</ListItemText>
                </MenuItem>
              </MenuList>
            </Box>
          )}
        </Box>
      </Box>
      <Search isOpen={searchOpen} setSearchOpen={setSearchOpen} />
    </Box>
  );
};

export default NavComponent;
