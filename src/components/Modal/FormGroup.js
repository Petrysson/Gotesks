export function FormGroup({ type, id, placeholder, value, onChange, label }) {
  return (
    <div className="form-group">
      <label htmlFor={id}>  {label} </label>
      <input
         type={ type }
         placeholder={ placeholder }
         value={ value }
         onChange={ onChange }
      />
    </div>
  );
}
