import { createTheme } from '@material-ui/core/styles';

const arcBlue="#0B72B9"
const arcOrange="#FFBA60"

export default createTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`,
        },
        primary: {
            main: `${arcBlue}`,
        },
        secondary: { 
            main: `${arcOrange}`,
        },
    },
    typography: {
        tab: {
            fontFamily: 'Raleway',
            fontSize: '1rem',
        },
        button: {
            fontFamily: 'Raleway',
            fontWeight: 600,
            fontSize: '1rem',
        }
    }
})