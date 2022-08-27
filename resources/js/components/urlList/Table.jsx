import React, { Component } from 'react';
import TableRow from './TableRow';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateModal from './Modals/CreateModal';


class Table extends Component {


    constructor(props) {
        super(props);

        this.state = {
            urls: [],
        }
    }


    //Life cycle method
    componentDidMount() {
        this.getUrlList();
    }


    // GET URL list
    getUrlList = () => {
        let self = this;
        axios.get('/get/url/list').then(function (response) {
            self.setState({
                urls: response.data
            });
            console.log(response);
        });

    }


    render() {
        return (
            <div className="container">
                <ToastContainer autoClose={2200} />
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <CreateModal />
                        <div className="card" >
                            <table className="table table-hover">
                                <thead>
                                    <tr width="auto">
                                        <th scope="col" width="50px">#</th>
                                        <th scope="col" width="2000px">Url</th>
                                        <th scope="col" width="150px">Visto</th>
                                        <th scope="col" width="2000px">Funções</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.urls.map(function (x, i) {
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

