import React, { Component } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getIdeaSuccess, sendEmail} from "../../../actions/actions";
import Popup from '../../elements/popup/popup';

class Branding extends Component{

    constructor(props) {
        super(props);
        this.state = {
            popupGetIdea: false
        };
    }

    sendFormGetIdea(event) {
        event.preventDefault();
        const formData = {
            type: 'email',
            name: event.target.name.value,
            phone: event.target.phone.value,
            email: event.target.email.value,
        };
        event.target.name.value = '';
        event.target.phone.value = '';
        event.target.email.value = '';

        this.props.sendEmail(formData);
        this.props.getIdeaSuccess(true);
        yaCounter31086026.reachGoal('Poluchit');
    }
    openPopupGetIdea() {
        this.setState({popupGetIdea: true});
        yaCounter31086026.reachGoal('Idei');
    }
    closePopupGetIdea() {
        this.setState({popupGetIdea: false});
        this.props.getIdeaSuccess(false);
    }


    render() {
        return(
            <section className="branding">
                <div className="container branding__wrap">
                    <div className="branding__item">
                        <h1 className="branding__title">
                            Брендированная сувенирная продукция в любом количестве
                        </h1>
                        <p className="branding__desc">
                            Не знаете что подарить сотрудникам или клиентам? Подготовим презентацию идей для подарков
                            бесплатно!
                        </p>
                        <button className="btn branding__btn" onClick={this.openPopupGetIdea.bind(this)}>
                            Получить 45 идей для подарков
                        </button>
                    </div>
                    <div className="branding__item">
                        <div className="advantages">
                            <img className="advantages__img" src="./images/svg/car.svg" alt="Бесплатная доставка" title="Бесплатная доставка"/>
                            <p className="advantages__desc">
                                Бесплатная доставка по Москве и обл.
                            </p>
                        </div>
                        <div className="advantages">
                            <img className="advantages__img" src="./images/svg/gift.svg" alt="Варианты подарков" title="Варианты подарков"/>
                            <p className="advantages__desc">
                                Более 250 вариантов для подарка
                            </p>
                        </div>
                        <div className="advantages">
                            <img className="advantages__img" src="./images/svg/clock.svg" alt="Быстрое производство" title="Быстрое производство"/>
                            <p className="advantages__desc">
                                Производство<br/> от 1 до 3 дней
                            </p>
                        </div>
                    </div>
                </div>
                <Popup
                    title={'Получить идею подарка'}
                    state={this.state.popupGetIdea}
                    close={this.closePopupGetIdea.bind(this)}
                    type={'email'}
                    notification={this.props.isNotification}
                    formClick={this.sendFormGetIdea.bind(this)}
                />
            </section>
                )
    }
}


export function mapStateToProps(store) {
    return {
        isNotification: store.mainReducer.isGetIdeaNotification
    }
}

export const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({getIdeaSuccess, sendEmail}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Branding);