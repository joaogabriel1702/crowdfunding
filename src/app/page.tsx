'use client'

import Image from 'next/image'
import ActionCard from './components/ActionCard'
import ProblemItem from './components/ProblemCard'
import UserComment from '@/components/UserComment'

export default function Home() {

  const problems: IProblem[] = [
    {
      address: {
        uf: 'PE',
        city: 'Recife',
        neighborhood: 'Boa Viagem',
      },
      author: 'João Soares',
      description: 'Solution for a problem',
      deadline: '2023-10-26',
      imageURL: 'https://jpeg.org/images/jpeg-home.jpg',
      title: 'Action',
      pix:'teste',
    },
    {
      address: {
        uf: 'PE',
        city: 'Recife',
        neighborhood: 'Boa Viagem',
      },
      author: 'João Soares',
      description: 'Solution for a problem',
      deadline: '2024-11-25',
      imageURL: 'https://jpeg.org/images/jpeg-home.jpg',
      title: 'Action',
      pix:'teste',
    },
  ]

  return (
    <main className="flex flex-col items-center">
      <div className='mt-[56px]'>
        <h1 className='text-[56px] text-black font-extrabold text-center'> Escolha uma ação para apoiar </h1>
      </div>

      <div className='flex flex-wrap gap-8 w-full -max-w-[1400px] justify-center py-4'>
        {problems.map((problem, index) => <ProblemItem key={index} problem={problem} />)}
      </div>
    </main>
  )
}
