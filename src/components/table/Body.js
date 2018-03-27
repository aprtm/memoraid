import React from 'react';

const TBody = (props) =>{
    /**
     * expects props.columnData to be an array of objects with
     * a property datakey matching a property name for the 
     * objects in the props.data array.
     */
    const bodyElements = props.data.map((cellData,i)=>{
        let sortValue = '';
        const tdElements = props.columnData.map((col,j)=>{
            const cellValue = cellData[col.datakey];
            if(props.sortBy && (col.datakey === props.sortBy)){
                sortValue = cellValue;
            }
            return (<td key={'bodyItem'+j}>
                {cellValue}
            </td>);
        });

        return (
            <tr key={'row'+i} sortvalue={sortValue}>
                {tdElements}
            </tr>
        );
    });

    if(props.sortBy){
        bodyElements.sort((a,b)=>{
            let A=+a.props.sortvalue, B=+b.props.sortvalue;
            A = isNaN(A)?a.props.sortvalue:A;
            B = isNaN(B)?b.props.sortvalue:B;
            if(!props.reverseSort){
                if(A>B){
                    return 1;
                }
                if(B>A){
                    return -1;
                }
            } else {
                if(A<B){
                    return 1;
                }
                if(B<A){
                    return -1;
                }
            }
            return 0;
        });
    }

    return (
        <tbody>
            {bodyElements}
        </tbody>
    );
}

export default TBody;