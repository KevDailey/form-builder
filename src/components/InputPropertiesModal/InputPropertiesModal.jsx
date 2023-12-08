import './InputPropertiesModal.css';
import { useState } from 'react';

const InputPropertiesModal = ({ isOpen, input, removeInput, updateInputProperties, toggleModal }) => {
  const [ propertiesFormData, setPropertiesFormData ] = useState({ ...input });

  function savePropertyChanges() {
    updateInputProperties( input, propertiesFormData );
  }

  function handleChange( event ) {
    setPropertiesFormData( prevFormData => {
      return {
          ...prevFormData,
          [event.target.name]: event.target.value
      }
    })
  }

  return (
    <div className={ `input-modal${ isOpen ? ' open' : '' }` }>
      <div className="input-modal__inner">
        <div className="property-inputs">
          <fieldset>
            <label htmlFor="label">Input Label: </label>
            <input id="label" name="label" onChange={ handleChange } placeholder={ input.label } />
          </fieldset>
          <fieldset>
            <label htmlFor="id">Input ID: </label>
            <input id="id" name="id" onChange={ handleChange } placeholder={ input.id } />
          </fieldset>
        </div>
        <div className="property-buttons">
          <button onClick={ toggleModal }>Close Modal</button>
          <button onClick={ () => removeInput( input ) } className="remove-field">Delete Input</button>
          <button onClick={ savePropertyChanges }>Save Changes</button>
        </div>
      </div>
  
    </div>
  )
}

export default InputPropertiesModal;