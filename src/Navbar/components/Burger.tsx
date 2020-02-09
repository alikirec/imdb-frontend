import React from 'react';
import BurgerIcon from './BurgerIcon';

interface BurgerProps {
  open: boolean;
  setOpen(open: boolean): void;
}

const Burger: React.FunctionComponent<BurgerProps> = ({ open, setOpen, ...props }) => (
  <BurgerIcon
    aria-label='Toggle menu'
    aria-expanded={open}
    open={open}
    onClick={() => setOpen(!open)}
    {...props}
  >
    <span />
    <span />
    <span />
  </BurgerIcon>
);

export default Burger;
