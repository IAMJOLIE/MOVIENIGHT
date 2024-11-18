import { Box, List, InputBase, IconButton, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import ListMovie from "./ListMovie";
import { useLocation, useNavigate } from "react-router-dom";
import { keyframes } from "@emotion/react";
import SearchIcon from "@mui/icons-material/Search";
import { useMovie } from "./ConText/MovieContext";

const expandWidth = keyframes`
  0% { transform: scaleX(0); }
  100% { transform: scaleX(1); }
`;

const Search = ({ isOpen, setSearchOpen }) => {
  const {setMovie, movie} = useMovie()
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [noMoviesFound, setNoMoviesFound] = useState(false);
  const [error, setError] = useState(""); 
  const location = useLocation();
  const nav = useNavigate()


  useEffect(() => {
    const fetchData = async () => {
        if (searchValue) {
            console.log("API Key:", import.meta.env.VITE_API_KEY);
            setIsLoading(true);
            setNoMoviesFound(false);
           

            const apiKey = import.meta.env.VITE_API_KEY;
            const apiUrl = `https://www.omdbapi.com/?s=${searchValue}&apikey=${apiKey}`;

            try {
              const response = await fetch(apiUrl);
              const data = await response.json();
              
     
              if (data.Search) {
                setMovie(data.Search);
                nav("/search-result", { state: { movies: data.Search } });
              } else {
                setMovie([]);
                setNoMoviesFound(true);
              }
            } catch (error) {
              setError(error.message);
              console.error("Error fetching movies:", error);
            } finally {
              setIsLoading(false);
            }
        }
    };

    fetchData();
}, [searchValue, nav]);

useEffect(() => {
  if (location.pathname !== "/serach-result")
  setMovie([]);
}, [location.pathname, setMovie])


  return (
    <Box>
      <Box sx={{ width: 300, height: 50, zIndex: 10 }}>
        {isOpen && (
          <Box>
            <Box
              sx={{
                width: { md: 340, lg: 440, sm: 250, xs: 300 },
                height: 50,
               
                position: "absolute",
                top: { md: 20, lg: 20, sm: 20, xs: 150 },
                right: { md: 300, sm: 100, xs: "15%" },

                display: isOpen ? "flex" : "none",
                alignItems: "center",
                padding: 1,
                backgroundColor: { xs: "background.paper", sm: "rgba(0, 0, 0, 0.4)" },
                transformOrigin: "right",
                animation: `${expandWidth} 0.8s ease-in-out forwards`,
                overflow: "hidden",
                
                boxShadow: 5,
                zIndex: { md: 1200, sm: 0 },
              }}
            >
              <SearchIcon
                sx={{ color: "white", fontSize: 30, position: "relative" }}
              />
              <InputBase
                sx={{ ml: 1, flex: 1, color: "white", padding: 2 }}
                placeholder="Search for a Movie..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </Box>
          </Box>
        )}
      </Box>
                 
      <Box
        sx={{
          display: "flex",
          justifyContent: 'center', 
          alignItems: 'center',
          width: "100%",
      
         gap: 3,
         mt:   10
        
        }}
      >

        {noMoviesFound ?  (
          <Box sx={{ mt: 3 }}>
          <Typography variant="h5" color="text.secondary">
            Inga filmer eller serier hittades för "{searchValue}"
          </Typography>
        </Box>
        ) : (
          movie.length > 0 && (
            <List
              sx={{
                display: "flex",
                justifyContent: 'center', 
                alignItems: 'center',
                width: "100%",
                flexDirection: 'row', 
                flexWrap: 'wrap',
                overflowY: 'scroll',
               gap: 5,
              
  
                backgroundColor: "#121212",
                '&::-webkit-scrollbar': {
                  display: 'none',
                },
              }}
            >
              {movie.map((movie) => (
                <ListMovie key={movie.imdbID} movie={movie}  isLoading={isLoading}/>
              ))}
            </List>
          )
        )}
        
       
      </Box>
    </Box>
  );
};

export default Search;
