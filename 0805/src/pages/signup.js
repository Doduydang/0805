import React, {Component} from 'react';


//MUI Stuff
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';






class Signup extends Component{
    render(){
        return(
            <Grid>
                <form>
                <Typography variant="h2">
                    Signup
                </Typography>
                <TextField
                label="Email"
                />
                <TextField
                label="Password"
                type="password"
                />
                <TextField
                label="Confirm Password"
                />
                <TextField
                label="Handle"
                />
                <Button>Signup</Button>
                <br/>
                <small>
                    Already have an account
                </small>
                </form>
            </Grid>
        )
    }
}
export default Signup;