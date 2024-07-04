import React, { FC, useRef, useEffect, ChangeEvent } from 'react';

interface ModalProps {
  showModal: boolean;
  closeModal: () => void;
  pincode: string;
  setPincode: (pin: string) => void;
}

const Modal: FC<ModalProps> = ({ showModal, closeModal, pincode, setPincode }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const isValidPinCode = pincode.length === 6 && /^\d+$/.test(pincode);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputPin = e.target.value;
    if (/^\d{0,6}$/.test(inputPin)) {
      setPincode(inputPin);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };

    if (showModal) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showModal, closeModal]);

  if (!showModal) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black bg-opacity-50"></div>
      <div ref={modalRef} className="relative bg-white p-8 rounded-lg shadow-lg max-w-lg w-full z-10">
        <h2 className="text-2xl font-bold mb-4">Enter your registration PIN Code</h2>
        <p className="mb-4 text-gray-600">
          Scooter price depends on PIN Code. For registration, PIN Code should be as per your address proofs.
        </p>
        <input
          type="text"
          placeholder="PIN Code"
          value={pincode}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
        />
        <button
          onClick={isValidPinCode ? closeModal : undefined}
          className={`px-4 py-2 rounded w-full ${isValidPinCode ? 'bg-black text-white' : 'bg-gray-400 text-white'}`}
          disabled={!isValidPinCode}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Modal;
