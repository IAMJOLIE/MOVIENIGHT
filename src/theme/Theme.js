import {createTheme} from '@mui/material';


export const themeOptions = createTheme({
    palette: {
        primary: {
            main: '#3700B3',
            light: ' #BB86FC ',
            dark: '#3700B3',
            contrastText: '#ffffff'

        },
        
        background: {
			default: '#000000',
			paper: '#1b1b1b'
		},

        text: {
            primary: '#ffffff', 
            secondary: '#b3b3b3'
        },
        divider: '#292929'
    }
        
});