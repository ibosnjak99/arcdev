import React, {useState} from 'react';
import { Link } from "react-router-dom";
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
        marginTop: '4em',
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
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    return (
        <Grid container direction='row' className={classes.fullPageWidth}>
            <Grid container direction='column' justifyContent='center' alignItems='center' className={[classes.contactContainer]} lg={3}>
                <Grid>
                    <Typography variant='h2'>Contact Us</Typography>
                    <Typography style={{marginBottom: '0.8rem'}} variant='body1'>We're waiting</Typography>
                </Grid>
                <Grid>
                    <Grid item>
                        <img src={phoneIcon} alt='phone'/>
                    </Grid>
                    <Grid item>
                        <Typography variant='body1' style={{fontSize: '1rem'}}>555-555-555</Typography>
                    </Grid>
                </Grid>
                <Grid>
                    <Grid item>
                        <img src={emailIcon} alt='email' style={{verticalAlign: 'bottom'}}/>
                    </Grid>
                    <Grid item>
                        <Typography variant='body1' style={{fontSize: '1rem', verticalAlign:'bottom'}}>ivan.bosnjak@enterwell.net</Typography>
                    </Grid>
                </Grid>
                <Grid>
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
                <Grid item style={{marginTop: '1rem'}}>
                    <TextField 
                        placeholder='Type your message here'
                        multiline
                        rows={5} 
                        id='message' 
                        value={message}
                        onChange={event => setMessage(event.target.value)}>
                    </TextField>
                </Grid>
                <Grid>
                    <Button className={classes.messageButton} variant='outlined'>Send Message</Button>
                </Grid>
            </Grid>
            <Grid item container className={classes.background} lg={9}></Grid>
        </Grid>
    )
}
