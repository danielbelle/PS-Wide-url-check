import axios from 'axios';
import React, { Component } from 'react';
import ViewModal from './Modals/ViewModal';


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

            console.log(response);  
        });
    }


    render() {
        return (
            <div className="btn-group" role="group">

                <button type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target={'#viewModal' + this.props.eachRowId}
                    onClick={() => { this.getUrlDetails(this.props.eachRowId) }}

                >
                    Ver conteúdo
                </button>
                <ViewModal modalId={this.props.eachRowId} urlData={this.state} />

                <button
                    type="button"
                    className='btn btn-info'

                >
                    Atualizar URL
                </button>


                <button
                    type="button"
                    className='btn btn-danger'

                >
                    Excluir URL
                </button>
            </div>
        )
    }

}

export default TableActionButtons;
