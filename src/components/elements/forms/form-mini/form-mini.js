import React from 'react';
import MaskedInput from 'react-maskedinput';

const FormMini = (props) => {
    return(
        <div className="form-blank__wrap">
            <form className="form-blank" onSubmit={props.send}>
                <MaskedInput  mask="+7(111) 111 11 11" type="text" placeholder={'Телефон*'} size={''} name="phone" required="true" className="form-blank__field"/>
                <input className="form-blank__field" type="email" placeholder={'Email*'} name="email"/>
                <input className="btn" type="submit" value="Оставить заявку"/>
            </form>
        </div>
    )
};

export default FormMini;