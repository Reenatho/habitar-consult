import React from "react";
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
const Experience = () => {
    return(
        <section id="experience">
            <h4>Condições de Pagamento</h4>
            <h2>Informações Gerais</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Características do Empreendimento</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Terrenos de 800m²</h4>
                                <small className="text-light">infraestrutura já inclusa no valor</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Condomínio em formação</h4>
                                <small className="text-light">Obras avançadas</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Sem consulta SPC/Serasa</h4>
                                <small className="text-light">Condições pré aprovadas</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Localizado no bairro Ouro Fino</h4>
                                <small className="text-light">Direto com proprietário</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Empreendimento direto no asfalto</h4>
                                <small className="text-light">Próximo ao condomínio Ibirapitanga</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Apenas 8km do centro de Arujá (15min)</h4>
                                <small className="text-light">Próximo a duas cachoeiras</small>
                            </div>
                        </article>

                        
                    </div>
                </div>
                
                {/* FIM DO FRONT END */}

                <div className="experience__backend">
                    <h3>Condições de Pagamento e mais:</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Lotes a partir de R$ 79.990,00 a vista</h4>
                                <small className="text-light">800m²</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>R$ 30 mil Entrada</h4>
                                <small className="text-light">+ Parcelas</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Aceitamos veículos</h4>
                                <small className="text-light">como parte do pagamento</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Valorização</h4>
                                <small className="text-light">Ótima localização</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Acesso</h4>
                                <small className="text-light">Fácil acesso para as cidades de Arujá e Santa Isabel</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Qualidade de Vida</h4>
                                <small className="text-light">Região com muita natureza, ar puro e tranquilidade</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;