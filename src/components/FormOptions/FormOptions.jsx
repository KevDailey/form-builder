import './FormOptions.css';

const FormOptions = () => {

  function handleOnDrag( e, type ) {
    // Add input type to drag event
    e.dataTransfer.setData('newInput', true);
    e.dataTransfer.setData('inputType', type);
  }

  return(
    <div className="widget-container options-widget">
      <h2 className="widget-title">Input Options</h2>
      <p className="widget-desc">Drag and drop an input block</p>
      <div className="widget-content">
        <button className="option-btn" draggable onDragStart={ (e) => { handleOnDrag(e, 'Text')} }>Text Input</button>
        <button className="option-btn" draggable onDragStart={ (e) => { handleOnDrag(e, 'Email')} }>Email Input</button>
        <button className="option-btn" draggable onDragStart={ (e) => { handleOnDrag(e, 'Submit')} }>Submit</button>
      </div>
    </div>
  );
}     

export default FormOptions;
