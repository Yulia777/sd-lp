import React, { Component } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {callbackSuccess, sendEmail} from "../../../actions/actions";
import Popup from '../../elements/popup/popup';

class Examples extends Component{

    constructor(props) {
        super(props);
        this.state = {
            popupOrderExample: false
        };
    }

    sendFormExamples(event) {
        event.preventDefault();
        const formData = {
            type: 'examples',
            name: event.target.name.value,
            phone: event.target.phone.value,
            message: event.target.message.value,

        };
        event.target.name.value = '';
        event.target.phone.value = '';
        event.target.message.value = '';

        this.props.sendEmail(formData);
        this.props.callbackSuccess(true);
        yaCounter31086026.reachGoal('GotovyeZakazy');
    }
    openPopupExamples() {
        this.setState({popupOrderExample: true});
        yaCounter31086026.reachGoal('NashyRaboty');
    }
    closePopupExamples() {
        this.setState({popupOrderExample: false});
        this.props.callbackSuccess(false);
    }

    render() {
        return(
            <section className="examples">
                <div className="container examples__wrap">
                    <h2 className="examples__title">
                        Примеры выполненных работ
                    </h2>
                    <p className="examples__desc">
                        Нестандартные решения с учетом специфики Вашего бизнеса
                    </p>
                    <div className="goods">
                        <div className="goods__item">
                            <div className="good">
                                <img src="./images/rea-min.png" className="good__img" alt="Брелок" title="Брелок"/>
                            </div>
                            <div className="good">
                                <img src="./images/icae-min.png" className="good__img" alt="Чехол" title="Чехол"/>
                            </div>
                            <div className="good">
                                <img src="./images/photo-min.png" className="good__img" alt="Посуда" title="Посуда"/>
                            </div>
                            <div className="good">
                                <img src="./images/photo-icae-min.png" className="good__img" alt="Спортивный сувенир"
                                     title="Спортивный сувенир"/>
                            </div>
                        </div>
                        <div className="goods__item">
                            <div className="good">
                                <img src="./images/camozzi-min.png" className="good__img" alt="Сувениры"
                                     title="Сувениры"/>
                            </div>
                            <div className="good">
                                <img src="./images/spec-min.png" className="good__img" alt="Сувениры-магнитики"
                                     title="Сувениры-магнитики"/>
                            </div>
                            <div className="good">
                                <img src="./images/metall-min.png" className="good__img" alt="Подарочные часы"
                                     title="Подарочные часы"/>
                            </div>
                            <div className="good">
                                <img src="./images/organaizer-min.png" className="good__img" alt="Органайзер"
                                     title="Органайзер"/>
                            </div>
                        </div>
                        <div className="goods__btn">
                            <button className="btn" onClick={this.openPopupExamples.bind(this)}>
                                Сделать заказ
                            </button>
                        </div>
                    </div>
                </div>
                <Popup
                    title={'Сделать заказ'}
                    state={this.state.popupOrderExample}
                    close={this.closePopupExamples.bind(this)}
                    type={'blank'}
                    notification={this.props.isNotification}
                    formClick={this.sendFormExamples.bind(this)}
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

export default connect(mapStateToProps, mapDispatchToProps)(Examples);
