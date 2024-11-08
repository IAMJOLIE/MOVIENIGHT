import { Box, ListItem, Typography, Button, Skeleton,  } from "@mui/material";

import { useMovie } from "./ConText/MovieContext";
import { buttonStyleM } from "../until/style";

const ListMovie = ({ movie, isLoading }) => {
  const {
    addToMyList,
    addToWatched,
    removeFromWatched,
    removeFromMyList,
    isInWatched,
    isInMyList,
  } = useMovie();

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
        width: { sm: '100%', xs: 320 },
        position: "relative",
        top: { sm: 0, xs: 30 },
        py: { xs: 2, sm: 3 },
        px: {sm: 2, xs: 0}
      
      
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

      
      <ListItem
        sx={{
          display: "flex",
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
          <Box
            sx={{
              width: { sm: 500, xs: "100%" },
              height: { sm: 350, xs: 250 },
            }}
          >
            <img
              className="img"
              style={{ width: "100%", height: "100%", borderRadius: 8 }}
              src={movie.Poster}
              alt="Movie Poster"
            />
          </Box>
        ) : (
          <Box
            sx={{
              backgroundImage: "linear-gradient(to right, black, grey)",
              width: { sm: 500, xs: 270, md: 500 },
              height: { sm: 350, xs: 250 },
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
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
             
            }}
          >
            {movie.Title && movie.Title !== "N/A " ? (
              <Typography sx={{ color: "text.primary" }}>
                <h3>{movie.Title} </h3>
              </Typography>
            ) : (
              "..."
            )}
            {movie.Type && movie.Type !== "N/A " ? (
              <Typography sx={{ color: "text.secondary" }}>
                {movie.Type}{" "}
              </Typography>
            ) : (
              "..."
            )}

            {movie.Year && movie.Year !== "N/A " ? (
              <Typography sx={{ color: "text.secondary" }}>
                {movie.Year}{" "}
              </Typography>
            ) : (
              "..."
            )}
          </Box>
          <Box
            sx={{
              marginBottom: 1,
              display: "flex",
              flexDirection: "row",
              gap: 1,
            }}
          >
            <Button sx={buttonStyleM} onClick={handleToggleMyList}>
              <Typography sx={{ textTransform: "none" }}>
                {isInMyList(movie.imdbID)
                  ? "Remove from List"
                  : "Add to My List"}
              </Typography>
            </Button>
            <Button sx={buttonStyleM} onClick={handleToggleWatched}>
              <Typography sx={{ textTransform: "none" }}>
                {isInWatched(movie.imdbID)
                  ? "Remove from Watched"
                  : "Add to Watched"}
              </Typography>
            </Button>
          </Box>
        </Box>
      </ListItem>
      )}
    </Box>
  );
};

export default ListMovie;
