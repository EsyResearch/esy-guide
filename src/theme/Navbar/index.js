import React from 'react';
import OriginalNavbar from '@theme-original/Navbar';
import EsyNavbar from '@site/src/components/EsyNavbar';

// Set this to true to use the Esy navbar, false for Docusaurus navbar
const USE_ESY_NAVBAR = true;

export default function NavbarWrapper(props) {
  if (USE_ESY_NAVBAR) {
    return <EsyNavbar />;
  }
  return <OriginalNavbar {...props} />;
}