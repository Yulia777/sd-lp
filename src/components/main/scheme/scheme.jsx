import React, { Component } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {callbackSuccess, sendEmail} from "../../../actions/actions";
import Popup from '../../elements/popup/popup';

class Scheme extends Component{

    constructor(props) {
        super(props);
        this.state = {
            popupScheme: false
        };
    }

    sendFormScheme(event) {
        event.preventDefault();
        const formData = {
            type: 'scheme',
            name: event.target.name.value,
            phone: event.target.phone.value,
            message: event.target.message.value,

        };
        event.target.name.value = '';
        event.target.phone.value = '';
        event.target.message.value = '';

        this.props.sendEmail(formData);
        this.props.callbackSuccess(true);
        yaCounter31086026.reachGoal('Otpravka');
    }
    openPopupScheme() {
        this.setState({popupScheme: true});
        yaCounter31086026.reachGoal('Ostavit');
    }
    closePopupScheme() {
        this.setState({popupScheme: false});
        this.props.callbackSuccess(false);
    }

    render() {
        return(
            <section className="scheme">
                <div className="container scheme__wrap">
                    <div className="content">
                        <h2 className="scheme__title">
                            Схема работы с нами
                        </h2>
                        <div className="strategy__wrap">
                            <div className="strategy strategy__first">
                                <div className="strategy__item">
                                    <div className="content">
                                        <p className="content__desc">
                                            <span>Онлайн-консультация</span><br/>
                                            Звоните нам по телефону<br/>
                                            или оставляете заявку на сайте
                                        </p>
                                        <div className="content__num">
                                            <p>1</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="strategy__item">
                                    <div className="content">
                                        <p className="content__desc">
                                            <span>Согласование макетов</span><br/>
                                            Подготавливаем визуальный
                                            3d-макет продукции
                                        </p>
                                        <div className="content__num">
                                            <p>3</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="strategy__item">
                                    <div className="content">
                                        <p className="content__desc">
                                            <span>Производство</span><br/>
                                            Изготавливаем продукцию в строго оговоренные сроки
                                        </p>
                                        <div className="content__num">
                                            <p>5</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="strategy strategy__second">
                                <div className="strategy__item">
                                    <div className="content">
                                        <div className="content__num">
                                            <p>2</p>
                                        </div>
                                        <p className="content__desc">
                                            <span>Оперативный расчет</span><br/>
                                            Озвучиваем вам точную информацию
                                            о стоимости вашего заказа
                                        </p>
                                    </div>
                                </div>
                                <div className="strategy__item">
                                    <div className="content">
                                        <div className="content__num">
                                            <p>4</p>
                                        </div>
                                        <p className="content__desc">
                                            <span>Выставление счета и оплата</span><br/>
                                            Оплачиваете заказа удобным для вас способом
                                        </p>
                                    </div>
                                </div>
                                <div className="strategy__item">
                                    <div className="content">
                                        <div className="content__num">
                                            <p>6</p>
                                        </div>
                                        <p className="content__desc">
                                            <span>Доставка до адресса</span><br/>
                                            Бесплатно доставляем заказ в ваш офис или до терминала ТК
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="btn scheme__btn" onClick={this.openPopupScheme.bind(this)}>
                            Оставить заявку
                        </button>
                    </div>
                </div>
                <Popup
                    title={'Оставьте свои данные, чтобы менеджер связался с Вами'}
                    state={this.state.popupScheme}
                    close={this.closePopupScheme.bind(this)}
                    type={'blank'}
                    notification={this.props.isNotification}
                    formClick={this.sendFormScheme.bind(this)}
                />
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
    return bindActionCreators({callbackSuccess, sendEmail}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Scheme);