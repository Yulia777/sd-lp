import React, { Component } from 'react';
import FormQuestions from "../../elements/forms/form-questions/form-questions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {sendEmail} from "../../../actions/actions";

class Questions extends Component{

    sendFormQuestions(event) {
        event.preventDefault();
        const formData = {
            type: 'questions',
            name: event.target.name.value,
            phone: event.target.phone.value,
            message: event.target.message.value
        };
        event.target.name.value = '';
        event.target.phone.value = '';
        event.target.message.value = '';
        this.props.sendEmail(formData);
        yaCounter31086026.reachGoal('ZadatVopros');
    }


    showNotification() {
        return this.props.isNotification ?
            <p className={'visible-notification animated bounceIn'}>Наш менеджер свяжется с Вами в ближайшие 15 минут</p>
            : null;
    }

    render() {
        return(
            <section className="questions">
                <div className="container questions__wrap">
                    <h2 className="questions__title">
                        Остались вопросы?
                    </h2>
                    <p className="questions__desc">
                        Задайте интересующий вас вопрос нашему специалисту
                        и получите ответ в течение 15 минут!
                    </p>
                    {/*<form className="questions__form">
                        <label>Имя</label>
                        <input type="text" className="field"/>
                        <label>Номер телефона</label>
                        <input type="text" className="field"/>
                        <label>Введите Ваш вопрос</label>
                        <textarea className="field field--textarea"></textarea>
                        <button className="btn">
                            Задать вопрос
                        </button>
                    </form>*/}
                    {this.showNotification()}
                    <FormQuestions send={this.sendFormQuestions.bind(this)}/>
                </div>
            </section>
        )
    }
}


export function mapStateToProps(store) {
    return {
        isNotification: store.mainReducer.isCallbackNotification
    }
}

export const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({sendEmail}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
