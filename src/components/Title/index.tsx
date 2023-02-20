import React from 'react';
import "./style.scss";

interface Props {
    title: string
}

const Title: React.FC<Props> = ({title}) => {
    return (
        <div className="titles">
           <hr/><p>{title}</p><hr/>
        </div>
    );
};

export default Title;