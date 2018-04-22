import React, { Component } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {orderSuccess, sendEmail} from "../../../actions/actions";
import Popup from '../../elements/popup/popup';

class Categories extends Component{


    constructor(props) {
        super(props);
        this.state = {
            popupOrder: false
        };
    }

    sendFormOrder(event) {
        event.preventDefault();
        const formData = {
            type: 'order-category',
            name: event.target.name.value,
            phone: event.target.phone.value,
            message: event.target.message.value,

        };
        event.target.name.value = '';
        event.target.phone.value = '';
        event.target.message.value = '';

        this.props.sendEmail(formData);
        this.props.orderSuccess(true);
        yaCounter31086026.reachGoal('OformitProdukciu');
    }
    openPopupOrder() {
        this.setState({popupOrder: true});
        yaCounter31086026.reachGoal('SdelatZakaz');
    }
    closePopupOrder() {
        this.setState({popupOrder: false});
        this.props.orderSuccess(false);
    }




    render() {
        return(
            <section className="categories">
                <div className="container categories__wrap">
                    <h2 className="categories__title">
                        Более 20 категорий сувенирной продукции
                    </h2>
                    <p className="categories__desc">
                        Нанесем надпись или логотип на любой из 250 товаров
                    </p>
                    <div className="goods">
                        <div className="goods__item">
                            <div className="good">
                                <img src="./images/dom-min.png" className="good__img" alt="Дом" title="Дом"
                                     onClick={this.openPopupOrder.bind(this)}/>
                                <p className="good__desc">
                                    Дом
                                </p>
                            </div>
                            <div className="good">
                                <img src="./images/otdyh-min.png" className="good__img" alt="Отдых" title="Отдых"
                                     onClick={this.openPopupOrder.bind(this)}/>
                                <p className="good__desc">
                                    Отдых
                                </p>
                            </div>
                            <div className="good">
                                <img src="./images/ofis-min.png" className="good__img" alt="Офис" title="Офис"
                                     onClick={this.openPopupOrder.bind(this)}/>
                                <p className="good__desc">
                                    Офис
                                </p>
                            </div>
                            <div className="good">
                                <img src="./images/korporat-min.png" className="good__img" alt="Корпоративные подарки"
                                     title="Корпоративные подарки"
                                     onClick={this.openPopupOrder.bind(this)}/>
                                <p className="good__desc">
                                    Корпоративные подарки
                                </p>
                            </div>
                        </div>
                        <div className="goods__item">
                            <div className="good">
                                <img src="./images/odejda-min.png" className="good__img" alt="Одежда"
                                     title="Одежда"
                                     onClick={this.openPopupOrder.bind(this)}/>
                                <p className="good__desc">
                                    Одежда
                                </p>
                            </div>
                            <div className="good">
                                <img src="./images/elit-min.png" className="good__img" alt="Элитные подарки"
                                     title="Элитные подарки"
                                     onClick={this.openPopupOrder.bind(this)}/>
                                <p className="good__desc">
                                    Элитные подарки
                                </p>
                            </div>
                            <div className="good">
                                <img src="./images/promo-min.png" className="good__img" alt="Промо-сувениры"
                                     title="Промо-сувениры"
                                     onClick={this.openPopupOrder.bind(this)}/>
                                <p className="good__desc">
                                    Промо-сувениры
                                </p>
                            </div>
                            <div className="good">
                                <img src="./images/praznik-min.png" className="good__img" alt="Сувениры к праздникам"
                                     title="Сувениры к праздникам"
                                     onClick={this.openPopupOrder.bind(this)}/>
                                <p className="good__desc">
                                    Сувениры к праздникам
                                </p>
                            </div>
                        </div>
                        <div className="goods__btn">
                            <button className="btn" onClick={this.openPopupOrder.bind(this)}>
                                Сделать заказ
                            </button>
                        </div>
                    </div>
                </div>
                <Popup
                    title={'Сделать заказ'}
                    state={this.state.popupOrder}
                    close={this.closePopupOrder.bind(this)}
                    type={'blank'}
                    notification={this.props.isNotification}
                    formClick={this.sendFormOrder.bind(this)}
                />
            </section>
        )
    }
}


export function mapStateToProps(store) {
    return {
        isNotification: store.mainReducer.isOrderNotification
    }
}

export const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({orderSuccess, sendEmail}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
