import React, {ChangeEvent, ChangeEventHandler, useEffect, useState} from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const UsernameModal = () => {
    const [modalIsOpen, setIsOpen] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("");

    useEffect(() => {
        if (localStorage.getItem("username")) {
            setIsOpen(false)
        } else {
            setIsOpen(true)
        }
    }, [])

    function submitUsername() {
        if (username.length > 5) {
            localStorage.setItem("username", username);
            setIsOpen(false);
            setUsername("");
        }
    }

    return (
        <div>
            <Modal isOpen={modalIsOpen} style={customStyles} className="username-modal">
                <div>
                    Enter Username
                    <div>
                        <input
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                            value={username}
                            type="text"/>
                        <button onClick={submitUsername}>Entrer</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default UsernameModal;