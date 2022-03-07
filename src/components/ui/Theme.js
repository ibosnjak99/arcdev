import { createTheme } from '@material-ui/core/styles';

const arcBlue='#0B72B9'
const arcOrange='#FFBA60'
const arcGrey='#868686'

export default createTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`,
            grey: `${arcGrey}`
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
            fontSize: '2.5rem',
            fontWeight: 700,
            color: `${arcBlue}`,
            lineHeight: 1.5
        },
        h4: {
            fontWeight: 700,
            fontFamily: 'Raleway',
            fontSize: '1.75rem',
            color: `${arcBlue}`,
        },
        subtitle1: {
            fontSize: '1.5rem',
            fontWeight: '300',
            color: `${arcGrey}`, 
            maxWidth: '25em'
        },
        subtitle2: {
            fontFamily: 'Quicksand',
            fontSize: '1.65rem',
            fontWeight: '500',
            color: `${arcGrey}`,
            marginBottom: '0.5em'
        }
    }
})