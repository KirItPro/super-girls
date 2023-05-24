import { Link } from 'react-router-dom';
import PROMO_LOG from '../images/logo.png';

import './Promo.css';


const Promo = () => {
    return (
        <main>
            <div className="container">
                <h1 className='promo-title'>КЛИНИНГ</h1>
                <div className="promo">
                    <div className="promo_left-part">
                        <ul className='promo-list'>
                            <li className='promo-item'>⚡️ Суппер герои чистоты!</li>
                            <li className='promo-item'>⚡️ Убираем быстро и качественно!</li>
                            <li className='promo-item'>⚡️ Грязи не боимся, грязь боится нас!</li>
                            <li className='promo-item'>⚡️ Нас рекомендуют друзьям!</li>
                        </ul>
                        <Link className='order-service'>Заказать уборку</Link>
                        <ul className='promo-list'>
                            <li className='promo-item'>✅ Бесплатный выезд для расчета стоимости!</li>
                            <li className='promo-item'>✅ Оплата только после выполненных работ!</li>
                            <li className='promo-item'>✅ Фиксированная цена без скрытых доплат!</li>
                        </ul>
                        <Link className='order-service'>Расчитать стоимость</Link>
                    </div>
                    
                    <div className="promo_right-part">
                        <img className="right-part_img" src={PROMO_LOG} alt="" />
                    </div>
                </div>


            </div>
        </main>
    )
}
export default Promo;