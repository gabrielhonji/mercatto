import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { useState } from "react";
import MercattoLogo from "../../../assets/mercatto-logo.svg";
import Textarea from "../../components/ui/Textarea";
import BackButton from "../../components/ui/BackButton";

export default function Recuperar() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="bg-neutral-50 border rounded-lg w-1/5  px-8 py-16 flex flex-col gap-8">
        <img
          src={MercattoLogo}
          alt="Logo do Mercatto"
          className="max-w-1/2 mx-auto"
        />
        <p className="text-justify text-sm">Informe o e-mail da sua conta. Neste sistema as solicitações de redefinição passam por um administrador. Você receberá uma confirmação assim que o administrador agir.</p>
        <div className="flex flex-col gap-4">
          <Input
            label="Email"
            value={email}
            type="email"
            placeholder="seu@email.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Textarea
            label="Mensagem  (opcional)"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </div>
        <div className="flex flex-col gap-4">
          <Button>Recuperar</Button>
          <BackButton type="tertiary">Voltar</BackButton>
        </div>
      </form>
    </div>
  );
}
