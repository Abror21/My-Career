
const Textarea = ({ label, placeholder, inputIsError, value, inputChange, inputBlur, errorMessage }) => {

    return (
        <div className="form-group">
            <label className={`${inputIsError ? 'text-danger' : ''}`}>{label}</label>
            <textarea
                style={{ borderColor: `${inputIsError ? 'red' : ''}` }}
                className={`${inputIsError ? 'border-danger' : ''}`}
                value={value}
                onChange={inputChange}
                onBlur={inputBlur}
                placeholder={placeholder}
                rows="4"
            />
            {inputIsError && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
    )
}

export default Textarea;