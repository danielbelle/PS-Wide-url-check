import axios from 'axios';
import { delay } from 'lodash';
import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class UpdateModal extends Component {

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


    //atualiza o da URL nome
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

    /*static getDerivedStateFromProps(props, current_state) {
        let urlUpdate = {
            urlName: null
        }


        if (current_state.urlName && (current_state.urlName !== props.urlData.currenturlName)) {
            return null;
        }

        //se apagar repete o nome
         if (current_state.urlName !== props.urlData.currentUrlName ||
             current_state.urlName === props.urlData.currentUrlName) {
             urlUpdate.urlName = props.urlData.currentUrlName;
         }
         return urlUpdate;
    }*/

    updateUrlData = (event) => {

        const urlInputUpdate = document.getElementById('urlInputUpdate');

        console.log(urlInputUpdate.value);
        if (this.isUrl(urlInputUpdate.value)) {
            axios.post('/update/url/data', {
                urlId: this.props.modalId,
                urlName: this.state.urlName,
                urlAcessado: 0
            }).then(() => {
                toast.success("Sua Url foi atualizada com sucesso!");
                setTimeout(() => {
                    $('.modal').modal('hide');
                    $('body').removeClass('modal-open');
                    $('.modal-backdrop').remove();
                }, 2500)
            })
        } else {
            toast.error("Update não funcionou, verificar URL");
        }
    }

    render() {
        return (
            <div className="modal fade" id={"updateModal" + this.props.modalId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Atualizar URL</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className='form'>
                                <div className="form-group">
                                    <input type="text"
                                        id="urlInputUpdate"
                                        className='form-control mb-3'
                                        placeholder="Url no formato: https://www.google.com.br/"
                                        required
                                        onChange={this.inputUrlName}
                                        onKeyDown={function (event) {
                                            if (event.key === 'Enter') {
                                                document.getElementById("btnUpdate").click();
                                                event.preventDefault();
                                            }
                                        }}
                                    />
                                    <small></small>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <input type="button"
                                id="btnUpdate"
                                value="Atualizar"
                                className='btn btn-info'
                                onClick={this.updateUrlData}
                            />
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateModal;

