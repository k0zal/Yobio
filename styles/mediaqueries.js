const sizes = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    tabletfrom: '768px',
    tabletC: "960px",
    laptop: '1024px',
    laptopL: '1200px',
    desktop: '1620px',
    desktopL: "3840px",
  };



    const device = {
    mobileS: `(min-width: ${sizes.mobileS})`,
    tabletC: `(min-width: ${sizes.tabletC})`,
    mobileM: `(min-width: ${sizes.mobileM})`,
    mobileL: `(min-width: ${sizes.mobileL})`,
    tablet: `(min-width: ${sizes.tablet})`,
    tabletfrom: `(min-width: ${sizes.tabletfrom})`,
    laptop: `(min-width: ${sizes.laptop})`,
    laptopMAX: `(max-width: ${sizes.laptop})`,
    laptopL: `(min-width: ${sizes.laptopL})`,
    desktop: `(min-width: ${sizes.desktop})`,
    desktopL: `(min-width: ${sizes.desktopL})`,
  };

  export default device