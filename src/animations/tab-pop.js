// TODO typescript
const TAB_POP_DURATION = '0.55s';

const popFromTopAnimationPair = {
  old:  {
    name: 'popDown',
    duration: TAB_POP_DURATION,
  },
  new: {
    name: 'popDown',
    duration: TAB_POP_DURATION,
    direction: 'reverse'
  }
}

const popFromBottomAnimationPair = {
  old: {
    name: 'popUp',
    duration: TAB_POP_DURATION,
  },
  new: {
    name: 'popUp',
    duration: TAB_POP_DURATION,
    direction: 'reverse'
    //   delay: TAB_POP_DURATION
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


