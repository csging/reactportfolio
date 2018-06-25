import React,  {Component} from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import withTheme from '@material-ui/core/styles/withTheme';
import Grid from '@material-ui/core/Grid';
import Exbae from './Exbae';
import AutoRotatingCarousel from './Carousel';
import Navbar from './Navbar';
import PortStep from './PortStep';


const styles = {
  root: {
    width: '100%',
    maxWidth: 500,
    flexGrow: 1,
  },
};
function FullWidthGrid(props) {
    const { classes } = props;
};
class Portfolio extends Component {
    render() {
      return (  
        <div>
        {/* <Navbar /> */}

        <Grid container spacing={24}>
            <Grid item xs></Grid>
            
            <Grid item xs={12}>
            <Typography variant="display3" gutterBottom>
            My Projects
            </Typography>
            </Grid>
         </Grid>
        
        {/* <AutoRotatingCarousel /> */}
        <PortStep />

        </div>
      )
    }
}

export default Portfolio;