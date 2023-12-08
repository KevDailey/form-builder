import './Main.css';
import { useState } from 'react';
import FormOptions from '../FormOptions/FormOptions';
import FormMarkup from '../FormMarkup/FormMarkup';
import FormVisualizer from '../FormVisualizer/FormVisualizer';
import inputDefaults from '../../data/inputDefaults';

const Main = () => {

  const [ formData, setFormData ] = useState({
    method: 'post',
    action: '#',
    numInputsUsed: {
      'text': 0,
      'email': 0,
      'submit': 0
    },
    inputs: []
  });

  function addNewInput( inputType ) {
    const newInput = { ...inputDefaults[ inputType ] }; // Clone Default Object
    const inputTypeIndex = formData.numInputsUsed[ newInput.type ] + 1;

    newInput.inputTypeIndex = inputTypeIndex;
    newInput.id = `${ newInput.type }${ inputTypeIndex }`; // Set Input ID
    
    // Update FormData State
    setFormData( prevFormData => {
      const newInputs = [ ...prevFormData.inputs, newInput ];
      const newNumInputsUsed = { 
        ...prevFormData.numInputsUsed,
        [ newInput.type ]: inputTypeIndex 
      };
      return { 
        ...prevFormData,
        numInputsUsed: newNumInputsUsed,
        inputs: newInputs
      }
    });
  }

  function removeInput( targetInput ) {
    const currentWidgetIndex = formData.inputs.findIndex( input => input.id === targetInput.id ); // Find Element in activeWidgets state array
    setFormData( prevFormData => {
        const updatedInputs = prevFormData.inputs.toSpliced(currentWidgetIndex, 1)
        return {
          ...prevFormData,
          inputs: updatedInputs
        }
    });
  }

  function insertInput( inputId, insertIndex ) {
      const inputBeingMoved = formData.inputs.find( input => input.id === inputId );
      const inputBeingMovedIndex = formData.inputs.findIndex( input => input.id === inputId );
      const inputsArray = formData.inputs.toSpliced( inputBeingMovedIndex, 1 );
      inputsArray.splice(insertIndex, 0, inputBeingMoved)
      setFormData( prevFormData => {
        return { 
          ...prevFormData,
          inputs: inputsArray
        }
      });
  }

  function updateInputProperties( currentInput, updatedProperties ) {
    const inputBeingUpdatedIndex = formData.inputs.findIndex( input => input.id === currentInput.id );
    const updatedInputsArray = formData.inputs.toSpliced( 
      inputBeingUpdatedIndex, 
      1, 
      {
        ...currentInput,
        ...updatedProperties
      }
    );
    setFormData( prevFormData => {
      return { 
        ...prevFormData,
        inputs: updatedInputsArray
      }
    });
  }

  return (
    <main className="main">
      <div className="container">
        <div className="dashboard-widgets">
          <FormOptions />
          <FormVisualizer 
            formData={ formData } 
            addNewInput={ addNewInput } 
            removeInput={ removeInput } 
            insertInput={ insertInput }
            updateInputProperties={ updateInputProperties }
          />
          <FormMarkup formData={ formData } />
        </div>
      </div>
    </main>
  )
}

export default Main;