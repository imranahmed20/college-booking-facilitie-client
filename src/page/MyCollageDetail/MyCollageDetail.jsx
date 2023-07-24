import React from 'react';

const MyCollageDetail = ({ collage }) => {
    const { address, birth, email, name, number, photo, subject } = collage;
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                {name}
            </td>
            <td>
                {email}
            </td>
            <td>{address}</td>
            <td>{birth}</td>
            <td>{subject}</td>
            <td>{number}</td>
        </tr>
    );
};

export default MyCollageDetail;