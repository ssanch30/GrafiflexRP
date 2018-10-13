import React from 'react';
const errorTranslate={
  name : 'El campo Nombre',
  lastname : 'El campo Apellido',
  password: 'El campo Contraseña 1',
  password2: ''
}
const FormErrors = ({formErrors}) =>
  <div className='formErrors'>
    {Object.keys(formErrors).map((fieldName, i) => {
      if(formErrors[fieldName].length > 0){
        return (
          <p style={{color: 'red'}} key={i}>{errorTranslate[fieldName]} {formErrors[fieldName]} </p>
        )        
      } else {
        return '';
      }
    })}
  </div>

export default FormErrors