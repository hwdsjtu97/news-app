import React from 'react';
import './Dialog.css';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import {IoMdShare} from 'react-icons/io';
import {
    EmailShareButton,
    FacebookShareButton,
    TwitterShareButton,

} from "react-share";
import {
    EmailIcon,
    FacebookIcon,
    TwitterIcon,
} from "react-share";

const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
        borderBottom: "1px solid #DEDEDE",
        width:"auto",
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    title: {
        // width: "500px",
        fontWeight:500
    }

});

const DialogTitle = withStyles(styles)(props => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6" className={classes.title}>{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

export default class CustomizedDialogs extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            open:false
        }
        // const [open, setOpen] = React.useState(false);
    }

    handleClickOpen = (e) => {

        this.setState({
            open:true
        });
        // console.log("stop");
        // e.stopPropagation();  //  <------ Here is the magic
        // e.nativeEvent.stopImmediatePropagation();
        e.preventDefault();
        // e.stopImmediatePropagation()
        // console.log("stopped")

    };
    handleClose = (e) => {
        this.setState({
            open:false
        })
        e.preventDefault();
    };
    render(){


        const {newsTitle, shareUrl} = this.props;
        // console.log(this.props);
        return (

            <div className="share-button">
                {/*<Button variant="outlined" color="primary" onClick={handleClickOpen}>*/}
                {/*    Open dialog*/}
                {/*</Button>*/}
                <IoMdShare onClick={this.handleClickOpen}/>
                <Dialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={this.state.open}>
                    <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
                        {newsTitle}
                    </DialogTitle>
                    <h1 style={{textAlign: "center", fontSize:"20px", margin:"20px"}}
                    >Share via</h1>
                    <div className="button-bar" style={{display: "flex", marginBottom:"20px"}}>
                        <div style={{flexGrow:"1",textAlign:"center"}}><FacebookShareButton url={shareUrl} quote="#CSCI_571_NewsApp" ><FacebookIcon round={true}/></FacebookShareButton></div>
                        <div style={{flexGrow:"1",textAlign:"center"}}><TwitterShareButton url={shareUrl} hashtags={["CSCI_571_NewsApp"]}><TwitterIcon round={true}/></TwitterShareButton></div>
                        <div style={{flexGrow:"1", textAlign:"center"}}><EmailShareButton url={shareUrl} subject="#CSCI_571_NewsApp"><EmailIcon round={true}/></EmailShareButton></div>
                    </div>

                </Dialog>
            </div>
        );
    }

}
