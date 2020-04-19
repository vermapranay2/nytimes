import React from "react";
import { render } from "react-dom";
import { Chart } from "react-google-charts";

export default class Graph extends React.Component {
    constructor() {
        super()
        this.state = {
            year: [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
            hit: []
        }

    }
    componentDidMount() {
        let l = []
        fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${this.props.query}&pub_year=2010&api-key=xrp7NPZMKRQ3U8nmHM5UMXu2XwBKYXei`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                l.push(data.response.meta.hits)
            })
        // fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${this.props.query}&pub_year=2011&api-key=xrp7NPZMKRQ3U8nmHM5UMXu2XwBKYXei`)
        //     .then((response) => {
        //         return response.json();
        //     })
        //     .then((data) => {
        //         l.push(data.response.meta.hits)
        //     })
        // fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${this.props.query}&pub_year=2012&api-key=xrp7NPZMKRQ3U8nmHM5UMXu2XwBKYXei`)
        //     .then((response) => {
        //         return response.json();
        //     })
        //     .then((data) => {
        //         l.push(data.response.meta.hits)
        //     })
        // fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${this.props.query}&pub_year=2013&api-key=xrp7NPZMKRQ3U8nmHM5UMXu2XwBKYXei`)
        //     .then((response) => {
        //         return response.json();
        //     })
        //     .then((data) => {
        //         l.push(data.response.meta.hits)
        //     })
        // fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${this.props.query}&pub_year=2014&api-key=xrp7NPZMKRQ3U8nmHM5UMXu2XwBKYXei`)
        //     .then((response) => {
        //         return response.json();
        //     })
        //     .then((data) => {
        //         l.push(data.response.meta.hits)
        //     })
        console.log(l)

    }

    render() {
        return (
            <div className={"my-pretty-chart-container"}>
                <Chart
                    chartType="ScatterChart"
                    data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
                    width="100%"
                    height="400px"
                    legendToggle
                />
            </div>
        );
    }
}