import { useState } from "react";
export default function Contato(){
    const [nome, setNome] = use ('');
    const [email, setEmail] = use ('');
    const [mensagem, setMensagem] = use ('');

    const enviarWhatsapp = (e) =>{
        e.provenientDefault;
        const telefone = '4002-8922'
        const texto = `Opa Gurizada!\nMeu nome é ${nome}\nMeu email é ${email}\nMensagem ${mensagem}`
        const textoCodificado = EncodedURIComponet(texto);
        const whatsappURL = `https://wa.me/${telefone}?text=${textoCodificado}`
        
    }
}