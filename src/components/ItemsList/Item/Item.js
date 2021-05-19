import React, { Fragment } from 'react';

const Item = props => {

    return <Fragment>
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <img src={props.img} alt='' />
                </div>
                <div className='card-back'>
                    <h1>{props.name}</h1>
                    <ul>
                        <li>
                            <strong>Actor Name:</strong> {props.portrayed}
                        </li>
                        <li>
                            <strong>Nickname:</strong> {props.nickname}
                        </li>
                        <li>
                            <strong>Birthday:</strong> {props.birthday}
                        </li>
                        <li>
                            <strong>Status:</strong> {props.status}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </Fragment>;
}

export default Item;