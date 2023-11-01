'use client'

import React, { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "@/components/Button";

type CommentProps = {
    avatar?: string;
    name?: string;
    placeholder?: string;
    type: "comment" | "solution";
  };
  
  const Comment = ({
    avatar,
    name,
    placeholder,
    type = "comment",
  }: CommentProps) => {
    const [text, setText] = useState("");
  
    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setText(event.target.value);
    };
  
    const handleSubmit = () => {
      if (text.trim() !== "") {
        setText("");
      }
    };
  
    return (
      <div className="bg-sub py-4 px-5 flex items-center gap-4 rounded-[10px] w-full max-w-[860px]">
        <div>
          <img
            src={avatar}
            alt="Foto de Perfil"
            className="w-full rounded-[50px] max-w-[50px]"
          />
        </div>
        <div className="w-full flex flex-col gap-2 max-w-[860px]">
          <h3 className="text-base font-bold">{name}</h3>
          <input
            type="text"
            placeholder={placeholder}
            className="border-b border-sub outline-none bg-transparent w-full"
            value={text}
            onChange={handleTextChange}
          />
          {type === "comment" && text.trim() !== "" && (
            <>
              <div className="flex items-center gap-2">
                <Icon icon="iconoir:emoji" />
                <Icon icon="uil:image-plus" />
              </div>
              <div className="flex items-center justify-between gap-4">
                <button className="text-xs font-extrabold">Cancelar</button>
                <Button className="rounded-[10px] text-xs font-extrabold" onClick={handleSubmit}>
                  Comentar
                </Button>
              </div>
            </>
          )}
          {type === "solution" && text.trim() !== "" && (
            <>
              <div className="flex gap-2 items-center">
                <p className="text-start text-sm">
                  Quanto será preciso para realizar esta solução?
                </p>
                <label htmlFor="price" className="font-bold text-base">
                  R$
                </label>
                <input type="number" id="price" className="bg-transparent font-bold border-b-2 border-b-black outline-none w-[50px]" />
              </div>
              <div className="flex items-center justify-end gap-4">
                <Button className="text-sm font-extrabold">Cancelar</Button>
                <Button className="rounded-[10px] text-xs font-extrabold" onClick={handleSubmit}>
                  {type === "solution" ? "Solução" : "Comentar"}
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    );
  };
  
  export default Comment;