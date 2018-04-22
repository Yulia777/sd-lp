import React, { Component } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {formSuccess, sendEmail} from "../../../actions/actions";
import Popup from '../../elements/popup/popup';

class Recommendations extends Component{

    constructor(props) {
        super(props);
        this.state = {
            popupGetExample: false
        };
    }

    sendFormGetExample(event) {
        event.preventDefault();
        const formData = {
            type: 'recommendations',
            phone: event.target.phone.value,
            email: event.target.email.value,

        };
        event.target.phone.value = '';
        event.target.email.value = '';

        this.props.sendEmail(formData);
        this.props.formSuccess(true);
        yaCounter31086026.reachGoal('PrimerTovara');
    }
    openPopupGetExample() {
        this.setState({popupGetExample: true});
        yaCounter31086026.reachGoal('Obrazec');
    }
    closePopupGetExample() {
        this.setState({popupGetExample: false});
        this.props.formSuccess(false);
    }





    render() {
        return(
            <section className="recommendations">
                <div className="container recommendations__wrap">
                    <h2 className="recommendations__title">
                        Почему 67% клиентов приходят к нам по рекомендации
                    </h2>
                    <p className="recommendations__desc">
                        Для вашего удобства мы предоставляем:
                    </p>
                    <div className="services">
                        <div className="services__item">
                            <div className="service">
                                <img src="./images/svg/manager.svg" className="service__img" alt="Менеджер на дом"
                                     title="Менеджер на дом" onClick={this.openPopupGetExample.bind(this)}/>
                                <p className="service__desc">
                                    Выезд менеджера к вам в офис
                                </p>
                            </div>
                            <div className="service">
                                <img src="./images/svg/courier.svg" className="service__img" alt="Курьерская доставка"
                                     title="Курьерская доставка" onClick={this.openPopupGetExample.bind(this)}/>
                                <p className="service__desc">
                                    Курьерскую доставку образцов продукции
                                </p>
                            </div>
                            <div className="service">
                                <img src="./images/svg/print.svg" className="service__img" alt="Подбор печати"
                                     title="Подбор печати" onClick={this.openPopupGetExample.bind(this)}/>
                                <p className="service__desc">
                                    Подбор оптимального способа печати
                                </p>
                            </div>
                            <div className="service">
                                <img src="./images/svg/camera.svg" className="service__img" alt="Контроль производства"
                                     title="Контроль производства" onClick={this.openPopupGetExample.bind(this)}/>
                                <p className="service__desc">
                                    Контроль на всех этапах производства
                                </p>
                            </div>
                        </div>
                        <div className="services__btn">
                            <button className="btn" onClick={this.openPopupGetExample.bind(this)}>
                                Получить образец продукции
                            </button>
                        </div>
                    </div>
                </div>
                <Popup
                    title={'Получить образец продукции'}
                    state={this.state.popupGetExample}
                    close={this.closePopupGetExample.bind(this)}
                    type={'mini'}
                    notification={this.props.isNotification}
                    formClick={this.sendFormGetExample.bind(this)}
                />
            </section>
        )
    }
}

export function mapStateToProps(store) {
    return {
        isNotification: store.mainReducer.isFormMini
    }
}

export const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({formSuccess, sendEmail}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Recommendations);
