import { useState } from 'react';
import { CloseButton } from '../CloseButton';
import { TypeStep } from './Steps/TypeStep';
import { ContentStep } from './Steps/ContentStep';
import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import otherImageUrl from '../../assets/other.svg';
import { SuccessStep } from './Steps/SuccessStep';

export const feedbackTypes = {
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

export type FeedbackType = keyof typeof feedbackTypes;

// Obj=ect.entries(feedbackTypes) => [['BUG', {...}], ['IDEA', {...}], ...] retorna um vetor

export function WidgetForm() {
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return(
    <div className="bg-zinc-900 text-white p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">      
      {
        feedbackSent ? (
          <SuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
        ) : (
          <>
            {!feedbackType ? (
              <TypeStep onFeedbackTypeChanged={setFeedbackType} />
            ) : (
              <ContentStep
                feedbackType={feedbackType}
                onFeedbackRestartRequested={handleRestartFeedback}
                onFeedbackSent={() => setFeedbackSent(true)}
              />
            )}
          </>
        )
      }

      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela <a href="" className="underline underline-offset-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500">Rockseat</a>
      </footer>
    </div>
  );
}