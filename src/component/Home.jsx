
import { Box, Button, Divider, IconButton, Modal, Skeleton, TextField, Typography, useMediaQuery } from "@mui/material";
import { popularMovies, popularSeries } from "../utils/fakeData";
import { useEffect, useRef, useState } from "react";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { buttonStyleM } from "../utils/style";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import Expanded from "./Expanded";

const Home = () => {
  const movieScroll = useRef(null);
  const serieScroll = useRef(null);
  const [isLoading, setIsLoading] = useState(true)
  const [expandedTvShowId, setExpandedTvShowId] = useState(null)
  const [currentPoster, setCurrentPoster] = useState(getRandomPoster)


  function getRandomPoster() {
    const allPosters = [...popularMovies, ...popularSeries];
    return allPosters[Math.floor(Math.random() * allPosters.length)];
  }

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 600);
  })


  useEffect(() => {
   
    const intervalId = setInterval(() => {
      setCurrentPoster(getRandomPoster());
    }, 20000);
    return () => clearInterval(intervalId);

  }, []);

  const scrollRight = (ref) => {
    const isSmallScreen = window.innerWidth < 600 ? 330 : 700;
    if (ref.current) {
      ref.current.scrollBy({ 
        left:  isSmallScreen
        , behavior: "smooth" });
    }
  };

  const scrollLeft = (ref) => {
   
    const isSmallScreen = window.innerWidth < 600 ? 330 : 700;
    
    if (ref.current) {
      ref.current.scrollBy({
        left: -isSmallScreen, 
        behavior: "smooth",
      });
    }
  };

  const clickToShowInfo = (imdbID) => {
    setExpandedTvShowId(expandedTvShowId === imdbID ? null : imdbID);
    
  }

  const close = () => {
    setExpandedTvShowId(null)

  }

 
 

  return (
    <Box
      sx={{
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
       
        backgroundColor: '#1C1C1C',
        position: 'relative',
        width: '100%'
       
      }}
    >


  <Box>

<Box  className="rollandeimg" sx={{  width: '100%', height: 500, objectFit: 'cover',     animation: "fade 2s ease-in-out",
          position: "absolute",
          top: 0,
          left: 0,
          filter: "brightness(0.4) blur(2px)", 
         }}>
        {currentPoster && currentPoster.Poster &&(

          <img src={currentPoster.Poster} alt={currentPoster.Title} style={{width: '100%', height: 500}} />
        )}

      </Box>
      <Box  sx={{position: 'absolute', top: '5%', left: '10%', }}> 

    <Typography sx={{fontSize: 200}} > <h1 className="customFont">MovieNight</h1></Typography>

    <Box mt={3} sx={{display: 'flex', flexDirection: 'column' }}>
    {isLoading ? (
  <Skeleton variant="text" sx={{  width: '300', height: 100}} />
) : (
  currentPoster && currentPoster.Title && (
    <Typography variant="h3" sx={{color: 'text.secondary'}}>{currentPoster.Title}</Typography>
  )
 )}
    {isLoading ? (
  <Skeleton variant="text" sx={{  width: '400', height: 50}} />
) : (
  currentPoster && currentPoster.Genre && (
    <Typography variant="h6"sx={{color: 'text.secondary'}}>{currentPoster.Genre}</Typography>
  )
)}
    
     
      </Box>
      </Box>
  </Box>

     
     
    <Box sx={{ width: '100%', paddingX: 5, mt: 45, zIndex: 1 }}>
        <Typography variant="h3" sx={{ fontSize: 30 }}>Top 10 movies</Typography>
      </Box>

      <Box sx={{ position: "relative", '&:hover .scroll-button': { opacity: 1 } }}>
      <Box className="scroll-button"
          sx={{
            opacity: 0,
            position: "absolute",
            top: "8%",
            left: 0,
            backgroundColor: "#12121266",
            
            width: 50,
            height: "320px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1
          }}
        >
          <IconButton
            onClick={() => scrollLeft(movieScroll)}
            sx={{ color: "text.primary" }}
          >
            <ArrowBackIosOutlinedIcon sx={{ fontSize: 50 }} />
          </IconButton>
        </Box>
        <Box
          ref={movieScroll}
          sx={{
            display: "flex",
            flexDirection: "row",
            overflowX: "hidden",
            gap: 4,
            whiteSpace: "nowrap",
            paddingBottom: 3,
            width: "100%",
            maxWidth: '100vw',
            scrollBehavior: "smooth",
            pointerEvents: "auto",
            paddingTop: 3, 
            mt: 2,
            paddingX: {sm: 2, xs: 4}
          }}
        > 
       
         
          {popularMovies.map((m) => (
            <Box key={m.imdbID} sx={{ position: 'relative', display: "inline-block" }}>
 
              {expandedTvShowId !== m.imdbID ? (
                <Box
                  sx={{ 
                    transition: "all 0.7s ease, box-shadow 0.3s ease",
                    '&:hover': {
                      transform: "scale(1.1) translateY(-10px)",
                      boxShadow: "2px 6px 20px rgba(0, 0, 0, 0.9)",
                    },
                    '&:hover .info-box': {
                      display: 'flex'
                    },
                  }}
                >
                  {isLoading ? (
                    <Skeleton variant="squary" width={300} height={300} />
                  ) : ( <img
                    src={m.Poster}
                    alt={m.Title}
                    style={{ width: "300px", height: "300px" }}
                  /> )}
                 
                  <Box
                    className="info-box"
                    sx={{
                      display: "none",
                      position: "absolute",
                      top:'80%' ,
                     height: 60,
                      width: "100%",
                      backgroundColor: "#1b1b1b",
                      padding: 2,
                      color: "white",
                      zIndex: 5, 
                      transition: "all 0.1s ease"

                    }}
                  >
                   
                    <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: 2}}>

                        <Typography variant="body2" sx={{ fontSize: 12,  whiteSpace: 'normal',  flexGrow: 1,
                    wordBreak: 'break-word', width: 170}}>{m.Title}</Typography>
             
                      <IconButton onClick={() => clickToShowInfo(m.imdbID)}
                         variant="circle"
                       
                         sx={{ width: 20, height: 20, border: 1, color: "text.primary" }}>
                        <ArrowDropDownIcon />
                      </IconButton>
                    </Box>
                  </Box>
                </Box>
              ) : (
                <Expanded m={m} close={close}/>
              )}
            </Box>
          ))}
        </Box>
     

  

        <Box className="scroll-button"
          sx={{
            opacity: 0,
            position: "absolute",
            top: "4%",
            right: 0,
            backgroundColor: "#12121266",
            width: 50,
            height: "90%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1
          }}
        >
          <IconButton
            onClick={() => scrollRight(movieScroll)}
            sx={{ color: "text.primary" }}
          >
            <ArrowForwardIosIcon sx={{ fontSize: 50 }} />
          </IconButton>
        </Box>
      </Box>



 
      

<Box sx={{ width: '100%', paddingX: 5, mt: 4 }}>
  <Typography variant="h3" sx={{ fontSize: 30 }}>Top 10 movies</Typography>
</Box>

<Box sx={{ position: "relative", '&:hover .scroll-button': { opacity: 1 } }}>
<Box className="scroll-button"
    sx={{
      opacity: 0,
      position: "absolute",
      top: "8%",
      left: 0,
      backgroundColor: "#12121266",
      
      width: 50,
      height: "320px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1
    }}
  >
    <IconButton
      onClick={() => scrollLeft(serieScroll)}
      sx={{ color: "text.primary" }}
    >
      <ArrowBackIosOutlinedIcon sx={{ fontSize: 50 }} />
    </IconButton>
  </Box>
  <Box
    ref={serieScroll}
    sx={{
      display: "flex",
      flexDirection: "row",
      overflowX: "hidden",
      gap: 4,
      whiteSpace: "nowrap",
      paddingBottom: 3,
      width: "100%",
      maxWidth: '100vw',
      scrollBehavior: "smooth",
      pointerEvents: "auto",
      paddingTop: 3, 
      mt: 2,
      paddingX: {sm: 2, xs: 4}
    }}
  >
    {popularSeries.map((m) => (
      <Box key={m.imdbID} sx={{ position: 'relative', display: "inline-block" }}>

        {expandedTvShowId !== m.imdbID ? (
          <Box
            sx={{
              transition: "all 0.7s ease, box-shadow 0.3s ease",
              '&:hover': {
                transform: "scale(1.1) translateY(-10px)",
                boxShadow: "2px 6px 20px rgba(0, 0, 0, 0.9)",
              },
              '&:hover .info-box': {
                display: 'flex'
              },
            }}
          >

            {isLoading ? (
              <Skeleton variant="squary" width={300} height={300}/>
            ) : (
              <img
              src={m.Poster}
              alt={m.Title}
              style={{ width: "300px", height: "300px" }}
            />
            )}
           
            <Box
              className="info-box"
              sx={{
                display: "none",
                position: "absolute",
                top:'80%' ,
               height: 60,
                width: "100%",
                backgroundColor: "#1b1b1b",
                padding: 2,
                color: "white",
                zIndex: 5, 
                transition: "all 0.1s ease"

              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-around'}}>
                <Typography variant="body2" sx={{ fontSize: 12,  whiteSpace: 'normal',  
wordBreak: 'break-word', width: 170}}>{m.Title}</Typography>
                <IconButton onClick={() => clickToShowInfo(m.imdbID)}
                   variant="circle"
                 
                   sx={{ width: 20, height: 20, border: 1, color: "text.primary" }}>
                  <ArrowDropDownIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>
        ) : (
          <Expanded m={m} close={close}/>
        )}
      </Box>
    ))}
  </Box>




  <Box className="scroll-button"
    sx={{
      opacity: 0,
      position: "absolute",
      top: "4%",
      right: 0,
      backgroundColor: "#12121266",
      width: 50,
      height: "90%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1
    }}
  >
    <IconButton
      onClick={() => scrollRight(serieScroll)}
      sx={{ color: "text.primary" }}
    >
      <ArrowForwardIosIcon sx={{ fontSize: 50 }} />
    </IconButton>
  </Box>
</Box>
        <Box
        sx={{
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          color: 'text.primary',
          p: 4,
          mt: 'auto',
          textAlign: 'center',
        }}
      >
        <Typography variant="h5" sx={{ mb: 2 }}>About MovieNight</Typography>
        <Typography variant="body2" sx={{ mb: 2, maxWidth: 600, mx: 'auto' }}>
          MovieNight is your go-to platform for discovering amazing movies and series. With our curated collection and exclusive features, you can find and enjoy cinema at your fingertips.
        </Typography>
        <Typography variant="h6" sx={{ mb: 2 }}>Stay Connected</Typography>

       
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            maxWidth: 400,
            mx: 'auto',
            mb: 2,
          }}
        >
          <TextField
            variant="outlined"
            label="Your Email"
            type="email"
            fullWidth
            sx={{
              backgroundColor: 'text.primary',
              borderRadius: 1,
            }}
          />
          <Button variant="contained" color="primary">
            Subscribe
          </Button>
        </Box>
      </Box>

    </Box>
  );
};

export default Home;

