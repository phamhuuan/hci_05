import React from 'react';
// import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({

    root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '25ch',
        },
      },

    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        position: "relative",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4),
        borderRadius: "10px",
        outline: "none"
    },
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const Test = () => {
    const [value, setValue] = React.useState(0);
    const [progress, setProgress] = React.useState(0);

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
        setTimeout(function () {
            setProgress(90);
        },500)
    };

    const handleClose = () => {
        setTimeout(function () {
            setProgress(0);
        },300)
        setOpen(false);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleSubmit = () => {
        setValue(value+1)
    }

    return (
        <div style={{ width: '100%' }}>
            <Paper style={{ textAlign: 'center' }} square>
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label="disabled tabs example"
                    variant="fullWidth"
                >
                    <Tab style={{ minWidth: "50px" }} label="01" />
                    <Tab style={{ minWidth: "50px" }} label="02" />
                    <Tab style={{ minWidth: "50px" }} label="03" />
                    <Tab style={{ minWidth: "50px" }} label="04" />
                    <Tab style={{ minWidth: "50px" }} label="05" />
                    <Tab style={{ minWidth: "50px" }} label="06" />
                    <Tab style={{ minWidth: "50px" }} label="07" />
                    <Tab style={{ minWidth: "50px" }} label="08" />
                    <Tab style={{ minWidth: "50px" }} label="09" />
                    <Tab style={{ minWidth: "50px" }} label="10" />
                    <Tab style={{ minWidth: "50px" }} label="11" />
                    <Tab style={{ minWidth: "50px" }} label="12" />
                    <Tab style={{ minWidth: "50px" }} label="13" />
                    <Tab style={{ minWidth: "50px" }} label="14" />
                    <Tab style={{ minWidth: "50px" }} label="15" />
                    <Tab style={{ minWidth: "50px" }} label="16" />
                    <Tab style={{ minWidth: "50px" }} label="17" />
                    <Tab style={{ minWidth: "50px" }} label="18" />
                    <Tab style={{ minWidth: "50px" }} label="19" />
                    <Tab style={{ minWidth: "50px" }} label="20" />

                </Tabs>
                <TabPanel value={value} index={0}>

                    {/* <img style={{ maxWidth: '900px' }} src={`${window.location.origin}/dist/img/ques1.png`} alt="" /> */}
                    <Typography style={{ marginTop: '20px' }} variant="h4" color="textSecondary"  id="transition-modal-title">đ</Typography>
                    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
                        <TextField style={{ width: '900px' }} id="standard-basic" label="Nhập tổ hợp phím tốc ký tương ứng" />
                    </form>

                </TabPanel>
                <TabPanel value={value} index={1}>
                    {/* <img style={{ maxWidth: '900px' }} src={`${window.location.origin}/dist/img/ques2.png`} alt="" /> */}
                    <Typography style={{ marginTop: '20px' }} variant="h4" color="textSecondary"  id="transition-modal-title">ng</Typography>
                    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
                        <TextField style={{ width: '900px' }} id="standard-basic" label="Nhập tổ hợp phím tốc ký tương ứng" />
                    </form>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    {/* <img style={{ maxWidth: '900px' }} src={`${window.location.origin}/dist/img/ques3.png`} alt="" /> */}
                    <Typography style={{ marginTop: '20px' }} variant="h4" color="textSecondary"  id="transition-modal-title">KP</Typography>
                    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
                        <TextField style={{ width: '900px' }} id="standard-basic" label="Nhập chữ quốc ngữ tương ứng" />
                    </form>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    {/* <img style={{ maxWidth: '900px' }} src={`${window.location.origin}/dist/img/ques4.png`} alt="" /> */}
                    <Typography style={{ marginTop: '20px' }} variant="h4" color="textSecondary"  id="transition-modal-title">kh</Typography>
                    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
                        <TextField style={{ width: '900px' }} id="standard-basic" label="Nhập tổ hợp phím tốc ký tương ứng" />
                    </form>
                </TabPanel>
                <TabPanel value={value} index={4}>
                <Typography style={{ marginTop: '20px' }} variant="h4" color="textSecondary"  id="transition-modal-title">TP</Typography>
                    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
                        <TextField style={{ width: '900px' }} id="standard-basic" label="Nhập chữ quốc ngữ tương ứng" />
                    </form>
                </TabPanel>
                <TabPanel value={value} index={5}>
                <Typography style={{ marginTop: '20px' }} variant="h4" color="textSecondary"  id="transition-modal-title">TP</Typography>
                    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
                        <TextField style={{ width: '900px' }} id="standard-basic" label="Nhập chữ quốc ngữ tương ứng" />
                    </form>
                </TabPanel>
                <TabPanel value={value} index={6}>
                <Typography style={{ marginTop: '20px' }} variant="h4" color="textSecondary"  id="transition-modal-title">TP</Typography>
                    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
                        <TextField style={{ width: '900px' }} id="standard-basic" label="Nhập chữ quốc ngữ tương ứng" />
                    </form>
                </TabPanel>
                <TabPanel value={value} index={7}>
                <Typography style={{ marginTop: '20px' }} variant="h4" color="textSecondary"  id="transition-modal-title">TP</Typography>
                    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
                        <TextField style={{ width: '900px' }} id="standard-basic" label="Nhập chữ quốc ngữ tương ứng" />
                    </form>
                </TabPanel>
                <TabPanel value={value} index={8}>
                <Typography style={{ marginTop: '20px' }} variant="h4" color="textSecondary"  id="transition-modal-title">TP</Typography>
                    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
                        <TextField style={{ width: '900px' }} id="standard-basic" label="Nhập chữ quốc ngữ tương ứng" />
                    </form>
                </TabPanel>
                <TabPanel value={value} index={9}>
                <Typography style={{ marginTop: '20px' }} variant="h4" color="textSecondary"  id="transition-modal-title">TP</Typography>
                    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
                        <TextField style={{ width: '900px' }} id="standard-basic" label="Nhập chữ quốc ngữ tương ứng" />
                    </form>
                </TabPanel>
                <TabPanel value={value} index={10}>
                <Typography style={{ marginTop: '20px' }} variant="h4" color="textSecondary"  id="transition-modal-title">TP</Typography>
                    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
                        <TextField style={{ width: '900px' }} id="standard-basic" label="Nhập chữ quốc ngữ tương ứng" />
                    </form>
                </TabPanel>
            </Paper>
            <Button style={{ float: 'right', marginRight: 20, marginTop: 20 }} variant="contained" color="primary" size="large" onClick={handleOpen}>
                Done
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <a onClick={handleClose} href="#"><i style={{ position: "absolute", top: 8, right: 8, fontSize: 25, color: 'rgba(0,0,0,0.4)' }} className="fas fa-times"></i></a>
                        <Typography variant="h4" component="h3" color="textSecondary" align="center" id="transition-modal-title">KẾT QUẢ</Typography>
                        <Box m={5} position="relative" display="flex" alignItems="center" justifyContent="center">
                            <CircularProgress style={{ transform: "rotate(90deg)" }} variant="determinate" value={progress} size={200} />
                            <Box
                                top={0}
                                left={0}
                                bottom={0}
                                right={0}
                                position="absolute"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                flexDirection="column"
                            >
                                <Typography variant="h3" component="div">{progress}%</Typography>
                                <Typography variant="caption" component="div" color="textSecondary">ĐIỂM CỦA BẠN</Typography>
                            </Box>
                        </Box>
                        <Typography id="transition-modal-description" variant="h5" align="center" component="div">Tuyệt vời!😍😍</Typography>
                        <Box m={2}>
                            <Typography variant="p" align="center" component="p">Chúc mừng bạn đã hoàn thành Bài học số 1</Typography>
                        </Box>
                        <Button style={{ width: "100%", height: 50}} variant="contained" color="primary" onClick={handleClose}>
                            KIỂM TRA LẠI
                        </Button>
                        <Button style={{ width: "100%", height: 50, marginTop:"5px"  }} variant="contained" color="primary" onClick={handleClose}>
                            LUYỆN TẬP BÀI 1
                        </Button>
                        <Button style={{ width: "100%", height: 50, marginTop:"5px"  }} variant="contained" color="primary" onClick={handleClose}>
                            HỌC TIẾP BÀI 2
                        </Button>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
};

export default Test;