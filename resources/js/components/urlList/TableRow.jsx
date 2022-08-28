import { indexOf } from 'lodash';
import React, { Component } from 'react';
import TableActionButtons from './TableActionButtons';
import TableActionSeeMore from './TableActionSeeMore';

class TableRow extends Component {

    constructor(props){
        super(props);
    }



    render() {
        return (
            <tr>
                <td>{this.props.data.url}</td>
                <td>{this.props.data.acessado === 1 ? "Sim" :"Não"}</td>
                <td>{this.props.data.id}</td>
                <td><TableActionButtons eachRowId={ this.props.data.id} /></td>
                <td><TableActionSeeMore eachRowId={ this.props.data.id} /></td>
            </tr>
        )
    }

}

export default TableRow;

