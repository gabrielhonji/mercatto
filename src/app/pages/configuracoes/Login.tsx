import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { useState } from "react";
import MercattoLogo from "../../../../public/mercatto-logo.svg"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        console.log({ email, password })
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit} className="bg-neutral-50 border rounded-lg w-1/5  px-8 py-16 flex flex-col gap-8">
                <img src={MercattoLogo} alt="Logo do Mercatto" className="max-w-1/2 mx-auto" />
                <div className="flex flex-col gap-4">
                    <Input label="Email" value={email} type="email" placeholder="seu@email.com" onChange={(e) => setEmail(e.target.value)} />
                    <Input label="Senha" value={password} type="password" placeholder="••••••••" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <Button>Login</Button>
            </form>
        </div>
    );
}
