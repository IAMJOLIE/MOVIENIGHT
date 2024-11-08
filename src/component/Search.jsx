import { Box, List, InputBase, IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import ListMovie from "./ListMovie";
import { useLocation } from "react-router-dom";
import { keyframes } from "@emotion/react";
import SearchIcon from "@mui/icons-material/Search";

const expandWidth = keyframes`
  0% { transform: scaleX(0); }
  100% { transform: scaleX(1); }
`;

const Search = ({ isOpen, setSearchOpen }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      
      if (searchValue) {
        try {
          const response = await fetch(
            `http://www.omdbapi.com/?s=${searchValue}&apikey=4e3728b8`
          );
          const data = await response.json();
          if (data.Search) {
            setMovies(data.Search);
            
          } else {
            setMovies([]);
           
          }
        } catch (error) {
          console.error("Error fetching movies:", error);
        } finally { 
          setIsLoading(false); 
        } 

        
      } else {
        setMovies([]);
      }
    };
    fetchData();
  }, [searchValue]);

  useEffect(() => {
    if (location.pathname !== "/search") {
      setSearchOpen(false);
      setMovies([]);
      setSearchValue("");
    }
  }, [location.pathname, setSearchOpen]);

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
                top: { md: 20, lg: 20, sm: 20, xs: 160 },
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
          justifyContent: "flex_start",
          alignItems: "center",
         
          mt: { sm: 0, xs: 15 },
          height: { sm: "80vh", xs: "0" },
        }}
      >
        {movies.length > 0 && (
          <List
            sx={{
              marginBottom: { xs: 10, sm: 0 },
              display: "flex",
              flexDirection: { sm: "row", xs: "column" },
              overflowY: { xs: "auto", sm: "hidden" },
              overflowX: { sm: "auto", xs: "hidden" },
              alignItems: {xs: "center", sm: 'flex-start'},
              

              gap: 6,
              width: "100%",

              backgroundColor: "#000000",
              "&::-webkit-scrollbar": {
                width: "1px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#000000",
                borderRadius: "1px",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "Black",
                borderRadius: "2px",
              },
            }}
          >
            {movies.map((movie) => (
              <ListMovie key={movie.imdbID} movie={movie}  isLoading={isLoading}/>
            ))}
          </List>
        )}
      </Box>
    </Box>
  );
};

export default Search;
