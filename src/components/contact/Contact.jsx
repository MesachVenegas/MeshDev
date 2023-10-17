import './contact.css';
import { useSelector } from 'react-redux';

const Contact = () => {
    const language = useSelector(state => state.language);

    return (
        <>
            <div className="contact_container">
                <h2>{language ? "Contacto" : "Contact Me"}</h2>
                <form className='form_box'>
                    {/* name field */}
                    <div className="input_wrapper">
                        <input
                            id='name'
                            name='name'
                            type="text"
                            className='input_field'
                            placeholder='John Smith'
                            required
                        />
                        <label htmlFor="name" className='input_label'>
                            { language ? "Nombre" : "Name"}
                        </label>
                        <i className="fa-solid fa-user input_icon"></i>
                    </div>
                    {/* email field */}
                    <div className="input_wrapper">
                        <input
                            id='email'
                            name='email'
                            type="text"
                            className='input_field'
                            placeholder='example@example.com'
                            required
                        />
                        <label htmlFor="email" className='input_label'>
                            { language ? "Correo" : "Email"}
                        </label>
                        <i className="fa-solid fa-at input_icon"></i>
                    </div>
                    {/* message field */}
                    <div className="input_wrapper">
                        <textarea
                            id='message'
                            name='message'
                            cols="30"
                            className='input_textarea'
                            required
                        />
                        <label htmlFor="message" className='input_label'>
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