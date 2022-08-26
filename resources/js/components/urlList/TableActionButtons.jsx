import axios from 'axios';
import React, { Component } from 'react';
import ViewModal from './Modals/ViewModal';
import UpdateModal from './Modals/UpdateModal';
import DeleteModal from './Modals/DeleteModal';


class TableActionButtons extends Component {


    constructor(props) {
        super(props);

        this.state = {
            /* MOSTRAR DETALHES DA REQUISIÇÃO HTTP*/
            currentUrlName: null,
            currentUrlAcessado: null
        }

    }
    // Pegar os dados de cada URL

    getUrlDetails = (id) => {
        axios.post('/get/individual/url/details', {
            urlId: id
        }).then((response) => {
            this.setState({
                currentUrlName: response.data.url,
                currentUrlAcessado: response.data.acessado,
            })

            /*console.log(response);*/
        });
    }


    render() {
        return (
            <div className="btn-group btn-group-sm" role="group">
                <button type="button"
                    className="btn btn-secondary"
                    data-bs-toggle="modal"
                    data-bs-target={'#viewModal' + this.props.eachRowId}
                    onClick={() => { this.getUrlDetails(this.props.eachRowId) }}>Ver info</button>
                <ViewModal modalId={this.props.eachRowId} urlData={this.state} />

                <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target={'#updateModal' + this.props.eachRowId}
                    onClick={() => { this.getUrlDetails(this.props.eachRowId) }}>Atualizar</button>
                <UpdateModal modalId={this.props.eachRowId} urlData={this.state} />


                <DeleteModal modalId={this.props.eachRowId} urlData={this.state} />
                <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target={'#deleteModal' + this.props.eachRowId}
                    onClick={() => { this.getUrlDetails(this.props.eachRowId) }}>Excluir</button>
            </div>
        )
    }

}

export default TableActionButtons;
