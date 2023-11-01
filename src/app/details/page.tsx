'use client'

import Image from "next/image";
import problem from "../../assets/Rectangle 6.png";
import Address from "@/components/Address";
import Solution from "./components/Solution";
import UserComment from "@/components/UserComment";
import Comment from "./components/Comment";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const details = () => {
  const detailCards = [
    {
      title: 'Título da Solução 1',
      description: " Non nesciunt aspernatur ab tempora quasi sit culpa eius rem error dignissimos. Est fuga alias non neque sapiente et sint nemo qui  Non nesciunt aspernatur ab tempora quasi sit culpa eius rem error dignissimos. Est fuga alias non neque sapiente et sint nemo qui ",
      amountRequired: 1000,
      votes: 9,
      voted: false,
    },
    {
      title: 'Título da Solução 2',
      description: ' Non nesciunt aspernatur ab tempora quasi sit culpa eius rem error dignissimos. Est fuga alias non neque sapiente et sint nemo qui  Non nesciunt aspernatur ab tempora quasi sit culpa eius rem error dignissimos. Est fuga alias non neque sapiente et sint nemo qui ',
      amountRequired: 1000,
      votes: 5,
      voted: true,
    },
  ];

  return (
    <>
      <NavBar variant="secondary" iconsActions={['uil:home-alt', 'uil:comments-alt', 'fluent:search-24-filled']} />

      <main className="flex flex-col items-center">
        <div className="mt-[56px] mb-[48px]">
          <h1 className="text-[56px] text-black font-extrabold text-center">
            Título do problema
          </h1>
        </div>

        <div className="flex gap-6">
          <div className="w-full max-w-[860px]">
            <Image alt="" src={problem} className="w-full aspect-card-image" />
            <div className="mt-6 flex flex-col gap-3">
              <Address city="Cidade" neighborhood="Bairro" uf="UF" />
              <p className="text-base">
                Non nesciunt aspernatur ab tempora quasi sit culpa eius rem error
                dignissimos. Est fuga alias non neque sapiente et sint nemo qui
                labore fugit et quia quos id dicta adipisci. Sed perspiciatis amet
                qui doloribus voluptatem in eaque unde quo minima iste in odit
                quaerat id aliquam vitae eos reprehenderit aliquid. Et ipsum odio
                eos possimus saepe ex eligendi rerum ea dignissimos dicta sed
                atque suscipit aut architecto sequi.
              </p>
            </div>

            <div className="flex flex-col gap-[14px] mt-8 mb-8">
              <Comment
                type="solution"
                name="Adicione o título..."
                placeholder="Descreva a sua solução..."
              />
              {detailCards.map((detail, i) => (
                <Solution
                      key={i}
                      title={detail.title}
                      description={detail.description}
                      amountRequired={detail.amountRequired}
                      votes={detail.votes}
                      voted={detail.voted} 
                      onVoteClick={function (): void {
                          throw new Error("Function not implemented.");
                      } }/>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2 mb-[32px]">
              <h3 className="text-4xl font-bold text-center">Discussão</h3>
              <p className="text-sm">
                *Você pode votar até às <span>23h59</span> do dia{" "}
                <span>00/00/0000</span>
              </p>

              <Comment
                type="comment"
                avatar=""
                placeholder="Adicione um comentário..."
              />
              <UserComment
              avatar="https://avatars.githubusercontent.com/u/38577266?v=4"
              name="João Soares"
              text="Et inventore rerum ab reprehenderit autem ut omnis pariatur! 33 rerum quia sit neque dolorum et neque repellat qui sapiente eius!"
              time="3 horas"
            />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default details;