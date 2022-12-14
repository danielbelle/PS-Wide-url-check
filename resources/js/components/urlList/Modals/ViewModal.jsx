import React, { Component } from 'react';


class ViewModal extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="modal fade" id={"viewModal" + this.props.modalId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Detalhes da URL</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <strong>Url</strong>: <a href={this.props.urlData.currentUrlName} target="_blank">{this.props.urlData.currentUrlName}</a>
                            <hr />

                            <strong>Corpo Url</strong>:<pre> {this.props.urlData.currentUrlStatus === 404 ? 'Erro 404, página não encontrada' : this.props.urlData.currentUrlBody}</pre>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default ViewModal;

