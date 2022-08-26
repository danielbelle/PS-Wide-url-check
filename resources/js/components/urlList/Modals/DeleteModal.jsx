import axios from 'axios';
import React, { Component } from 'react';
import { toast } from 'react-toastify';

class DeleteModal extends Component {

    constructor(props) {
        super(props);
    }

    deleteUrlData = (url) => {
        axios.delete('/delete/url/data/' + url).then(() => {
            toast.error("Url excluída com sucesso");

            setTimeout(() => {
                location.reload();
            }, 2500)
        })
    }

    render() {
        return (
            <div className="modal fade" id={"deleteModal" + this.props.modalId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Deletar Url</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Você tem certeza que deseja deletar a URL?
                        </div>
                        <div className="modal-footer">

                            <button type="button"
                                className='btn btn-danger'
                                data-bs-dismiss="modal"
                                onClick={() => { this.deleteUrlData(this.props.modalId) }}>
                                Sim
                            </button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DeleteModal;

