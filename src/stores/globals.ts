import { acceptHMRUpdate, defineStore } from 'pinia';
import type { NavigationItem } from '~/types';

export const useGlobalStore = defineStore('global', {
  state: () => ({
    mainNav: [
      { name: 'Inicio', route: '/' },
      { name: 'Nosotros', route: '/nosotros' },
      { name: 'GNL', route: '/gnl' },
      { name: 'Contacto', route: '/contacto' },
    ] as NavigationItem[],
  }),
});

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useGlobalStore, import.meta.hot));
