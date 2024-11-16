// TODO typescript
const SLIDE_PROPS = {
  duration: '0.8s',
  delay: '0.8s'
}
export default {
  forward: {
    old: {
      name: 'exitUp',
      ...SLIDE_PROPS
    },
    new: {
      name: 'enterUp',
      ...SLIDE_PROPS
    }
  },
  backward: {
    old: {
      name: 'exitDown',
      ...SLIDE_PROPS
    },
    new: {
      name: 'enterDown',
      ...SLIDE_PROPS
    },
  },
};
