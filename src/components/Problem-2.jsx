import React, { useState } from 'react';
import ModalA from './ModalA';
import ModalB from './ModalB';

const Problem2 = () => {
    const [contacts, setcontacts] = useState([]);
    const [show, setShow] = useState('');
    console.log(contacts)

    const handleClose = () => {
        setShow(false);
    }
    const handleAllContacts = () => {
        fetch('https://contact.mediusware.com/api/contacts/')
            .then(res => res.json())
            .then(data => setcontacts(data.results));
        setShow('modalA');
    }
    const handleUSContacts = () => {
        fetch('https://contact.mediusware.com/api/country-contacts/us/')
            .then(res => res.json())
            .then(data => console.log(data));
        setShow('modalB');
    }
    // console.log(contacts)
    return (

        <div className="container">
            <div className="row justify-content-center mt-5 position-relative">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-lg btn-outline-primary" type="button" onClick={() => handleAllContacts()}>All Contacts</button>
                    <button className="btn btn-lg btn-outline-warning" type="button" onClick={() => handleUSContacts()}>US Contacts</button>
                </div>
                {
                    show === 'modalA' ? <ModalA show={show} contacts={contacts} handleClose={handleClose} /> : <ModalB show={show} contacts={contacts} handleClose={handleClose} />
                }
            </div>
        </div >
    );
};

export default Problem2;