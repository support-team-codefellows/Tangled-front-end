
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import React, { useState, useEffect } from 'react';
import avatar from "assets/img/faces/marc.jpg";

import {connect} from 'react-redux';

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const useStyles = makeStyles(styles);


function UserProfile(props) {
  
  const userObj = props.user;

  const classes = useStyles();
  return (
      <center>
    <div>
      <GridContainer>
          
        <GridItem >
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img src={'https://i.pinimg.com/736x/e5/39/33/e53933f438fcc6b93d04c77144371a58.jpg'} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h4 className={classes.cardTitle}>{userObj ? userObj.username : ''}</h4>
              <p className={classes.description}>
                Don{"'"}t be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
              <Button color="primary" round>
                change picture 
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
      </center>
  );
}

export default connect(function(state) {
  return state
})(UserProfile)

// connect(function(state) {retrun {profileImage: state.profile}})(Compoenent)