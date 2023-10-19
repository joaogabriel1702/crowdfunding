'use client'

import Button from "@/components/Button"
import TextInput from "@/components/TextInput"
import { RegisterFormState } from "../.."

type FirstSetpProps = {
    handleNextStep: () => void,
    state: RegisterFormState,
    handleChangeState: (updatedValues: RegisterFormState) => void
}

const FirstSetp = ({handleChangeState, handleNextStep, state}: FirstSetpProps) => {
    return (
        <>
        <TextInput 
        label="E-mail" 
        onChange={(event) => handleChangeState({
            email: event.target.value,
            step: 0
        })}
        placeholder="E-mail" type="email" iconLeft="uil:envelope-alt" 
        value={state.email}/>

        <TextInput label="Senha" 
        onChange={(event) => handleChangeState({
            password: event.target.value,
            step: 0
        })}
        value={state.password}
        labelClassNames="text-black" placeholder="Senha" type="password" iconLeft="uil:key-skeleton-alt" />

        <TextInput label="Confirmar Senha" 
        onChange={(event) => handleChangeState({
            confirmPassword: event.target.value,
            step: 0
        })}
        value={state.confirmPassword}
        labelClassNames="text-black" placeholder="Confirmar Senha" type="password" iconLeft="uil:key-skeleton-alt" />

        <div className="mt-[24px]">
        <Button onClick={handleNextStep} className="rounded-md w-[100%]"> Próximo </Button>
        </div>
        </>
    )
}

export default FirstSetp;