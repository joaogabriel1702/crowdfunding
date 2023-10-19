'use client'

import Button from "@/components/Button"
import TextInput from "@/components/TextInput"
import { RegisterFormState } from "../.."

type SecondStepProps = {
    state: RegisterFormState,
    handleChangeState: (updatedValues: RegisterFormState) => void,
}

const SecondStep = ({state, handleChangeState }: SecondStepProps) => {
    return(
        <>
        <TextInput label="Nome Completo" 
        onChange={(event) => handleChangeState({
            fullName: event.target.value,
            step: 0
        })}
        value={state.fullName}
        placeholder="Nome Completo" type="text" iconLeft="uil:user" />

        <TextInput label="Data de nascimento" 
        onChange={(event) => handleChangeState({
            dateOfBirth: event.target.value,
            step: 0
        })}
        value={state.dateOfBirth?.toString()}
        labelClassNames="text-black" placeholder="DD/MM/AAAA" type="date" iconLeft="uil:calendar-alt" />

        <TextInput label="Celular" 
        onChange={(event) => handleChangeState({
            cellphone: event.target.value,
            step: 0
        })}
        value={state.cellphone}
        labelClassNames="text-black" placeholder="(00) 9 0000-0000" type="text" iconLeft="uil:phone-alt" />

        <div className="mt-[24px]">
        <Button className="rounded-md w-[100%]"> Próximo </Button>
        </div>
        </>
    )
}

export default SecondStep;