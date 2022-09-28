import done from '../images/done.svg';
import err from '../images/error.svg';

const InfoTooltip = (props) => {
  const { isRegister, onClose, isOpen} = props;

  const className = isOpen ? 'popup popup_type_info popup_open' : 'popup popup_type_info';

  return (
    <div onClick={onClose} className={className}>
      <div className={`popup__container popup__container_type_info`}>
        <button className="popup__close-btn" type="button"></button>
        <img src={isRegister ? done : err} alt="" className="popup__icon-info" />
        <h2 className={`popup__title popup__title_type_info`}>{isRegister ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте еще раз.'}</h2>
        
      </div>
    </div>
  );
};

export default InfoTooltip;