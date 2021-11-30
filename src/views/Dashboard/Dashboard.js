//import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import { connect } from "react-redux";

import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

function Dashboard(props) {
  const userCount = localStorage.getItem('userCount')

  const classes = useStyles();
  return (
    <div>
      <GridContainer>
      <GridItem xs={2} sm={6} md={12}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <h3 className={classes.cardTitle}>Tangled</h3>
              <p style = {{display: 'center'}}className={classes.cardTitle}>While you can’t always physically meet customers where they’re at, you can use omni-channel feedback and multiple customer support options to allow customers to contact your support team in the way that’s most convenient for them. Customers value time and convenience, and as evidenced by us high prices, will even pay more for it. we are an example that highlights how when it comes to quality customer service, delivery of services can be a game-changer.</p>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Last 24 Hours
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      <GridItem xs={12} sm={5} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              
              <p className={classes.cardCategory}>Number of active users </p>
              <h3 className={classes.cardTitle}>{userCount}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        
       
        <GridItem xs={12} sm={5} md={4}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>info_outline</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Fixed Issues</p>
              <h3 className={classes.cardTitle}>75</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                Tracked from Github
              </div>
            </CardFooter>
          </Card> 
        </GridItem>
      
        <GridItem xs={12} sm={6} md={4}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Daily Sales</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase in today sales.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> 
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        </GridContainer>
      
    </div>
  );
}
export default connect(function(state) {
  return state
})(Dashboard)

