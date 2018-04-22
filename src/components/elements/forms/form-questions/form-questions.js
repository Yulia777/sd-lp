import React from 'react';
import MaskedInput from 'react-maskedinput';

const FormQuestions = (props) => {
    return(
        <div>
            <form className="questions__form" onSubmit={props.send}>
                <label>Имя</label>
                <input type="text" className="field" name="name"/>
                <label>Номер телефона</label>
                {/*<input type="text" className="field"/>*/}
                <MaskedInput  mask="+7(111) 111 11 11" type="text" size={''} name="phone" required="true" className="field"/>
                <label>Введите Ваш вопрос</label>
                <textarea className="field field--textarea" name="message"></textarea>
                <button className="btn">
                    Задать вопрос
                </button>
            </form>


        </div>
    )
};

export default FormQuestions;