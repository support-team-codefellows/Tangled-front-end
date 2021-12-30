import React, { Component } from 'react'
import { Badge } from 'react-bootstrap'

import Icon from "@material-ui/core/Icon";
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardFooter from "components/Card/CardFooter.js";
import CardBody from "components/Card/CardBody.js";

import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";

import Accessibility from "@material-ui/icons/Accessibility";

import { makeStyles } from "@material-ui/core/styles";
// core components
import Table from "components/Table/Table.js";
const styles = {
    cardCategoryWhite: {
        "&,& a,& a:hover,& a:focus": {
            color: "rgba(255,255,255,.62)",
            margin: "0",
            fontSize: "14px",
            marginTop: "0",
            marginBottom: "0",
        },
        "& a,& a:hover,& a:focus": {
            color: "#FFFFFF",
        },
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1",
        },
    },
};
const useStyles = makeStyles(styles);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>oOo<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< //

class Telephone2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sum: 0,
            hasClicked: false,
        }
    }

    newCasesHandler(){
        this.setState({
            sum: 0,
            hasClicked: true
        });
    }

    componentDidMount() {
        this.props.socket.on("telephoneIssue", (payload) => {
            this.setState({
                sum: this.state.sum++
            });
            console.log(this.state.sum);
            console.log(this.state.hasClicked);
          });
    }

    render() {
        return (
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={6} md={3}>
                        <Card>
                            <CardHeader color="danger" stats icon>
                                <CardIcon color="danger">
                                    <h2>
                                        <Badge onClick={this.newCasesHandler} bg="Dark">{this.state.sum}</Badge>
                                    </h2>
                                </CardIcon>
                            </CardHeader>
                            <CardFooter stats>
                                <div>
                                    <LocalOffer />
                                    New Cases
                                </div>
                                <div>
                                </div>
                            </CardFooter>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={3}>
                        <Card>
                            <CardHeader color="info" stats icon>
                                <CardIcon color="info">
                                    <Accessibility />
                                </CardIcon>
                                <p>Followers</p>
                                <h3>+245</h3>
                            </CardHeader>
                            <CardFooter stats>
                                <div>
                                    <Update />
                                    Under Processing
                                </div>
                            </CardFooter>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={3}>
                        <Card>
                            <CardHeader color="success" stats icon>
                                <CardIcon color="success">
                                    <Store />
                                </CardIcon>
                                <p>Revenue</p>
                                <h3>$34,245</h3>
                            </CardHeader>
                            <CardFooter stats>
                                <div>
                                    <DateRange />
                                    Fixed issues
                                </div>
                            </CardFooter>
                        </Card>
                    </GridItem>
                </GridContainer>

                {this.state.hasClicked && <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <Card>
                            <CardHeader color="primary">
                                Here is a subtitle for this table
                            </CardHeader>
                            <CardBody>
                                <Table
                                    tableHeaderColor="primary"
                                    tableHead={["Name", "Country", "City", "Salary"]}
                                    tableData={[
                                        ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
                                        ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
                                        ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
                                        ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
                                        ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
                                        ["Mason Porter", "Chile", "Gloucester", "$78,615"],
                                    ]}
                                />
                            </CardBody>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12}>
                        <Card plain>
                            <CardHeader plain color="primary">
                            </CardHeader>
                            <CardBody>
                                <Table
                                    tableHeaderColor="primary"
                                    tableHead={["ID", "Name", "Country", "City", "Salary"]}
                                    tableData={[
                                        ["1", "Dakota Rice", "$36,738", "Niger", "Oud-Turnhout"],
                                        ["2", "Minerva Hooper", "$23,789", "Curaçao", "Sinaai-Waas"],
                                        ["3", "Sage Rodriguez", "$56,142", "Netherlands", "Baileux"],
                                        [
                                            "4",
                                            "Philip Chaney",
                                            "$38,735",
                                            "Korea, South",
                                            "Overland Park",
                                        ],
                                        [
                                            "5",
                                            "Doris Greene",
                                            "$63,542",
                                            "Malawi",
                                            "Feldkirchen in Kärnten",
                                        ],
                                        ["6", "Mason Porter", "$78,615", "Chile", "Gloucester"],
                                    ]}
                                />
                            </CardBody>
                        </Card>
                    </GridItem>
                </GridContainer>}
            </div>
        )
    }
}

// export default Telephone2
