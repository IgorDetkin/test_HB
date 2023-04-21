import { useState, useCallback } from "react";

function useValidation() {
    const [values, setValues] = useState({});
    const [isValid, setIsValid] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const target = event.target;
        const name = event.name;
        const value = event.value;

        setValues({...values, [name]: value});
        // setIsValid(event.target.closest('form').checkvalidity());
        setErrors({...errors, [name]: event.target.validationMessage });
    }

    const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => { //!!!
        setValues(newValues);
        setErrors(newErrors);
        setIsValid(newIsValid);
      }, [setValues, setErrors, setIsValid]);

      return { values, isValid, errors, setValues, setIsValid, handleChange, resetForm};
}

export default useValidation;
