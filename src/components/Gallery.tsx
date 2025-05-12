import React, { useState } from 'react';
import Modal from 'react-modal';
import imagePaths from '../data/imageList.json';

Modal.setAppElement('#root'); // Set the root element for accessibility

const Gallery: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState<string | null>(null);

    const openModal = (image: string) => {
        setCurrentImage(image);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setCurrentImage(null);
    };

    return (
        <div className="gallery-page">
            <h2>Our Gallery</h2>
            <p>Explore our collection of 3D printed models and designs.</p>
            <div className="gallery-grid">
                {imagePaths.map((src, index) => (
                    <div key={index} className="gallery-item">
                        <img
                            src={src}
                            alt={`Gallery Image ${index + 1}`}
                            onClick={() => openModal(src)}
                            className="gallery-image"
                        />
                    </div>
                ))}
            </div>

            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="Image Modal"
                className="modal"
                overlayClassName="overlay"
            >
                {currentImage && <img src={currentImage} alt="Large View" className="modal-image" />}
                <button onClick={closeModal} className="modal-close-button">Close</button>
            </Modal>
        </div>
    );
};

export default Gallery;