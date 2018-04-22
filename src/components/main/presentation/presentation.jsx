import React, { Component } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {callbackSuccess, sendEmail} from "../../../actions/actions";
import Popup from '../../elements/popup/popup';

class Presentation extends Component{

    constructor(props) {
        super(props);
        this.state = {
            popupPresentation: false
        };
    }

    sendFormPresentation(event) {
        event.preventDefault();
        const formData = {
            type: 'presentation',
            name: event.target.name.value,
            phone: event.target.phone.value,
            message: event.target.message.value,

        };
        event.target.name.value = '';
        event.target.phone.value = '';
        event.target.message.value = '';

        this.props.sendEmail(formData);
        this.props.callbackSuccess(true);
        yaCounter31086026.reachGoal('PodobratVariant');
    }
    openPopupPresentation() {
        this.setState({popupPresentation: true});
        yaCounter31086026.reachGoal('Prezentaciya');
    }
    closePopupPresentation() {
        this.setState({popupPresentation: false});
        this.props.callbackSuccess(false);
    }

    render() {
        return(
            <section className="presentation">
                <div className="container presentation__wrap">
                    <div className="content">
                        <h2 className="presentation__title">
                            Получите презентацию идей
                            для подарков бесплатно!
                        </h2>
                        <p className="presentation__desc">
                            Опишите вашу задачу и мы подберем нестандартные идеи
                            для подарков, конкретно под ваш случай!
                        </p>
                        <button className="btn presentation__btn" onClick={this.openPopupPresentation.bind(this)}>
                            Получить презентацию идей для подарка
                        </button>
                    </div>
                </div>
                <Popup
                    title={'Оставьте свои данные, чтобы менеджер связался с Вами'}
                    state={this.state.popupPresentation}
                    close={this.closePopupPresentation.bind(this)}
                    type={'blank'}
                    notification={this.props.isNotification}
                    formClick={this.sendFormPresentation.bind(this)}
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

export default connect(mapStateToProps, mapDispatchToProps)(Presentation);