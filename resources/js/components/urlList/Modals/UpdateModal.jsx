import axios from 'axios';
import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class UpdateModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            /* MOSTRAR DETALHES DA REQUISIÇÃO HTTP*/
            urlName: null,
            urlAcessado: null
        }

    }

    //atualiza o da URL nome
    inputUrlName = (event) => {
        this.setState({
            urlName: event.target.value

        });
        /*console.log(this.state.urlName);*/
    }

    static getDerivedStateFromProps(props, current_state) {
        let urlUpdate = {
            urlName: null
        }


        if (current_state.urlName && (current_state.urlName !== props.urlData.currenturlName)) {
            return null;
        }

        if (current_state.urlName !== props.urlData.currentUrlName ||
            current_state.urlName === props.urlData.currentUrlName) {
            urlUpdate.urlName = props.urlData.currentUrlName;
        }


        return urlUpdate;
    }

    updateUrlData = () => {
        axios.post('/update/url/data', {
            urlId: this.props.modalId,
            urlName: this.state.urlName,
            urlAcessado: 0,
        }).then(() => {
            toast.success("Sua Url foi atualizada com sucesso!");
            setTimeout(() => {
                location.reload();

            }, 2500)
        })
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
                                <div className='form-group'>
                                    <input type="text"
                                        id="urlName"
                                        className='form-control mb-3'
                                        value={this.state.urlName ?? ""}
                                        onChange={this.inputUrlName}
                                    />
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <input type="submit"
                                className='btn btn-info'
                                value="Atualizar"
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

