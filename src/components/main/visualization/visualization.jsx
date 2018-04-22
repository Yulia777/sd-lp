import React, { Component } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {callbackSuccess, sendEmail} from "../../../actions/actions";
import Popup from '../../elements/popup/popup';

class Visualization extends Component{

    constructor(props) {
        super(props);
        this.state = {
            popupVisualization: false
        };
    }

    sendFormVisualization(event) {
        event.preventDefault();
        const formData = {
            type: 'visualization',
            name: event.target.name.value,
            phone: event.target.phone.value,
            message: event.target.message.value,

        };
        event.target.name.value = '';
        event.target.phone.value = '';
        event.target.message.value = '';

        this.props.sendEmail(formData);
        this.props.callbackSuccess(true);
        yaCounter31086026.reachGoal('Vizualizaciya');
    }
    openPopupVisualization() {
        this.setState({popupVisualization: true});
        yaCounter31086026.reachGoal('Zapros');
    }
    closePopupVisualization() {
        this.setState({popupVisualization: false});
        this.props.callbackSuccess(false);
    }

    render() {
        return(
            <section className="visualization">
                <div className="container visualization__wrap">
                    <h2 className="visualization__title">
                        Подготовим визуализацию вашей
                        продукции перед изготовлением
                    </h2>
                    <div className="content">
                        <div className="content__item">
                            <p className="content__desc">
                                Чтобы не покупать кота в мешке, вы можете запросить визуализацию вашей продукции чтобы
                                удостовериться, что именно на этом товаре вы хотите видеть свою эмблему
                            </p>
                        </div>
                        <div className="content__item">
                            <p className="image">
                                <img src="./images/screen-min.png" alt="Подготовка визуализации" title="Подготовка визуализации"/>
                            </p>
                        </div>
                    </div>

                </div>
                <button className="btn visualization__btn" onClick={this.openPopupVisualization.bind(this)}>
                    Запросить визуализацию
                </button>
                <Popup
                    title={'Оставьте свои данные, чтобы менеджер связался с Вами'}
                    state={this.state.popupVisualization}
                    close={this.closePopupVisualization.bind(this)}
                    type={'blank'}
                    notification={this.props.isNotification}
                    formClick={this.sendFormVisualization.bind(this)}
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

export default connect(mapStateToProps, mapDispatchToProps)(Visualization);