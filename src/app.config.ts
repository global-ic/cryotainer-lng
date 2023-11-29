export default defineAppConfig({
  ui: {
    container: {
      constrained: 'max-w-7xl',
    },

    button: {
      font: 'font-headline uppercase font-normal',
      rounded: 'rounded-md',
      padding: {
        sm: 'px-8 py-2',
      },
      size: {
        sm: 'text-xs',
      },

      variant: {
        primary:
          /*tw*/ 'bg-primary-100 text-primary-900 transition-colors duration-200 ease-out hover:bg-primary-700 hover:text-primary-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400 active:bg-primary-900 active:transition-none active:text-white',
        'primary-outlined':
          /*tw*/ 'bg-transparent text-primary-900 transition-[background-color,box-shadow,color] duration-200 ease-out ring-1 ring-inset ring-primary-900 hover:bg-primary-700 hover:text-primary-100 hover:ring-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400 active:bg-primary-900 active:transition-none active:text-white',
      },

      default: {
        size: 'sm',
        variant: 'primary',
      },
    },
  },
});
