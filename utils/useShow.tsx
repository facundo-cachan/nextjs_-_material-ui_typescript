import { useState } from 'react';

const useShow = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleHide = () => setShow(false);

    return {
        handleShow,
        handleHide,
        show,
    };
};

export { useShow };
