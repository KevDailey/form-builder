import './FormVisualizer.css';
import { useState } from 'react';
import FormInput from '../FormInput/FormInput';


const FormVisualizer = ({ formData, addNewInput, removeInput, insertInput, updateInputProperties }) => {

  const [ draggingOver, setDraggingOver ] = useState( null );

  function handleOnDrop( e ) {
    if( e.dataTransfer.getData('newInput') ) {
      const inputType = e.dataTransfer.getData('inputType'); // Get widget type from drag event
      addNewInput( inputType );
    } else {
        if( draggingOver ) {
          const inputId = e.dataTransfer.getData('inputId');
          const insertIndex = formData.inputs.findIndex( input => input.id === draggingOver.id );
          insertInput( inputId, insertIndex );
        }
    }
  }

  function handleOnDragOver( e ) {
    e.preventDefault();
  }

  function createInputComponent( input ) {
    return (
      <FormInput 
        input={ input } 
        key={ input.id } 
        removeInput={ removeInput } 
        setDraggingOver={ setDraggingOver } 
        updateInputProperties={ updateInputProperties }
      />
    )
  }

  return(
    <div className="widget-container visualizer-widget" onDrop={ handleOnDrop } onDragOver={ handleOnDragOver }>
      <h2 className="widget-title">Form Visualizer</h2>
      <p className="widget-desc">Visualize and edit your form</p>
      <div className="widget-content">
        {formData.inputs.map( input => (
          createInputComponent( input )
        ))}
      </div>
    </div>
  );

}

export default FormVisualizer;
