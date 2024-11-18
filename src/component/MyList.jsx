import { Box, Typography, Button, IconButton, Divider } from "@mui/material";
import { useMovie } from "./ConText/MovieContext";
import { useState } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CancelIcon from "@mui/icons-material/Cancel";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import MovieIcon from "@mui/icons-material/Movie";

const MyList = () => {
  const { myList, removeFromMyList, addToWatched, isInMyList  } = useMovie();
  const [showText, setShowText] = useState({});

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
        <h1> My List </h1>
      </Box>
      {myList.length === 0 ?(
         <Box
         sx={{
          mt: 1,
           display: "flex",
           flexDirection: "column",
           alignItems: "center",
           justifyContent: "center",
           height: "60vh",
           textAlign: "center",
           backgroundColor: "#1b1b1b",
           borderRadius: 2,
           padding: 4,
           boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
         }}
       >
         <MovieIcon sx={{ fontSize: 80, color: "text.secondary", mb: 2 }} />
         <Typography variant="h6" color="text.secondary">
           Your list is currently empty.
         </Typography>
         <Typography variant="body1" color="text.secondary" sx={{ mt: 1, mb: 3 }}>
           Start adding your favorite movies and series here!
         </Typography>
         <IconButton sx={{ color: "text.primary", fontSize: 40 }}>
           <PlaylistAddIcon fontSize="large" />
         </IconButton>
       </Box>
      ): (
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
        {myList.map((movie) => (

          
          
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
              style={{ borderRadius: 8, filter: "brightness(0.5)"}}
              src={movie.Poster}
              alt="Movie Poster"
            />
            ) : (
              <Box className="No-img"
              sx={{
                backgroundImage: "linear-gradient(to right, black, grey)",
                
               height: 280,
               borderRadius: 8,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography sx={{ color: "text.secondary" }}>
                No image found.
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
              <Box sx={{ display: "flex", flexDirection: "column",  }}>
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
                  <Box sx={{ display: "flex", gap: 2, }}>
                    <IconButton
                      sx={{ color:"text.primary"  }}
                      onClick={() => removeFromMyList(movie.imdbID)}
                    >
                      <CancelIcon  sx={{fontSize: 27}}/>
                    </IconButton>
                    <IconButton 
                      sx={{ color: "text.primary"  }}
                      onClick={() => {
                        removeFromMyList(movie.imdbID), addToWatched(movie);
                      }}
                    >
                      <RemoveRedEyeIcon sx={{fontSize: 30}} />
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

export default MyList;
