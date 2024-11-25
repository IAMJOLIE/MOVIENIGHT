import { Box, Typography, Button, IconButton, Divider } from "@mui/material";
import { useMovie } from "./ConText/MovieContext";
import { useState } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MovieIcon from "@mui/icons-material/Movie"; // Import an icon for visual enhancement
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { useNavigate } from "react-router";

const Watched = () => {
  const { watched, removeFromWatched, addToMyList } = useMovie();
  const [showText, setShowText] = useState({});
const nav = useNavigate();
  const iconButtonClick = (imdbID) => {
    setShowText((prev) => ({
      ...prev,
      [imdbID]: !prev[imdbID],
    }));
  };

  const handleMouseLeave = (imdbID) => {
    setShowText((prev) => ({
      ...prev,
      [imdbID]: false,
    }));
  };

  return (
    <Box
    py={4}
    sx={{
      position: "relative",
      top: "30px",
      px: { sm: 6, xs: 0 },
     marginBottom: '200px'  
     
      
    }}
  >
    <Box sx={{ color: "text.primary", px: 3 }}>
      <h1> Watched List </h1>
    </Box>
    {watched.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            p: 4,
            maxWidth: 600,
            mx: "auto",
          }}
        >
          <MovieIcon sx={{ fontSize: 80, color: "text.secondary", mb: 2 }} />
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            No Movies Watched Yet
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3, px: 2 }}>
            Keep track of movies you’ve watched by adding them to your watched list. 
            Start exploring and see what catches your eye!
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => nav("/")}
            sx={{
              px: 4,
              py: 1,
              borderRadius: "20px",
              textTransform: "none",
              fontWeight: "bold",
            }}
          >
            Browse Movies
          </Button>
        </Box>
      ) : (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        gap: {xs: 7,  sm : 3},
        py: 6,
        marginBottom: "200px",
       
        justifyContent: {xs: "center", sm: 'center', md: 'flex-start'},
       
      }}
    >
        {watched.map((movie) => (
       <Box
       key={movie.imdbID}
       onMouseLeave={() => handleMouseLeave(movie.imdbID)}
      
       sx={{
         my: 1,
         mx: 2,
        
         
         
         backgroundColor: "#1b1b1b",
         width: 310,
         display: "flex",
         flexDirection: "column",
      
         position: "relative",
         transition: "all 0.3s ease, box-shadow 0.3s ease",

         "&:hover": {
           transform: {
             sm: "scale(1.3)",
             xs: "scale(1.1)",
             md: "scale(1.3)",
           },

           boxShadow: "0px 4px 20px  rgba(0, 0, 0, 0.9)",
           width: 300,
          
          

           zIndex: 1000,
         },

       
        }}
      >
        {movie.Poster && movie.Poster !== "N/A" ? (
          <img
          className="img"
          height={"280px"}
          style={{ borderRadius: 8 ,filter: "brightness(0.5)" }}
          src={movie.Poster}
          alt="Movie Poster"
        />
        ) : (
          <Box className="No-img"
          sx={{
            backgroundImage: "linear-gradient(to right, black, grey)",
            
           height: 280,
          
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ color: "text.secondary" }}>
            No image found{" "}
          </Typography>
        </Box>
        )}
        

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 1,
            gap: 1,
            px: 2,
            py: 1
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ color: "text.primary" }}>
              {movie.Title}
            </Typography>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <Typography sx={{ color: "text.secondary" }}>
                {movie.Year}
              </Typography>
              <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
                {movie.Type}
              </Typography>
              <Box
                sx={{
                  width: 30,
                  height: 16,
                  border: 1,
                  color: "text.secondary",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    fontSize: 11,
                  }}
                >
                  {" "}
                  HD
                </p>
              </Box>
            </Box>
          </Box>
              <IconButton
                variant="circle"
                onClick={() => iconButtonClick(movie.imdbID)}
                sx={{ width: 30, height: 30, border: 1, color: "text.primary" }}
              >
                {showText[movie.imdbID] ? (
                  <ArrowDropUpIcon />
                ) : (
                  <ArrowDropDownIcon />
                )}
              </IconButton>
            </Box>
            {showText[movie.imdbID] && (
              <Box
                className="infoBox"
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  position: "absolute",
                  top: "100%",
                  flexDirection: "column",
                  width: "100%",
                  px: 2,

                  backgroundColor: "#1b1b1b",
                  height: 170,
                  left: 0,
                }}
              >
                <Box>
                  <Divider
                    sx={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
                  />

                  <Typography
                    py={1}
                    px={1}
                    sx={{
                      color: "text.secondary",
                      fontSize: 14,
                      backgroundColor: "background.paper",
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus maiores qui debiti voluptatum minima porro
                    placeat et, quia, veritatis soluta obcaecati nulla.
                  </Typography>

                  <Divider
                    sx={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
                  />
                  <Box sx={{ display: "flex" }}>
                    <IconButton
                      sx={{ color: "text.primary", }}
                      onClick={() => removeFromWatched(movie.imdbID)}
                    >
                      <VisibilityOffIcon sx={{fontSize: 30}}  />
                    </IconButton>
                    <IconButton
                      sx={{ color: "text.primary",  }}
                      onClick={() => {
                        removeFromWatched(movie.imdbID), addToMyList(movie);
                      }}
                    >
                      <AddCircleIcon sx={{fontSize: 30}} />
                    </IconButton>
                  </Box>
                </Box>

                <Divider />
              </Box>
            )}
          </Box>
        ))}
      </Box>
      )}
    </Box>
  );
};

export default Watched;
