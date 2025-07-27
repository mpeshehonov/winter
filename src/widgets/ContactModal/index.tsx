import { motion, AnimatePresence } from 'framer-motion';
import styled from '@emotion/styled';
import ContactForm from '../../features/ContactForm';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
`;

function ContactModal({ isOpen, onClose }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <ModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <ModalContent
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Обратная связь</h2>
            <ContactForm onSubmit={onClose} />
            <button onClick={onClose}>Закрыть</button>
          </ModalContent>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
}

export default ContactModal; 