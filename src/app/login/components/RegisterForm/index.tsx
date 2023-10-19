'use client'

import Card from "@/components/Card"
import FirstStep from "./components/FirstStep"
import SecondStep from "./components/SecondStep"
import React from "react"
import { Icon } from "@iconify/react/dist/iconify.js"
import { LoginPageActionTypes } from "../../page"

type RegisterFormProps = {
    handleSetAction: (action: LoginPageActionTypes) => void
}

export type RegisterFormState = {
    step: number,
    email?: string,
    password?: string,
    confirmPassword?: string,
    fullName?: string,
    dateOfBirth?: string | Date,
    cellphone?: string,
}

const RegisterForm = ({handleSetAction}: RegisterFormProps) => {

    const [state, setState] = React.useState<RegisterFormState>({
        step: 0,
        email: '',
        password: '',
        confirmPassword: '',
        fullName: '',
        dateOfBirth: '',
        cellphone: '',
    })

    const handleChangeState = (updatedValue: RegisterFormState) => {
        setState(PreviousState => ({
            ...PreviousState,
            ...updatedValue,
        }))
    }

    const handleNextStep = () => {
        handleChangeState({
            step: state.step ? state.step++ : 1
        })
    }
    
    const steps = [
        // eslint-disable-next-line react/jsx-key
        <FirstStep handleNextStep={handleNextStep} handleChangeState={handleChangeState} state={state}/>,
        // eslint-disable-next-line react/jsx-key
        <SecondStep state={state} handleChangeState={handleChangeState}/>
    ]

    return (
        <Card className="border-[#121212]">
            
           {steps[state.step ?? 0]}

            <div className="mt-[26px]">
                <span className="flex items-center gap-1 text-sub cursos-pointer"
                onClick={() => handleSetAction('login')}>
                    <Icon icon='uil:user'/>
                    Login
                </span>
            </div>

        </Card>
    )
}

export default RegisterForm;