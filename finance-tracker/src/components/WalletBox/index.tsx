import React, {useMemo} from "react";
import { Container } from "./style";

import dollarImg from "../../utils/assets/dollar.svg";
import arrowUpImg from "../../utils/assets/arrow-up.svg";
import arrowDownImg from "../../utils/assets/arrow-down.svg";
import CountUp from "react-countup";

interface IWalletBoxProps {
  title: string;
  amount: number;
  footerlabel: string;
  icon: 'dollar' | 'arrowUp' | 'arrowDown';
  color: string;
}

const WalletBox: React.FC<IWalletBoxProps> = ({title, amount, footerlabel, icon, color}) => {
    const iconSelected = useMemo(() => {
    switch(icon) {
      case 'dollar':
        return dollarImg;
      case 'arrowUp':
        return arrowUpImg;
      case 'arrowDown':
        return arrowDownImg;
      default:
        return dollarImg;
    }
  }, [icon]);

  return (
    <Container color={color}>
      <span>{title}</span>
      <h1><CountUp end={amount} start={0} suffix={" €"} decimal="," decimals={2} /></h1>
      <small>{footerlabel}</small>
      <img src={iconSelected} alt={title}/>
    
    </Container>
  );
};

export default WalletBox;