import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Modal from './Modal';

const tabdiv = <div>Contenu du Tab 1dazdazdzad  <br />
    dzadazd<br />
    zadazdazdaz
    dazazdazd<br />
</div>;

export default {
  title: 'Library/Modal/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const modalContent = "Ceci est un contenu personnalisé pour le modal.";

const handlePrimaryButtonClick = () => {
  console.log("Bouton principal cliqué !");
};

const handleSecondaryButtonClick = () => {
  console.log("Bouton secondaire cliqué !");
};

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button className='open-button' onClick={handleOpenModal}>Ouvrir le modal</button>
      <Modal
        isOpen={isOpen}
        onClose={handleCloseModal}
        {...args}
      >
        {modalContent}
      </Modal>
    </div>
  );
};

export const DefaultModal = Template.bind({});
DefaultModal.args = {
  title: tabdiv,
  primaryButtonLabel: 'Confirmer',
  onPrimaryButtonClick: handlePrimaryButtonClick,
  secondaryButtonLabel: 'Annuler',
  onSecondaryButtonClick: handleSecondaryButtonClick,
content: "ceci est un testcfazefdadaazda dzadazd",
centercontent: true,
centerTitle: true,
borderGeneral: 2,
borderFirstButtonColor: "blue",
Weightcontent: true,
ButtonTextSecondButtonColor: "red",
borderFirstButtonColor: "white",
borderSecondButtonColor: "#007bff",
titleBackgroundColor: "blue",
secondaryButtonColor: "white",
buttonRadius: 0,
buttonSpacing: 20,
titleBackground: "#007bff",
titleColor: "white",
centertitle: true,
modalRadius: 0,
};

export const NoSecondaryButtonModal = Template.bind({});
NoSecondaryButtonModal.args = {
    title: 'Modal sans bouton secondaire',
    primaryButtonLabel: 'Confirmer',
    onPrimaryButtonClick: handlePrimaryButtonClick,
    hideSecondaryButton: true,
    content: "ceci est un test",
    centercontent: true,
    borderGeneral: 2,
    borderColor: "green",
    modalBackgroundColor: "orange",
};
