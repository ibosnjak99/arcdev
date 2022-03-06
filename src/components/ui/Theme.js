import { createTheme } from '@material-ui/core/styles';

const arcBlue='0B72B9'
const arcOrange='#FFBA60'

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
    fullPageWidth: {
        maxWidth: 1366,
        margin: 'auto'
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
        },
        h2: {
            fontFamily: 'Quicksand',
            fontWeight: 700,
            fontSize: '2.5rem',
            color: `${arcBlue}`,
            lineHeight: 1.5
        },
    }
})