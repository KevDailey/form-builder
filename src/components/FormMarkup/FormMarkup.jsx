import './FormMarkup.css';

const FormMarkup = ({ formData }) => {

  function generateFormMarkup() {
    return <>
      <div>{ `<form method="${ formData.method }" action="${ formData.action }">` }</div>
      {formData.inputs.map( input => (
        <div key={ input.id }>{ generateFormInputMarkup( input ) }</div>
      ))}
      <div>{ `</form>` }</div>
    </>
  }
  
  function generateFormInputMarkup( input ) {
    let inputMarkup;
    if( input.tag === 'input' ) {
      inputMarkup = `<input 
            type="${ input.type }" 
            id="${ input.id }" 
        />`
    }
    return inputMarkup;
  }

  return(
    <div className="widget-container markup-rendering-widget">
      <h2 className="widget-title">Form Markup</h2>
      <p className="widget-desc">Copy and paste your code</p>
      <div className="widget-content">
        <code className="html-rendering">
          { generateFormMarkup() }
        </code>
      </div>
    </div>
  );

}

export default FormMarkup;
