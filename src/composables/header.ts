export type HeaderVariantType = 'dark' | 'light';

export const useHeaderVariant = () => useState<HeaderVariantType>('header-variant', () => 'light');
