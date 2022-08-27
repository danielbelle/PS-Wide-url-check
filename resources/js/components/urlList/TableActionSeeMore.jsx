import axios from 'axios';
import React, { Component } from 'react';
import ViewModal from './Modals/ViewModal';


class TableActionSeeMore extends Component {


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
            <div className="btn-group-sm">

                <button type="button"
                    className="btn btn-secondary"
                    data-bs-toggle="modal"
                    data-bs-target={'#viewModal' + this.props.eachRowId}
                    onClick={() => { this.getUrlDetails(this.props.eachRowId) }}>Ver info</button>

                <ViewModal modalId={this.props.eachRowId} urlData={this.state} />

            </div>
        )
    }

}

export default TableActionSeeMore;
