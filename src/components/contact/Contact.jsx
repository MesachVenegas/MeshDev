import './contact.css';
import { useSelector } from 'react-redux';

const Contact = () => {
    const language = useSelector(state => state.language);

    return (
        <>
            <div className="contact_container">
                <h2>{language ? "Contacto" : "Contact Me"}</h2>
                <form className='form_box'>
                    <div className="input_wrapper">
                        <input
                            className='input_field'
                            type="text"
                            placeholder='John Smith'
                            required
                        />
                        <label htmlFor="" className='input_label'>
                            { language ? "Nombre" : "Name"}
                        </label>
                        <i className="fa-solid fa-user input_icon"></i>
                    </div>
                    <div className="input_wrapper">
                        <input
                            className='input_field'
                            type="text"
                            placeholder='example@example.com'
                            required
                        />
                        <label htmlFor="" className='input_label'>
                            { language ? "Correo" : "Email"}
                        </label>
                        <i className="fa-solid fa-at input_icon"></i>
                    </div>
                    <div className="input_wrapper">
                        <textarea
                            className='input_textarea'
                            name='message'
                            id='message'
                            cols="30"
                            required
                        />
                        <label htmlFor="" className='input_label'>
                            { language ? "Mensaje" : "Message"}
                        </label>
                    </div>
                    <button className='btn_contact'>
                        {language ? "Enviar" : "Send"}
                        <i className="fa-solid fa-paper-plane"></i>
                    </button>
                </form>
            </div>
        </>
    );
};

export default Contact;