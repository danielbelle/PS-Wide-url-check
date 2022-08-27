import axios from 'axios';
import React, { Component } from 'react';
import { toast } from 'react-toastify';

class CreateModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            urlName: null,
            urlAcessado: 0,
        }
    }


    inputUrlName = (event) => {
        this.setState({
            urlName: event.target.value,
        });
    }

    storeUrlData = () => {
        axios.post('/store/url/data', {
            urlName: this.state.urlName,
            urlAcessado: this.state.urlAcessado
        }).then(() => {
            toast.success("Url adicionada com sucesso!");

            setTimeout(() => {
                location.reload();
            }, 2500)
        })
    }

    render() {
        return (
            <>
                <div className='row text-right mb-3 pb-3'>
                    <button className='btn btn-info text-right col-3 offset-md-9 btn-sm'
                        data-toggle="modal"
                        data-target="#modalCreate"
                    >
                        Adicionar URL
                    </button>
                </div>
                <div className="modal fade" id="modalCreate" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Detalhe da URL</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form className='form'>
                                    <div className="form-group">
                                        <input type="text"
                                            id="urlName"
                                            className='form-control mb-3'
                                            placeholder="Adicione sua URL aqui"
                                            onChange={this.inputUrlName}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <input type="button"
                                    value="Salvar"
                                    className='btn btn-info'
                                    onClick={this.storeUrlData}
                                />

                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default CreateModal;
