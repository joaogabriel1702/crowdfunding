'use client'

import React from 'react';

type UserCommentProps = {
  avatar?: string;
  name?: string;
  time?: string;
  text?: string;
};

const UserComment = ({ avatar, name, time, text }: UserCommentProps) => (
  <div className="bg-white flex items-center p-[24px] pt-[32px] rounded-lg w-full max-w-md border gap-[10px] border-sub	">
    <div>
      <img src={avatar} alt="foto de perfil" className="w-full rounded-[50px] max-w-[50px]" />
    </div>
    <div className="flex flex-col justify-center">
      <div className="flex gap-2 items-center">
        <h3 className="text-base font-bold">{name}</h3>
        <span className="text-xs font-normal">Há {time}</span>
      </div>
      <div>
        <p>{text}</p>
      </div>
    </div>
  </div>
);

export default UserComment;