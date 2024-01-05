export const navLinks = [
  {
    id: 1,
    label: 'home',
    to: '/',
  },
  { id: 2, label: 'gates', to: '/gates' },
  { id: 3, label: 'keys', to: '/keys' },
  { id: 4, label: 'about', to: '/about' },
] as const;

// export const navLinks = {
//   home: {
//     label: 'home',
//     to: '/',
//   },
//   about: {
//     label: 'about',
//     to: '/about',
//   },
//   gates: {
//     label: 'gates',
//     to: '/gates',
//   },
//   keys: { label: 'keys', to: '/keys' },
// };
