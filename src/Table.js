import React from 'react';

const TableHeader = () => {
    return (
        <thread>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Remove</th>
            </tr>
        </thread>
    )
}

const TableBody = (props) => {
    const rows = props.characterData.map((row,index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={()=>props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    })

    return <tbody>{rows}</tbody>
 }

class Table extends React.Component {

    render(){
        // const {characterData, removeCharacter} = props;
        // const {characterData} = this.props
        return(
        <table>
            <TableHeader />
            <TableBody characterData={this.props.characterData}
                removeCharacter={this.props.removeCharacter}
            />
        </table>
        );
    }
}

export default Table;