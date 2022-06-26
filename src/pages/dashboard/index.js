import { Grid , Container, List, Button,Paper, Typography, Divider} from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import GraphicalView from '../../components/Graph'
import { getGraphData } from '../../providers/DataPipe/dataLoad'
import useStyles from "./styles";
import {BlueDividerIcon, GreyDividerIcon} from "./../../providers/iconsloader"
import { GraphDataList } from './listItems'
import { CardListView } from './cardList';

function Dashboard() {

  const [data, setData] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    getGraphData().then((response) => {
      setData(response.data)
    }).catch((err) => {
      console.log(err)
    } )
  }, [])

    
  return (
      <React.Fragment>
          <Container className={classes.container}>
            <CardListView/>
            <Paper className={classes.paper}>
              <Grid container className={classes.container}>
                <Grid xs={12} sm={8} md={8}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={12}>
                      <Typography variant='h5'>
                        Today's trends 
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={9} md={9}>
                      <Typography
                        variant='body1'
                        className={classes.subtitle}
                      >
                        as of 2022 , June 27
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                      {/* <ButtonGroup> */}
                        <Button className={classes.btnStyle} variant="text" disableElevation disableFocusRipple disableRipple classes={{startIcon:classes.startIcon}} startIcon={<BlueDividerIcon/>}>
                            Today
                        </Button>
                        <Button className={classes.btnStyle} variant="text"  disableElevation disableFocusRipple disableRipple classes={{startIcon:classes.startIcon}}  startIcon={<GreyDividerIcon/>}>
                            Yesterday
                        </Button>
                      {/* </ButtonGroup> */}
                    </Grid>
                  </Grid>
                 
                  <GraphicalView
                    data={data}
                    xKey={"x"}
                    yKey={"y"}
                    extraKey={"z"}
                  />
                </Grid>
                
                <hr style={{minHeight:"546" , border:"0.5px solid #DFE0EB"}}/>
                <Grid xs={12} sm={2} md={2}>
                    <GraphDataList/>
                </Grid>
              </Grid>
            </Paper>
            
          </Container>
      </React.Fragment>
  )
}

export default Dashboard
