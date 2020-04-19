import React, { Component } from 'react';
import {
    MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBBtn, MDBNav, MDBNavItem, MDBNavLink, MDBFormInline,
    MDBContainer, MDBDataTable, MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow, MDBTypography
} from "mdbreact";
import MyComponent from './DatatablePage'
import Graph from './Chart'

import undraw from '../../public/undraw.svg'

class PanelPage extends Component {
    constructor() {
        super()
        this.state = {
            docs: {
                columns: [
                    {
                        label: 'Publishing_date',
                        field: 'Publishing_date',
                        sort: 'asc',
                        width: 150
                    },
                    {
                        label: 'Headline',
                        field: 'Headline',
                        sort: 'asc',
                        width: 270
                    },
                    {
                        label: 'Summary',
                        field: 'Summary',
                        sort: 'asc',
                        width: 200
                    },
                    {
                        label: 'URL',
                        field: 'URL',
                        sort: 'asc',
                        width: 100,
                        Cell: e =><a href={e.value}> {e.value} </a>
                    },
                    {
                        label: 'Source',
                        field: 'Source',
                        sort: 'asc',
                        width: 150
                    },

                ],
                rows: [


                ]
            }

        }
        this.handleClick = this.handleClick.bind(this)
        this.handlePage = this.handlePage.bind(this)

    }


    handlePage(event) {
        event.preventDefault()
        fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20110101&end_date=20200419&q=${document.getElementById('search').value}&sort=newest&api-key=xrp7NPZMKRQ3U8nmHM5UMXu2XwBKYXei&page=${event.target.id}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState((prevState) => {
                    prevState.docs.rows = []
                    data.response.docs.forEach((item, index) => {
                        prevState.docs.rows.push({
                            Publishing_date: item.pub_date.slice(0,10),
                            Headline: item.headline.main,
                            Summary: item.abstract,
                            URL: item.web_url,
                            Source: item.source,
                        })

                    })
                    return prevState
                })




            })
    }

    handleClick(event) {
        event.preventDefault()

        fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20110101&end_date=20200419&q=${document.getElementById('search').value}&sort=newest&api-key=xrp7NPZMKRQ3U8nmHM5UMXu2XwBKYXei`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {


                this.setState((prevState) => {
                    prevState.docs.rows = []
                    data.response.docs.forEach((item, index) => {
                        prevState.docs.rows.push({
                            Publishing_date: item.pub_date.slice(0,10),
                            Headline: item.headline.main,
                            Summary: item.abstract,
                            URL: item.web_url,
                            Source: item.source,
                        })

                    })
                    return prevState
                })
            })


    }

    render() {

        return (
            <MDBContainer fluid>

                <div>
                    <br></br>

                    <MDBCol md="12">
                        <MDBFormInline className="">
                            <input id="search" style={{ width: "600px" }} className="form-control shadow-box-example z-depth-1 " type="text" placeholder="Search" aria-label="Search" />
                            &nbsp; &nbsp; &nbsp;
                            <MDBBtn onClick={this.handleClick} color="primary" className="shadow-box-example z-depth-1" type="submit" className="mr-auto">
                                Search
                            </MDBBtn>

                        </MDBFormInline>
                    </MDBCol>
                </div>

                <div>
                    {this.state.docs.rows.length == 0 ? <div className="text-center">
                        <br></br> <br></br> <br></br> <br></br><br></br> <br></br> <br></br>
                        <MDBTypography tag='h1' className="text-muted" variant="h1">Search for breaking news from across <br></br> the world, across the times.</MDBTypography>
                        <img src={undraw}></img>
                    </div> :
                        <div >
                            <MDBTypography tag='h4' className="text-muted" variant="h1">Here are your search results for '{document.getElementById('search').value}'</MDBTypography>
                            <br></br> <br></br>
                            <div className=" hoverable"><MyComponent data={this.state.docs.rows} /></div>
                            <div className=" clearfix">
                                <MDBPagination className="float-right" circle>


                                    <MDBPageItem   >
                                        <MDBPageNav id='0' className="page-link hoverable" onClick={this.handlePage}>
                                            1 <span className="sr-only">(current)</span>
                                        </MDBPageNav>
                                    </MDBPageItem>
                                    <MDBPageItem >
                                        <MDBPageNav className="page-link hoverable" id='1' onClick={this.handlePage}>
                                            2
                                    </MDBPageNav>
                                    </MDBPageItem>
                                    <MDBPageItem >
                                        <MDBPageNav className="page-link hoverable" id='2' onClick={this.handlePage}>
                                            3
                                    </MDBPageNav>
                                    </MDBPageItem>
                                    <MDBPageItem >
                                        <MDBPageNav className="page-link hoverable" id='3' onClick={this.handlePage}>
                                            4
                                    </MDBPageNav>
                                    </MDBPageItem>
                                    <MDBPageItem >
                                        <MDBPageNav className="page-link hoverable" id='4' onClick={this.handlePage}>
                                            5
                                    </MDBPageNav>
                                    </MDBPageItem>
                                    <MDBPageItem >
                                        <MDBPageNav className="page-link hoverable" id='5' onClick={this.handlePage}>
                                            6
                                    </MDBPageNav>
                                    </MDBPageItem>
                                    <MDBPageItem >
                                        <MDBPageNav className="page-link hoverable" id='6' onClick={this.handlePage}>
                                            7
                                    </MDBPageNav>
                                    </MDBPageItem>
                                    <MDBPageItem >
                                        <MDBPageNav className="page-link hoverable" id='7' onClick={this.handlePage}>
                                            8
                                    </MDBPageNav>
                                    </MDBPageItem>
                                    <MDBPageItem >
                                        <MDBPageNav className="page-link hoverable" id='8' onClick={this.handlePage}>
                                            9
                                    </MDBPageNav>
                                    </MDBPageItem>
                                    <MDBPageItem >
                                        <MDBPageNav className="page-link hoverable" id='9' onClick={this.handlePage}>
                                            10
                                    </MDBPageNav>
                                    </MDBPageItem>

                                </MDBPagination>
                            </div>
                            <br></br><br></br>
                            <Graph query={document.getElementById('search').value} />
                            


                        </div>

                    }



                </div>

            </MDBContainer>
        );
    }

}

export default PanelPage;