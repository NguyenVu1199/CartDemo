import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React,{Component} from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import style from "./style";
class Saga extends Component{
    render(){
        const {classes}=this.props;
        return(
            // <div className={classes.box}>
            //  <Button variant="contained" color="primary"> Primary</Button>
            //  <div className={classes.shape}>
            //      <div >ReactJS</div>
            //      <div >Angular</div>
            //      <div >VueJS</div>
            //  </div>
            // </div>
            <ThemeProvider>
                <h1>Ok</h1>
            </ThemeProvider>
        )
    }
}
export default withStyles(style)(Saga);