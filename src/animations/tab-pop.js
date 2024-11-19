// TODO typescript
import {VERTICAL_SLIDE_DURATION} from './vertical-slide';
const TAB_POP_DURATION = 0.55;
const DELAY = VERTICAL_SLIDE_DURATION + TAB_POP_DURATION;

const popFromTopAnimationPair = {
  old:  {
    name: 'popDown',
    duration: `${TAB_POP_DURATION}s`,
  },
  new: {
    name: 'popDown',
    duration: `${TAB_POP_DURATION}s`,
    direction: 'reverse',
    delay: `${DELAY}s`,
  }
}

const popFromBottomAnimationPair = {
  old: {
    name: 'popUp',
    duration: `${TAB_POP_DURATION}s`,
  },
  new: {
    name: 'popUp',
    duration: `${TAB_POP_DURATION}s`,
    direction: 'reverse',
    delay: `${DELAY}s`,
  }
}

export const popFromTop = {
  forward: popFromTopAnimationPair,
  backward: popFromTopAnimationPair
}

export const popFromBottom = {
  forward: popFromBottomAnimationPair,
  backward: popFromBottomAnimationPair,
}


