import React, { Component } from 'react';


class TableRow extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <tr>
                <th>{this.props.data.id}</th>
                <td>{this.props.data.url}</td>
                <td>{this.props.data.acessado}</td>
                <td>{this.props.data.acessado}</td>
            </tr>
        )
    }

}

export default TableRow;

