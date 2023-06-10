import InputMask from 'react-input-mask';

const Input = ({ mask, type, label, placeholder, inputIsError, value, inputChange, inputBlur, errorMessage, isExist }) => {
    
    return (
        <div className="form-group">
            <label className={`${inputIsError || isExist ? 'text-danger' : ''}`}>{label}</label>
            <InputMask
                mask={mask}
                maskChar={null}
                style={{borderColor: `${inputIsError || isExist ? 'red' : ''}`}}
                type={type}
                className={`${inputIsError ? 'border-danger' : ''}`}
                value={value}
                onChange={inputChange}
                onBlur={inputBlur}
                placeholder={placeholder}
                valueIsNumericString={true}
            />
            {inputIsError && <p style={{ color: 'red' }}>{errorMessage}</p>}
            {isExist && <p style={{ color: 'red' }}>Username already exists.</p>}
        </div>
    )
}

export default Input;