import axios from 'axios';
import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class CreateModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            urlName: null
        }
    }

    isUrl = (s) => {
        var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
        return regexp.test(s);
    }


    inputUrlName = (event) => {
        const formControl = event.target.parentElement;
        const input = formControl.querySelector('input');
        const small = formControl.querySelector('small');

        if (event.target.value === '' || event.target.value === null) {

            small.innerText = 'URL vazia';
            small.className = 'text-danger';
            input.className = 'form-control is-invalid mb-3';

        } else if (!this.isUrl(event.target.value)) {
            small.innerText = 'Url não válida, Favor adicione uma URL válida ex: https://www.google.com.br/';
            small.className = 'text-danger';
            input.className = 'form-control is-invalid mb-3';

        } else {
            small.innerText = 'URL válida';
            small.className = 'text-success';
            input.className = 'form-control is-valid mb-3';

            this.setState({
                urlName: event.target.value,
            });
        }

    }


    storeUrlData = (event) => {

        const urlNameCreate = document.getElementById('urlNameCreate');
        console.log(urlNameCreate.value);
        if (this.isUrl(urlNameCreate.value)) {
            axios.post('/store/url/data', {
                user_id: this.state.urlUserId,
                urlName: this.state.urlName,
                urlAcessado: this.state.urlAcessado,
            }).then(() => {
                toast.success("Url adicionada com sucesso!");
                setTimeout(() => {
                    location.reload();
                }, 2500)
            })
        } else {
            toast.error("Verificar URL");
        }
    }


    render() {
        return (
            <>
                <div className='row text-right mb-3 pb-3'>
                    <button
                        type='button'
                        className='btn btn-info text-right col-3 offset-md-9 btn-sm'
                        data-bs-toggle="modal"
                        data-bs-target="#modalCreate">Adicionar URL</button>
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
                                            id="urlNameCreate"
                                            className='form-control mb-3'
                                            placeholder="Url no formato: https://www.google.com.br/"
                                            required
                                            onChange={this.inputUrlName}
                                            onKeyUp={function (event) {
                                                if (event.key === 'Enter') {
                                                    event.preventDefault();
                                                    document.getElementById("btnCreate").click();
                                                }
                                            }}
                                        />
                                        <small></small>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <input type="button"
                                    id="btnCreate"
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
