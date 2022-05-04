import { CloseButton } from "./CloseButton";

import bugImageUrl from '../assets/bug.svg';
import ideaImageUrl from '../assets/idea.svg';
import otherImageUrl from '../assets/other.svg';

const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Desenho de um inseto'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Desenho de uma lâmpada'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: otherImageUrl,
      alt: 'Desenho de um balão de pensamento'
    }
  }
};

// Obj=ect.entries(feedbackTypes) => [['BUG', {...}], ['IDEA', {...}], ...] retorna um vetor

export function WidgetForm() {
  return(
    <div className="bg-zinc-900 text-white p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-4">Deixe seu feedback</span>
        <CloseButton/>
      </header>
      
      <div className="flex py-8 gap-2 w-full">
        { Object.entries(feedbackTypes).map(([key, value]) => {
            return(
              <button
                key={key}
                className="bg-zing-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              >
                <img src={value.image.source} alt={value.image.alt} />
                <span>{value.title}</span>
              </button>
            )
          })
        }
      </div>

      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela <a href="" className="underline underline-offset-2">Rockseat</a>
      </footer>
    </div>
  );
}