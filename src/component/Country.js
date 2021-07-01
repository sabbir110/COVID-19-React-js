import React, {Component,Fragment} from 'react';
import '../asset/css/bootstrap.min.css'
import  '../asset/css/custom.css'
import {Col, Container, Row} from "react-bootstrap";
import RestClient from "../RestApi/RestClient";
import AppUrl from "../RestApi/AppUrl";

class Country extends Component {

    constructor() {
        super();
        this.state={
            myData:[]
        }
    }

    componentDidMount() {

        RestClient.GetRequest(AppUrl.Countries).then(result=>{
            this.setState({myData:result})

        })
    }


    render() {

        const myList=this.state.myData;
        const myView=myList.map(myList=>{
            return <Col lg={4} md={6} sm={12}>
                <div className="serviceCard text-center">
                    <img className="cardImg" src={myList.countryInfo.flag}/>
                    <h2 className="serviceName">{myList.country}</h2>
                    <h5  className="serviceDesc text-justify">Total Cases: {myList.cases}</h5>
                    <h5  className="serviceDesc text-justify">todayCases: {myList.todayCases}</h5>
                    <h5  className="serviceDesc text-justify">todayDeaths: {myList.todayDeaths}</h5>
                </div>
            </Col>
        })


        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle"> Covid-19</h1>
                    <Row>
                        {myView}
                    </Row>
                </Container>
                
            </Fragment>
        );
    }
}

export default Country;