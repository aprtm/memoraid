import React from 'react';
import THead from './Head';
import TBody from './Body';

class Table extends React.Component {
    constructor(props){
        super(props);
        this.state={
            sortBy : '',
            reverse : false
        }
    }
    updateSortBy = (str) => {
        let reverse = this.state.reverse;
        if(str === this.state.sortBy){
            reverse = !reverse;
        }
        
        this.setState({sortBy: str, reverse: reverse});
    }
    render(){
        const {sortBy, reverse}=this.state
        return (
            <table className="table table-sm">
                <THead data={this.props.headData} sortItems={this.updateSortBy}/>
                <TBody
                    data={this.props.bodyData}
                    columnData={this.props.headData}
                    sortBy={sortBy}
                    reverseSort={reverse}
                />
            </table>
        );
    }
}

export default Table;