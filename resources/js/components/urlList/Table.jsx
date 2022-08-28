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
            //console.log(response);
        });

    }

    verifyDbUrls = () => {
        if (this.state.urls.length > 0) {
            this.state.urls.map(function (x, i) {
                return <TableRow key={i} data={x} />
            })
        }
    }

    render() {
        return (
            <div className="container">
                <ToastContainer autoClose={2200} />
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        {<CreateModal />}
                        <div className="card" >
                            <table className="table table-hover">
                                <thead>
                                    <tr width="auto">
                                        <th scope="col" width="5%">#</th>
                                        <th scope="col" width="30%">Url</th>
                                        <th scope="col" width="15%">Lido pelo robo?</th>
                                        <th scope="col" width="15%">Código de Status</th>
                                        <th scope="col" width="20%">Funções</th>
                                        <th scope="col" width="15%">Ver detalhes</th>
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
            </div >
        );
    }
}

export default Table;

