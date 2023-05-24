// import { Link } from 'react-router-dom';
import './Works.css';

import CHECKLIST from '../images/checklist.svg';

const TypesOfWorks = () => {
    return (
        <div className="container">
            <div className="works">
                <h2>Виды уборок</h2>

                <input className='hide' type='checkbox' id = '1'/>
                <label htmlFor='1' className='works-title' >
                    <img className='works-checklist' src={CHECKLIST} alt="checklist" />
                    Генеральная уборка
                    <img className='works-checklist' src={CHECKLIST} alt="checklist" />
                </label>
                    <div className="works_general-block">
                        <div className="works-blocks">
                            <h4>Кухня</h4>
                            <ul className='works-general_list'>
                                <li>Обеспыливание стен и потолков полностью</li>
                                <li>Мытье карнизов, подоконников, кондиционеров, отопительных приборов</li>
                                <li>Протираем выключатели и розетки</li>
                                <li>Мытьё кухонного гарнитура снаружи от загрязнений</li>
                                <li>Протираем кухонный гарнитур внутри(пустой)</li>
                                <li>Удаление жировых загрязнений на рабочей зоне</li>
                                <li>Мытьё холодильника и духового шкафа снаружи</li>
                                <li>Мытьё вытяжки и печки</li>
                                <li>Протираем стулья и столы</li>
                                <li>Чистка и дезинфекция смесителей и раковины</li>
                                <li>Отодвигаем нетяжелую мебель</li>
                                <li>Мытьё плинтуса и пола 2-3 раза</li>
                                <li>Мытьё люстр(обычных)</li>
                            </ul>
                        </div>
                        <div className="works-blocks">
                            <h4>Комнаты</h4>
                            <ul className='works-general_list'>
                                <li>Обоспыливание стен и потолков полностью</li>
                                <li>Удаление пыли с карнизов, подоконников, кондиционеров, отопительных приборов</li>
                                <li>Протираем выключатели и розетки</li>
                                <li>Протирка зеркал от пола до потолка</li>
                                <li>Протираем мебель снаружи(открытые полки, фасады, шкафы сверху, диваны, кресла)</li>
                                <li>Протираем шкафы внутри(пустые)</li>
                                <li>Протираем предмены интерьера(рамки, карнизы, вазы)</li>
                                <li>Протираем всю электронику</li>
                                <li>Моем полностью межкомнатную и входную дверь</li>
                                <li>Отодвигаем нетяжёлую дверь(диваны, комоды, кресла)для уборки</li>
                                <li>Мытьё плинтуса и пола 2-3 раза</li>
                                <li>Мытьё люстр(обычных)</li>
                            </ul>
                        </div>
                        <div className="works-blocks">
                            <h4>Ванная комната и санузел</h4>
                            <ul className='works-general_list'>
                                <li>Мытье и полировка кафеля от пола до потолка вручную</li>
                                <li>Протираем потолок</li>
                                <li>Протираем выключатели и розетки</li>
                                <li>Протирка зеркал от пола до потолка</li>
                                <li>Удаление загрязнений и дезинфекция сантехники(ванная, унитаз, душевая кабина, раковина)</li>
                                <li>Протираем полочки и мебель</li>
                                <li>Удаление налёта</li>
                                <li>Чистка и дезинфекция смесителей</li>
                                <li>Протираем стиральную машину снаружи от пыли и загрязнений</li>
                                <li>Отодвигаем нетяжёлую дверь</li>
                                <li>Мытьё плинтуса и пола 2-3 раза</li>
                                <li>Мытьё люстр(обычных) (точечные светильники отдельно)</li>
                                <li><span className='works-warn'>Очистка межплиточных швов считается отдельно!</span></li>
                            </ul>
                        </div>
                    </div>

                <input className='hide' type='checkbox' id = '2'/>
                <label htmlFor='2' className='works-title' >
                    <img className='works-checklist' src={CHECKLIST} alt="checklist" />
                        Уборка после ремонта
                    <img className='works-checklist' src={CHECKLIST} alt="checklist" />
                </label>
                    <div className="works_general-block">
                        <div className="works-blocks">
                            <h4>Кухня</h4>
                            <ul className='works-general_list'>
                                <li>Обеспыливание стен с низу до верху
                                    специальным средством.</li>
                                <li>Обеспыливание светильников и радиаторов.</li>
                                <li>Обеспыливание всех доступных поверхностей
                                    (подоконники, столы, стулья, тумбы.)</li>
                                <li>Удаление пыли с розеток, вентиляционных решеток.</li>
                                <li>Чистка и дезинфекция смесителя и раковина</li>
                                <li>Протираем снаружи и сверху кухонный гарнитур.</li>
                                <li>Удаляем пыль со всей техники.</li>
                                <li>Пылесосим пол.</li>
                                <li>Моем полы и плинтуса со специальным средством.</li>
                            </ul>
                        </div>
                    </div>
                {/* <Link className='order-service'>Заказать уборку</Link> */}

            </div>
            
        </div>
    )
}

export default TypesOfWorks;