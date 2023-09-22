import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalC from './ModalC';

const ModalA = ({ show, contacts, handleClose }) => {
    const [evenIDS, setEvenIDS] = useState([]);
    const [check, setCheck] = useState(false);
    const [modalC, setModalC] = useState(false);
    const [modalCData, setModalCData] = useState({});

    const navigate = useNavigate();

    function handleEvenContact(contacts) {
        let evenContacts = contacts.filter(c => c.id % 2 === 0)
        setEvenIDS(evenContacts)
    }
    function handleModalC(val) {
        setModalCData(val)
        setModalC(!ModalC)
        console.log(modalCData)
    }
    return (
        <div style={{ height: '500px' }}
            className={`border border-secondary-subtle w-75 border-2 rounded p-4 position-absolute bg-dark overflow-auto ${show ? 'visible' : 'invisible'}`}>
            <div className='d-flex float-end gap-2'>
                <button className='p-2 border border-1 rounded border-primary' onClick={() => navigate('modalA')}>All Contacts</button>
                <button className='p-2 border border-1 rounded border-primary' onClick={() => navigate('modalB')}>Us Contact</button>
                <button className='p-2 border border-1 rounded border-danger hover:bg-danger' onClick={() => handleClose()}>Close</button>
            </div>
            <div className=''>
                <table className="table text-light">
                    <thead>
                        <tr>
                            <th scope="col">Country</th>
                            <th scope="col">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            contacts?.map(contact =>
                                <tr onClick={() => handleModalC(contact)} key={contact.id}>
                                    <td>{contact.country?.name}</td>
                                    <td>{contact.phone}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                {modalC && <ModalC modalCData={modalCData} />}
                <div className=''>
                    <input onClick={() => { setCheck(!check); handleEvenContact(contacts) }} className='me-2' type="checkbox" id="evenOnly" name="onlyEven" value="even" />
                    <label className='text-warning' htmlFor="evenOnly">Only even</label>
                </div>
                {check && <div className='d-flex'>
                    <p className='text-light'>The even ID's : </p>
                    {evenIDS?.map(c => <p key={c.id} className='text-light'>{c.id},</p>)}
                </div>}
            </div>
        </div>
    );
};

export default ModalA;