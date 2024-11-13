// TODO typescript

const VERTICAL_SLIDE_DURATION = '0.8s';

export default {
  forward: {
    old: {
      name: 'exitUp',
      duration: VERTICAL_SLIDE_DURATION,
    },
    new: {
      name: 'enterUp',
      duration: VERTICAL_SLIDE_DURATION,
    }
  },
  backward: {
    old: {
      name: 'exitDown',
      duration: VERTICAL_SLIDE_DURATION,
    },
    new: {
      name: 'enterDown',
      duration: VERTICAL_SLIDE_DURATION,
    },
  },
};
