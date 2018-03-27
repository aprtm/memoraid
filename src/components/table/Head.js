import React from 'react';
import './headStyles.css';

const THead = (props) => {
    const headItemClickHandler = (name)=>{
        props.sortItems(name);
    }
    /**
     * expects props.headData to be an array of objects
     * that have a title property, to use as column labels
     */
    const headElements = props.data.map((h,i)=>{

        return (
            <th
                className='THead_th--hover'
                role="button"
                scope="col"
                key={'headItem'+i}
                onClick={headItemClickHandler.bind(this,h.datakey)}
            >
                ⇅{h.title}
            </th>
        );
    });
    return (
        <thead className="thead-light">
            <tr>
                {headElements}
            </tr>
        </thead>
    );
}

export default THead;