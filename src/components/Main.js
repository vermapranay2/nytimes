import React, { Component } from 'react';
import {
    MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBBtn, MDBNav, MDBNavItem, MDBNavLink, MDBFormInline,
    MDBContainer, MDBDataTable, MDBPagination, MDBPageItem, MDBPageNav,
} from "mdbreact";
import MyComponent from './DatatablePage'

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
                        width: 100
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
                    prevState.docs.rows=[]
                    data.response.docs.forEach((item, index) => {
                        prevState.docs.rows.push({
                            Publishing_date: item.pub_date,
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
                    data.response.docs.forEach((item, index) => {
                        prevState.docs.rows.push({
                            Publishing_date: item.pub_date,
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
                <MDBCard className="text-center">
                    <MDBCardHeader>
                        <MDBFormInline className="md-form mr-auto mb-4">
                            <input id="search" className="form-control mr-sm-4" type="text" placeholder="Search" aria-label="Search" />
                            <MDBBtn onClick={this.handleClick} color="primary" rounded size="sm" className="mr-auto">
                                Search
                             </MDBBtn>

                        </MDBFormInline>
                    </MDBCardHeader>
                    <MDBCardBody>
                        {this.state.docs.rows.length == 0 ? <div>
                            <MDBCardTitle>Search for breaking news from across the world, across the times.</MDBCardTitle>
                            <MDBCardText>
                                <img src={undraw}></img>
                            </MDBCardText>
                        </div> :
                            <div>
                                <h4>Here are your search results for {document.getElementById('search').value}</h4>
                                
                                <MyComponent data={this.state.docs.rows} />
                                <MDBPagination circle>


                                    <MDBPageItem   >
                                        <MDBPageNav id='0' className="page-link" onClick={this.handlePage}>
                                            1 <span className="sr-only">(current)</span>
                                        </MDBPageNav>
                                    </MDBPageItem>
                                    <MDBPageItem >
                                        <MDBPageNav className="page-link" id='1' onClick={this.handlePage}>
                                            2
                                    </MDBPageNav>
                                    </MDBPageItem>
                                    <MDBPageItem >
                                        <MDBPageNav className="page-link" id='2' onClick={this.handlePage}>
                                            3
                                    </MDBPageNav>
                                    </MDBPageItem>
                                    <MDBPageItem >
                                        <MDBPageNav className="page-link" id='3' onClick={this.handlePage}>
                                            4
                                    </MDBPageNav>
                                    </MDBPageItem>
                                    <MDBPageItem >
                                        <MDBPageNav className="page-link" id='4' onClick={this.handlePage}>
                                            5
                                    </MDBPageNav>
                                    </MDBPageItem>
                                    <MDBPageItem >
                                        <MDBPageNav className="page-link" id='5' onClick={this.handlePage}>
                                            6
                                    </MDBPageNav>
                                    </MDBPageItem>
                                    <MDBPageItem >
                                        <MDBPageNav className="page-link" id='6' onClick={this.handlePage}>
                                            7
                                    </MDBPageNav>
                                    </MDBPageItem>
                                    <MDBPageItem >
                                        <MDBPageNav className="page-link" id='7' onClick={this.handlePage}>
                                            8
                                    </MDBPageNav>
                                    </MDBPageItem>
                                    <MDBPageItem >
                                        <MDBPageNav className="page-link" id='8' onClick={this.handlePage}>
                                            9
                                    </MDBPageNav>
                                    </MDBPageItem>
                                    <MDBPageItem >
                                        <MDBPageNav className="page-link" id='9' onClick={this.handlePage}>
                                            10
                                    </MDBPageNav>
                                    </MDBPageItem>
                                    
                                </MDBPagination>
                            </div>

                        }



                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        );
    }

}

export default PanelPage;