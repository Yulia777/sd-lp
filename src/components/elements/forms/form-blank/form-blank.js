import React from 'react';
import MaskedInput from 'react-maskedinput';

const FormBlank = (props) => {
    return(
        <div className="form-blank__wrap">
            <form className="form-blank" onSubmit={props.send}>
                <input className="form-blank__field" type="text" placeholder={'Имя*'} name="name"/>
                <MaskedInput  mask="+7(111) 111 11 11" type="text" placeholder={'Телефон*'} size={''} name="phone" required="true" className="form-blank__field"/>
                <textarea className="form-blank__field" name="message" placeholder={'Ваш комментарий'}></textarea>
                <input className="btn" type="submit" value="Отправить"/>
            </form>
        </div>
    )
};

export default FormBlank;