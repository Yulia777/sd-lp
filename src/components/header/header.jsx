import React, { Component } from 'react';
import Branding from './branding/branding';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {sendCallback, callbackSuccess} from "../../actions/actions";
import Popup from '../elements/popup/popup';



class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
            popupCallback: false
        };
    }


    sendFormCallback(event) {
        event.preventDefault();
        const formData = {
            type: 'callback',
            name: event.target.name.value,
            phone: event.target.phone.value,
            message: event.target.message.value
        };
        event.target.name.value = '';
        event.target.phone.value = '';
        event.target.message.value = '';
        this.props.sendCallback(formData);
        yaCounter31086026.reachGoal('ZayavkaZvonok');
    }
    openPopupCallback() {
        this.setState({popupCallback: true});
        yaCounter31086026.reachGoal('ZakazZvonka');
    }
    closePopupCallback() {
        this.setState({popupCallback: false});
        this.props.callbackSuccess(false);
    }




    render() {
        return(
            <header className="header">
                <div className="header__background">
                    <div className="container header__wrap">
                        <div className="header__logo">
                            <img className="header__logo--img" src="./images/logo-min.png" alt="Логотип Слово и дело" title="Логотип Слово и дело"/>
                        </div>
                        <div className="header__contacts">
                            <div className="information">
                                <div className="information__item">
                                    <img src="./images/svg/clock2.svg" alt="Часы работы" title="Часы работы"/>
                                </div>
                                <div className="information__item">
                                    <p className="information__title">
                                        Режим работы:
                                    </p>
                                    <p className="information__desc">
                                        Пн.- Пт. с 10:00 до 18:00
                                    </p>
                                </div>
                            </div>
                            <div className="information">
                                <div className="information__item">
                                    <img src="./images/svg/call.svg" alt="Контакты" title="Контакты"/>
                                </div>
                                <div className="information__item">
                                    <p className="information__title">
                                        +7 495 207-75-77
                                    </p>
                                    <p className="information__desc">
                                        info@slovodelo.ru
                                    </p>
                                </div>
                            </div>
                            <input className="btn btn__call" type="button" value="Заказать звонок" onClick={this.openPopupCallback.bind(this)}/>
                        </div>
                    </div>
                </div>
                <Popup
                    title={'Заказать звонок'}
                    state={this.state.popupCallback}
                    close={this.closePopupCallback.bind(this)}
                    type={'blank'}
                    notification={this.props.isNotification}
                    formClick={this.sendFormCallback.bind(this)}
                />
                <Branding/>

            </header>
        )
    }
}


export function mapStateToProps(store) {
    return {
        isNotification: store.mainReducer.isCallbackNotification
    }
}

export const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({sendCallback, callbackSuccess}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);