'use client'

import Image from 'next/image'
import ActionCard from '../components/ActionCard'


export default function Solutions() {

  const actions: IAction[] = [
    {
      address: {
        uf: 'PE',
        city: 'Recife',
        neighborhood: 'Boa Viagem',
      },
      amountCollected: 150,
      author: 'João Soares',
      description: 'Solution for a problem',
      finalDate: '2023-10-23',
      img: 'https://jpeg.org/images/jpeg-home.jpg',
      title: 'Action',
      totalGoal: 1000,
    },
    {
      address: {
        uf: 'PE',
        city: 'Recife',
        neighborhood: 'Boa Viagem',
      },
      amountCollected: 150,
      author: 'João Soares',
      description: 'Solution for a problem',
      finalDate: '2023-10-23',
      img: 'https://jpeg.org/images/jpeg-home.jpg',
      title: 'Action 2',
      totalGoal: 1000,
    },
  ]

  return (
    <main className="flex flex-col items-center">
      <div className='mt-[56px]'>
        <h1 className='text-[56px] text-black font-extrabold text-center'> Escolha uma ação para apoiar </h1>
      </div>

      <div className='flex flex-wrap gap-8 w-full -max-w-[1400px] justify-center py-4'>
        {actions.map((action, index) => <ActionCard key={index} action={action}/>)}
      </div>
    </main>
  )
}
