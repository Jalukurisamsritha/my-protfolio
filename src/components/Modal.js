import React from 'react';
import Modal from 'react-modal'; // Make sure to install react-modal

const ProjectModal = ({ isOpen, onRequestClose, imageUrl, title }) => {
  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose} 
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)', // Dark background overlay
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          background: 'transparent', // No background color
          border: 'none', // Remove border
          padding: '0', // Remove padding
        }
      }}
      ariaHideApp={false} // Optional: Hide the app behind the modal for accessibility
    >
      <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
        <img 
          src={imageUrl} 
          alt={title} 
          style={{ width: '100%', height: '100%', objectFit: 'contain' }} // Responsive image
        />
        <button 
          onClick={onRequestClose} 
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '24px',
            cursor: 'pointer'
          }}
        >
          &times; {/* Close button */}
        </button>
      </div>
    </Modal>
  );
};

export default ProjectModal;
