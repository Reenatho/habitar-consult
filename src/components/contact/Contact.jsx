import React from "react";
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiLinkedinBoxLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
    return(
        <section id="contact">
            <h4>Em apenas alguns cliques</h4>
            <h2>Entre em Contato</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact_option">
                        < MdOutlineEmail className="contact__icon" />
                        <h4>E-mail</h4>
                        <h5>habitar@email.com</h5>
                        <a href="mailto:renato.antonio.s@hotmail.com" target="_blank">Envie um Email</a>
                    </article>

                    <article className="contact_option">
                        < RiLinkedinBoxLine className="contact__icon" />
                        <h4>Facebook</h4>
                        <h5>HABITAR Consultoria Imobiliária</h5>
                        <a href="#" target="_blank">Siga nas Redes Sociais</a>
                    </article>

                    <article className="contact_option">
                        < BsWhatsapp className="contact__icon" />
                        <h4>WhatsApp</h4>
                        <h5>+55 11 9 4259-6382</h5>
                        <a href="https://wa.me/5511942596382" target="_blank">Envie uma mensagem</a>
                    </article>
                </div>
                {/* End Of Contact Options */}
                {/* <form action=''>
                    <input type="text" name="name" placeholder="Seu nome" required/>
                    <input type="email" name="email" placeholder="Seu Email" required/>
                    <textarea name="mensagem" rows="7" placeholder="Escreva sua mensagem aqui" required></textarea>
                    <button type="submit" className="btn btn-primary">Enviar Mensagem</button>
                </form> */}
            </div>
        </section>
    )
}

export default Contact;