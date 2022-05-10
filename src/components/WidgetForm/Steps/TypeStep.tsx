import { feedbackTypes, FeedbackType } from ".."
import { CloseButton } from "../../CloseButton";


interface TypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function TypeStep({onFeedbackTypeChanged}: TypeStepProps) {
  return(
    <>
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
                onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
              >
                <img src={value.image.source} alt={value.image.alt} className="m-auto" />
                <span>{value.title}</span>
              </button>
            )
          })
        }
      </div>
    </>
  )
}