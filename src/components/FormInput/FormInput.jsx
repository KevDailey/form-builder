import './FormInput.css';
import { useState } from 'react';
import InputPropertiesModal from '../InputPropertiesModal/InputPropertiesModal';

const FormInput = ({ input, removeInput, setDraggingOver, updateInputProperties }) => {

  const [ isModalOpen, setIsModalOpen ] = useState( false );

  function toggleIsModalOpen() {
    setIsModalOpen( prevIsModalOpen => !prevIsModalOpen )
  }

  function handleOnDrag( e ) {
    // Add input id to drag event
    e.dataTransfer.setData('inputId', input.id);
  }

  function handleOnDragOver( e ) {
    setDraggingOver( input );
  }

  function getInput( inputType ) {
    switch( inputType) {
      case 'text':
        return <TextInput input={ input } />
      case 'email':
        return <EmailInput input={ input } />
      case 'submit':
        return <SubmitButton input={ input } />
    }
  }

  return (
    <div className="dropped field-wrapper" draggable onDragStart={ handleOnDrag } onDragOver={ handleOnDragOver }>
      <div className="input-wrap">
        { getInput( input.type ) }
      </div>
      <button className="input-options-btn" onClick={ toggleIsModalOpen }><i className="fa-solid fa-gear"></i></button>
      <InputPropertiesModal 
        isOpen={ isModalOpen } 
        toggleModal={ toggleIsModalOpen }
        input={ input } 
        removeInput={ removeInput } 
        updateInputProperties={ updateInputProperties } />
    </div>
  );

}

const TextInput = ({ input }) => {
  return (      
    <>
      <label htmlFor={ input.id }>{ input.label }: </label>
      <input type="text" id={ input.id }/>
    </>
  );
}

const EmailInput = ({ input }) => {
  return (
    <>
      <label htmlFor={ input.id }>{ input.label }: </label>
      <input type="email" id={ input.id } />
    </>
  );
}

const SubmitButton = ({ input }) => {
  return (
    <>
      <button id={ input.id }>Submit</button>
    </>
  );
}

export default FormInput;