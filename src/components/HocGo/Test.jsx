import React from 'react';
// import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// import TabPanel from '@material-ui/core/TabPanel';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
            style={{ display: "block" }}
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
    const [value, setValue] = React.useState(2);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div style={{ display: "flex", justifyContent: 'center' }}>
            <Paper square style={{ marginLeft: "80px", marginTop: "30px" }}
            >
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label="disabled tabs example"
                    variant="fullWidth"
                    centered
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

                    <img style={{ maxWidth: '900px' }} src={`${window.location.origin}/dist/img/ques1.png`} alt="" />

                </TabPanel>
                <TabPanel value={value} index={1}>
                    <img style={{ maxWidth: '900px' }} src={`${window.location.origin}/dist/img/ques2.png`} alt="" />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <img style={{ maxWidth: '900px' }} src={`${window.location.origin}/dist/img/ques3.png`} alt="" />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <img style={{ maxWidth: '900px' }} src={`${window.location.origin}/dist/img/ques4.png`} alt="" />
                </TabPanel>
                <TabPanel value={value} index={4}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={5}>
                    Item Three
                </TabPanel>
            </Paper>
        </div>
    )
};

export default Test;