import './ToggleBtn.css';

const ToggleBtn = ({ onClick }) => {
  return (
    <div className="toggle-btn">
      <input type="checkbox" id="toggle" className="toggle-input" />
      <label htmlFor="toggle" className="toggle-label" onClick={ onClick }></label>
    </div>
  )
}

export default ToggleBtn;