// TODO typescript
export const VERTICAL_SLIDE_DURATION = 0.7;

const slideAnimationProps = {
  duration: `${VERTICAL_SLIDE_DURATION}s`,
  delay: `${VERTICAL_SLIDE_DURATION}s`,
  easing: 'linear',
}

export const verticalSlide = {
  forward: {
    old: {
      name: 'slideUp',
      ...slideAnimationProps,
    },
    new: {
      name: 'slideDown',
      ...slideAnimationProps,
      direction: 'reverse',
    }
  },
  backward: {
    old: {
      name: 'slideDown',
      ...slideAnimationProps,
    },
    new: {
      name: 'slideUp',
      ...slideAnimationProps,
      direction: 'reverse',
    },
  },
};
