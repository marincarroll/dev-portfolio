// TODO typescript
const TAB_POP_DURATION = '0.55s';

const popFromTopAnimationPair = {
  old:  {
    name: 'exitUp',
    duration: TAB_POP_DURATION,
  },
  new: {
    name: 'enterDown',
    duration: TAB_POP_DURATION,
    delay: TAB_POP_DURATION
  }
}

const popFromBottomAnimationPair = {
  old: {
    name: 'exitDown',
    duration: TAB_POP_DURATION,
  },
  new: {
    name: 'enterUp',
    duration: TAB_POP_DURATION,
    delay: TAB_POP_DURATION
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


