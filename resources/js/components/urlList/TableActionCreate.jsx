import axios from 'axios';
import React, { Component } from 'react';
import CreateModal from './Modals/CreateModal';


class TableActionSeeMore extends Component {


    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className='row text-right mb-3 pb-3'>
                <button className='btn btn-info text-right col-3 offset-md-9 btn-sm'
                    data-toggle="modal"
                    data-target="#modalCreate"
                >
                    Adicionar URL
                </button>
                <CreateModal modalId={this.props.eachRowId} urlData={this.state} />
            </div>

        )
    }

}

export default TableActionSeeMore;
