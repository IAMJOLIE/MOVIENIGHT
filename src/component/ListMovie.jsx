import { Box, ListItem, Typography, Button, Skeleton, List, IconButton,  } from "@mui/material";

import { useMovie } from "./ConText/MovieContext";
import { buttonStyleM, buttonStyleS } from "../utils/style";
import { useLocation } from "react-router";
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CancelIcon from '@mui/icons-material/Cancel';

import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const ListMovie = ({isLoading, movie}) => {
  
  const {
    addToMyList,
    addToWatched,
    removeFromWatched,
    removeFromMyList,
    isInWatched,
    isInMyList,
   
  } = useMovie();
  if (!movie) {
    return null; 
  }
  const handleToggleMyList = () => {
    if (isInMyList(movie.imdbID)) {
      removeFromMyList(movie.imdbID);
    } else {
      addToMyList(movie);
    }
  };

  const handleToggleWatched = () => {
    if (isInWatched(movie.imdbID)) {
      removeFromWatched(movie.imdbID);
    } else {
      addToWatched(movie);
    }
  };
 

  return (


             <Box
             sx={{
      
               position: "relative",
               top: { sm: 0, xs: 30 },
      
             
             
             }}
           >
             {isLoading ? (
               <Box sx={{  display: "flex",
               flexDirection: "column",
               justifyContent: "flex-start",
               alignItems: "flex-start",
               py: 1,
               px: { sm: 3, xs: 2 },
               width: { sm: 560, xs: 320 },
               backgroundImage: "linear-gradient(270deg, #000000, #121212, #1E1E1E)",
               animation: "gradient 15s ease infinite",
               backgroundSize: "400% 400%",
               opacity: 0.8,
               boxShadow: 2, }}>
               <Skeleton variant="rounded" sx={{ width: { sm: 500, xs: "100%" },
                     height: { sm: 350, xs: 250 }}}/>
               <Skeleton variant="text" sx={{ width: 100}} />
               <Skeleton variant="text" sx={{ width: 100}} />
              
               </Box>
              
             ) : (
       
             
             <Box
               sx={{
                 display: "flex",
                 flexDirection: "column",
                 justifyContent: "flex-start",
                 alignItems: "flex-start",
                position: 'relative',
                  height: 400,
                 width: { sm: 560, xs: 320 },
              backgroundColor: '#1c1c1c',
                 opacity: 0.8,
                 boxShadow: 2,
                 transition: "opacity 0.3s, ",
                 "&:hover": {
                   opacity: 1,
         
                   transform: " scale(1.1)",
                   zIndex: 10,
                 },
               }}
             >
               {movie.Poster && movie.Poster !== "N/A" ? (
                
                 
                   <img
                     className="img"
                     style={{ width: "100%", height: "60%", position: 'relative', filter: "brightness(0.5)", }}
                     src={movie.Poster}
                     alt="Movie Poster"
                   />
                 
               ) : (
                 <Box
                   sx={{
                     backgroundImage: "linear-gradient(to right, black, grey)",
                     width: '100%',
                     height: 240,
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
       
               <Box>
                 <Box
                   marginY={2}
                   sx={{
                    paddingX: 3,
                     display: "flex",
                     flexDirection: "column",
                     alignItems: "flex-start",
                     gap: 1
                    
                   }}
                 >
                   {movie.Title && movie.Title !== "N/A " ? (
                     <Typography variant={{sm :"h3", xs: "h7"}} sx={{ color: "text.primary" }}>
                       {movie.Title || "Title not available"} 
                     </Typography>
                   ) : (
                     "..."
                   )}
                   {movie.Type && movie.Type !== "N/A " ? (
                     <Typography variant="h7" sx={{ color: "text.primary" }}>
                       {movie.Type || "type not available"}{" "}
                     </Typography>
                   ) : (
                     "..."
                   )}
       
                   {movie.Year && movie.Year !== "N/A " ? (
                     <Typography variant="h7"  sx={{ color: "text.primary" }}>
                       {movie.Year || "year not available"}{" "}
                     </Typography>
                   ) : (
                     "..."
                   )}
                 </Box>
                 <Box
                   sx={{
                     marginBottom: 1,
                     display: "flex",
                     flexDirection: "column",
                     gap: 1,
                     position: 'absolute',
                     top: '6%',
                     right: 2
                   }}
                 >
                  <IconButton  onClick={handleToggleMyList} sx={{ color: 'text.primary' }}>
                    {isInMyList(movie.imdbID)
                    ? <CancelIcon sx={{fontSize: 30}} />
                    : <AddCircleOutlinedIcon sx={{fontSize: 30}}/>
                    }
                    
                  </IconButton>
                  <IconButton  onClick={handleToggleWatched} sx={{ color: 'text.primary' }}>
                  {isInWatched(movie.imdbID)
                    ? <VisibilityOffIcon sx={{fontSize: 30}} />
                    : <VisibilityIcon sx={{fontSize: 30}}/>
                    }
                    
                  </IconButton>
                 </Box>
               </Box>
             </Box>
             )}
           </Box>

    
       


   

   

  );
};

export default ListMovie;
