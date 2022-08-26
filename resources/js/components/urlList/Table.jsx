import React, { Component } from 'react';
import TableRow from './TableRow';
import axios from 'axios';


class Table extends Component {


    constructor(props){
        super(props);

        this.state = {
            urls: [],
        }
    }


    //Life cycle method
    componentDidMount(){
        this.getUrlList();
    }

    // GET URL list
    getUrlList = () => {
        let self = this;
        axios.get('/get/url/list').then(function (response){
            self.setState({
                urls: response.data
            });
        });

    }


    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <table className="table table-hover">
                                <thead>
                                    <tr width="auto">
                                        <th scope="col" width="50px">#</th>
                                        <th scope="col" width="2000px">Url</th>
                                        <th scope="col" width="150px">Visto</th>
                                        <th scope="col" width="3000px">Funções</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.urls.map(function(x,i){
                                        return <TableRow key={i} data={x} />
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Table;

