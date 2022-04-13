import React, {useState} from 'react';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Typography, Button, TextField} from '@material-ui/core';
import background from '../../assets/background.jpg';
import phoneIcon from '../../assets/phone.svg';
import emailIcon from '../../assets/email.svg';

const useStyles = makeStyles(theme => ({
    fullPageWidth: {
        ...theme.fullPageWidth,
    },
    contactContainer: {
        [theme.breakpoints.down('lg')]: {
            marginTop: '7em',
            marginBottom: '2em',
        },
    },
    background: {
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '60em'
    },
    messageButton: {
        backgroundColor: theme.palette.common.orange,
        marginTop: '1rem',
        color: 'white',
        borderRadius: 20,
        height: 45,
        width: 170,
        fontFamily: 'Quicksand',
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
        },
    },
}));

export default function Contact() {
    const classes = useStyles();
    const theme = useTheme();

    const [name, setName] = useState('');

    const [email, setEmail] = useState('');
    const [emailHelper, setEmailHelper] = useState('');

    const [phone, setPhone] = useState('');
    const [phoneHelper, setPhoneHelper] = useState('');

    const [message, setMessage] = useState('');

    const [open, setOpen] = useState(false);

    const onChange = event => {
        let valid;

        switch (event.target.id) {
            case 'email': 
                setEmail(event.target.value)
                valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)

                if(!valid) {
                    setEmailHelper('Invalid email')
                }
                else {
                    setEmailHelper('')
                }
                break;

                case 'phone': 
                setPhone(event.target.value)
                valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value)

                if(!valid) {
                    setPhoneHelper('Invalid phone number')
                }
                else {
                    setPhoneHelper('')
                }
                break;
                default: break;
                }
            }

    return (
        <Grid container direction='row' className={classes.fullPageWidth}>
            <Grid container direction='column' justifyContent='center' alignItems='center' className={classes.contactContainer} lg={3}>
                <Grid>
                    <Typography variant='h2'>Contact Us</Typography>
                    <Typography style={{marginBottom: '0.8rem'}} variant='body1'>We're waiting</Typography>
                </Grid>
                <Grid>
                    <Grid item>
                        <img src={phoneIcon} alt='phone'/>
                    </Grid>
                    <Grid item>
                        <Typography 
                            variant='body1' 
                            style={{fontSize: '1rem'}}
                            >
                                <a href='tel:55555555' style={{ textDecoration:'none', color:'inherit'}}>
                                    555-555-555
                                </a>
                            </Typography>
                    </Grid>
                </Grid>
                <Grid>
                    <Grid item>
                        <img src={emailIcon} alt='email' style={{verticalAlign: 'bottom'}}/>
                    </Grid>
                    <Grid item>
                        <Typography 
                            variant='body1' 
                            style={{fontSize: '1rem', verticalAlign:'bottom'}}
                            >
                                <a href='mailto:ivan.bosnjak@enterwell.net' style={{ textDecoration:'none', color:'inherit'}}>
                                    ivan.bosnjak@enterwell.net
                                </a>
                            </Typography>
                    </Grid>
                </Grid>    
                <Grid>
                    <Button 
                        disabled={
                            name.length === 0 ||
                            emailHelper.length !== 0 ||
                            phoneHelper.length !== 0 ||
                            message.length === 0
                        }
                        onClick={() => setOpen(true)}
                        className={classes.messageButton} 
                        variant='outlined'
                        >
                            Send Message
                    </Button>
                </Grid>
            </Grid>
            <Grid item container className={classes.background} lg={9}></Grid>
                <Dialog open={open} onClose={() => setOpen(false)} >
                    <DialogContent>
                        <Grid container direction='column'>
                            <Grid item>
                                <Typography variant='h4' gutterBottom>
                                    Confirm Message
                                </Typography>
                            </Grid>
                            <Grid item container>
                                <Grid item>
                                    <TextField 
                                        label='Name' 
                                        id='name'
                                        value={name}
                                        onChange={event => setName(event.target.value)}
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField 
                                        label='Email' 
                                        id='email'
                                        value={email}
                                        onChange={event => setEmail(event.target.value)}
                                        />
                                    </Grid>
                                <Grid item>
                                    <TextField 
                                        label='Phone' 
                                        id='phone'
                                        value={phone}
                                        onChange={event => setPhone(event.target.value)}
                                        />
                                </Grid>
                            </Grid>
                            <Grid item style={{marginTop: '1rem', maxWidth: '20em'}}>
                                <TextField 
                                    placeholder='Type your message here'
                                    multiline
                                    rows={5} 
                                    id='message' 
                                    value={message}
                                    onChange={event => setMessage(event.target.value)}>
                                </TextField>
                            </Grid>
                        </Grid>
                    </DialogContent>
                </Dialog>
        </Grid>
    )
}
