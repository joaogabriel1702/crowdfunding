'use client'

import Address from "@/components/Address"
import Button from "@/components/Button"
import { StringUtils } from "@/utils/stringUtils"
import RemainingDays from "../RemainingDays"

interface ProblemItemProps{
    problem: IProblem
}

const ProblemItem = ({problem}: ProblemItemProps) =>{
    
    const {address, author, description, deadline, imageURL, title} = problem
    
    return (
        <div className="flex flex-col gap-4 rounded -[10px] overflow-hidden shadow-md w-full max-w-[420px] min-w-[320px]">
            <img src={imageURL} className="w-full aspect-card-image" />
            <div className="flex flex-col py-8 px-6">
                <div className="flex flex-col w-full h-[350px] overflow-hidden gap-6">
                    <h2 className="text-xl font-bold line-clamp-2">
                        {title}
                    </h2>

                    <div className="text-sm text-sub"> por {`[ ${StringUtils.capitalizeFirstCharacterInName(author ?? "")}]`} </div>

                    <div className="line-clamp-3"> {description} </div>

                    <Address uf={address?.uf} city={address?.city} neighborhood={address?.neighborhood}/>

                </div>

                <RemainingDays finalDate={`${deadline}`} label="para o fim da votação" />

            </div>

            <Button iconLeft="fluent:handshake-24-filled" className="py-6"> Apoiar ação</Button>

        </div>
    )
    
}

export default ProblemItem;