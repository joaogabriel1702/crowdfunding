'use client'

import React from 'react';
import Button from '@/components/Button';

type DetailProblemProps = {
    title: string;
    description: string;
    amountRequired: number;
    votes: number;
    voted: boolean;
    onVoteClick: () => void;
  };
const Solution = ({ title, description, amountRequired, votes, voted, onVoteClick }: DetailProblemProps) => {

    return (
        <div className="w-full flex flex-col max-w-[860px] gap-4 bg-white p-[24px] pt-[32px] rounded-lg shadow-md border">
          <div className="flex flex-col gap-4">
            <h4 className="text-base font-bold">{title}</h4>
            <p>{description}</p>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">
              <strong className="text-base">R$ {amountRequired}</strong> Quantia necessária para esta solução
            </span>
            <div className="flex items-center gap-8">
              <span>
                <strong>{votes}</strong> votos
              </span>
              {voted ? (
                <Button iconLeft="fluent:star-24-filled" className="rounded-md">
                  Votado
                </Button>
              ) : (
                <Button
                  iconLeft="fluent:star-24-filled"
                  variant="secondary"
                  className="rounded-md"
                  onClick={onVoteClick}
                >
                  Votar nesta solução
                </Button>
              )}
            </div>
          </div>
        </div>
      )
  }
  
  export default Solution;