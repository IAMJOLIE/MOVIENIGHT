import { Box, IconButton, Typography } from "@mui/material";

import ThumbUpIcon from '@mui/icons-material/ThumbUp';

import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CancelIcon from '@mui/icons-material/Cancel';
import ThumbsUpDownOutlinedIcon from '@mui/icons-material/ThumbsUpDownOutlined';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { useState } from "react";
import { useMovie } from "./ConText/MovieContext";



const Expanded = ({m, close}) => {
const [selectedFeedback, setSelectedFeedback] = useState(null)
const [showLikeDislike, setShowLikeDisLike] = useState(false); 
const {  addToMyList,
  addToWatched,
  removeFromWatched,
  removeFromMyList,
  isInWatched,
  isInMyList, } = useMovie();
  const handleMouseEnter = () => setShowLikeDisLike(true);
  const handleMouseLeave = () => setShowLikeDisLike(false);

const handleFeedback = (feedback) => {
  setSelectedFeedback(feedback)
  setShowLikeDisLike(false)

}
const handleToggleMyList = () => {
  if (isInMyList(m.imdbID)) {
    removeFromMyList(m.imdbID);
  } else {
    addToMyList(m);
  }
};

const handleToggleWatched = () => {
  if (isInWatched(m.imdbID)) {
removeFromWatched(m.imdbID)
  } else {
    addToWatched(m)
  }
}



 
  return ( 
    <Box sx={{ width: {lg: '70%', md: '70%', sm: '70%'},   transform: 'translate(-50%, -50%)',     top: '70%',
    left: '50%',
 backgroundColor: '#1b1b1b', position: 'fixed',  zIndex: 10,   height: '900px', display: 'flex', overflowY: 'auto', paddingBottom: 40,
    flexDirection: 'column', justifyContent: 'space-between', gap: 0, alignItems: 'flex-start',
    scrollbarWidth: 'none',

   
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    }}>
      
   
      
      <img src={m.Poster} alt={m.Title} style={{ width: "100%", height: 400, borderRadius: 6, position: 'relative'    }} />
      <Box
sx={{
position: 'absolute',
top: 0,
left: 0,
width: '100%',
height: '100%',
backgroundColor: 'rgba(0, 0, 0, 0.2)' 
}}
/>
<IconButton onClick={close} sx={{position: 'absolute', left: {sm: '85%', md: '90%', xs: '76%'} }}
    >
    <HighlightOffRoundedIcon sx={{ fontSize: 50, color: "white",  borderRadius: 10  }}/>
      </IconButton>
     
     
      

      
        <Box  sx={{position: 'absolute', top: {sm: '40%', xs: '36%'}, paddingX: {md: 5, sm: 2, xs: 1}, display: 'flex', gap : {md: 5, sm: 2, xs: 1}, color: 'text.secondary'}}>
          <IconButton   onClick={handleToggleMyList}
           >
            {isInMyList(m.imdbID) ? <CancelIcon  sx={{ fontSize: {sm: 50, xs: 30}, color: "text.primary" }}/> :             < AddCircleOutlinedIcon  sx={{ fontSize: {sm: 50, xs: 30}, color: "text.primary" }}/> 
 }
          </IconButton>
          <IconButton   onClick={ handleToggleWatched}
         >
          {isInWatched(m.imdbID) ? <VisibilityOffIcon sx={{ fontSize: {sm: 50, xs: 30}, color:  "text.primary"  }} />   :   <VisibilityIcon sx={{ fontSize: {sm: 50, xs: 30}, color:  "text.primary"  }}/> 
}
          </IconButton>
          <Box
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{ position: 'relative' }}
      >

        {!showLikeDislike && !selectedFeedback && (
          <IconButton>
            <ThumbsUpDownOutlinedIcon sx={{ fontSize: {sm: 60, xs: 40}, color: "text.primary" }} />
          </IconButton>
        )}

       
        {showLikeDislike && (
          <Box
            sx={{
              display: 'flex',
              position: 'absolute',
           
           
              bottom: 60,
              gap: 1,
              transform: "scale(1.1)"
            }}
          >
            <IconButton onClick={() => handleFeedback("like")}>
              <ThumbUpOutlinedIcon sx={{ fontSize: {xs: 35, sm: 50, md: 50}, color: selectedFeedback === "like" ? "text.primary" : "text.primary" }} />
            </IconButton>
            <IconButton onClick={() => handleFeedback("dislike")}>
              <ThumbDownOutlinedIcon sx={{ fontSize: {xs: 35, sm: 50, md: 50}, color: selectedFeedback === "dislike" ? "text.primary" : "text.primary" }} />
            </IconButton>
          </Box>
        )}

      
        {selectedFeedback === "like" && (
          <IconButton>
            <ThumbUpIcon sx={{ fontSize: {xs: 35, sm: 50, md: 50}, color: "text.primary" }} />
          </IconButton>
        )}
        {selectedFeedback === "dislike" && (
          <IconButton>
            <ThumbDownIcon sx={{ fontSize: {xs: 35, sm: 50, md: 50}, color: "text.primary" }} />
          </IconButton>
        )}

 </Box>
         
         

        </Box>
        <Box   sx={{paddingX: {md: 5, sm:2, xs: 2},  mt : 5  }}>
        <Box sx={{display: 'flex', gap :{sm: 6, xs: 1}, alignItems: 'center',  color: "text.primary", }}>
      <Typography variant={{ md: "h3",  xs: "h6"}} sx={{
whiteSpace: 'normal',  
wordBreak: 'break-word', width:{xs: 150, md: '80%', sm: 300 }}} >{m.Title}</Typography>
      <Typography variant={{ md: "h6", xs: "h9"}}> {m.imdbRating}</Typography>
      </Box>
      <Box sx={{display: 'flex', gap: 3, mt: 1 ,color: 'text.primary'}}>
      
      <Typography variant="body1" >{m.Year}</Typography>
      <Typography variant="body1"> {m. runtime}</Typography>

      </Box >
      <Box sx={{  mt: 6, width: '100%', display:  'flex',    flexDirection: {sm :'row', xs: 'column'}, justifyContent: 'space-between', gap: 3}}>
      <Typography variant={{md: "body2", sm: "body1", xs: "body1" } }   sx={{
whiteSpace: 'normal',  
wordBreak: 'break-word', 
color: 'text.secondary',
width: {lg: 500,  md: 400, sm : 350, xs: 200}
}}  > lorem veritatis perferendis asperiores, dolorem laborum veniam molestiae iste.veritatis perferendis asperiores, dolorem laborum veniam molestiae iste, sapiente voluptate.</Typography>
     
<Box sx={{maxWidth: {md: 300, sm: 120},  wordBreak: 'break-word', whiteSpace: 'normal',}}>

      <Typography variant="body2" >
      <Box  color={'text.secondary'}>
      Genre:
      </Box>
      {m.Genre} 
      </Typography>
        {m.director ? (
  <Typography variant="body2"  color="text.primary"> 
  <Box color={'text.secondary'} > Director: </Box> {m.director}  </Typography>
        ): (
          <Typography variant="body2"  color="text.primary"> 
  <Box color={'text.secondary'} > Seasons: </Box> {m.seasons}  </Typography>
        )}
      


</Box>
      </Box>
      </Box>
      
    
    
   
    </Box>

   );
}
 
export default Expanded;
