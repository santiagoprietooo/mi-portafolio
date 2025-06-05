const FormField = ({fieldType, useFor, placeholder, val, changeVal}) => {
    return (
        <>
            <div className="form-field">
                {fieldType === "textarea" ?
                    (<textarea
                        name={useFor}
                        id={useFor}
                        className="peer form-field-input"
                        placeholder={placeholder}
                        value={val}
                        onChange={(e) => changeVal(e)}
                        autoComplete="off"
                        rows={3}
                    />)
                :
                    (<input
                        type={fieldType}
                        name={useFor}
                        id={useFor}
                        className="peer form-field-input"
                        placeholder={placeholder}
                        value={val}
                        onChange={(e) => changeVal(e)}
                        autoComplete="on"
                    />)
                }

                <label
                    htmlFor={useFor}
                    className={`
                        ${fieldType === "textarea" ? "form-field-label-textarea" : "form-field-label"}
                        peer-placeholder-shown:top-1/2
                        peer-placeholder-shown:text-base
                        peer-placeholder-shown:text-gray-500
                        peer-focus:top-4
                        peer-focus:text-black/50
                        ${val ? "form-field-input-value" : ""}
                    `}
                >
                    {placeholder}
                </label>
            </div>
        </>
    )
}

export default FormField;