import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Table extends Component {


    constructor(props){
        super(props);

        this.state = {
            url: [],
        }
    }




    // GET URL list
    getUrlList = () => {

    }


    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col" width="100px">#</th>
                                        <th scope="col" width="100px">Nome</th>
                                        <th scope="col" width="100px">Salary</th>
                                        <th scope="col" width="100px">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
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

