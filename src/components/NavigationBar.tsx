import React from "react";
import ResponsiveNavbar from "../ResponsiveNavbar";


const NavigationBar: React.FC = () => {
const navigation = [
  { name: 'Dashboard', href: '#dashboard', current: true },
  { name: 'Pattern', href: '#pattern', current: false },
  { name: 'About', href: '#about', current: false },
  { name: 'Generate', href: '#generator', current: false },
];

  return (
    <ResponsiveNavbar navigation={navigation} />
  );
};

export default NavigationBar;
