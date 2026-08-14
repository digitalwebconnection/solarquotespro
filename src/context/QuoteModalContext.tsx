import  { createContext, useContext, useState, type ReactNode } from 'react';
import Modal from '../components/common/Modal';
import QuoteRequestForm from '../components/forms/QuoteRequestForm';

interface QuoteModalContextType {
  isOpen: boolean;
  openQuoteModal: (initialPostcode?: string) => void;
  closeQuoteModal: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextType | undefined>(undefined);

export const QuoteModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [initialPostcode, setInitialPostcode] = useState('');

  const openQuoteModal = (postcode = '') => {
    setInitialPostcode(postcode);
    setIsOpen(true);
  };

  const closeQuoteModal = () => {
    setIsOpen(false);
  };

  return (
    <QuoteModalContext.Provider value={{ isOpen, openQuoteModal, closeQuoteModal }}>
      {children}
      <Modal isOpen={isOpen} onClose={closeQuoteModal}>
        <QuoteRequestForm onClose={closeQuoteModal} initialPostcode={initialPostcode} />
      </Modal>
    </QuoteModalContext.Provider>
  );
};

export const useQuoteModal = () => {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error('useQuoteModal must be used within a QuoteModalProvider');
  }
  return context;
};
