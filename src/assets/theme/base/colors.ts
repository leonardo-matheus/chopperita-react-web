// Dev: https://github.com/leonardo-matheus
/**
 * The base colors for the Material Dashboard 2 PRO React TSUI Dashboard PRO Material.
 * You can add new color using this file.
 * You can customized the colors for the entire Material Dashboard 2 PRO React TSUI Dashboard PRO Material using thie file.
 */

// types
interface ColorsTypes {
  main: string;
  focus: string;
}

interface GradientsTypes {
  main: string;
  state: string;
}

interface SocialMediaColorsTypes {
  main: string;
  dark: string;
}

interface BadgeColorsTypes {
  background: string;
  text: string;
}

interface Types {
  background:
    | {
        default: string;
        sidenav?: string;
        card?: string;
      }
    | any;
  white:
    | {
        main: string;
        focus: string;
      }
    | any;
  text:
    | {
        main: string;
        focus: string;
        primary?: string;
        secondary?: string;
        disabled?: string;
      }
    | any;
  transparent:
    | {
        main: string;
      }
    | any;
  black:
    | {
        light: string;
        main: string;
        focus: string;
      }
    | any;
  primary: ColorsTypes | any;
  secondary: ColorsTypes | any;
  info: ColorsTypes | any;
  success: ColorsTypes | any;
  warning: ColorsTypes | any;
  error: ColorsTypes | any;
  light: ColorsTypes | any;
  dark: ColorsTypes | any;
  grey:
    | {
        [key: string | number]: string;
      }
    | any;
  gradients:
    | {
        primary: GradientsTypes;
        secondary: GradientsTypes;
        info: GradientsTypes;
        success: GradientsTypes;
        warning: GradientsTypes;
        error: GradientsTypes;
        light: GradientsTypes;
        dark: GradientsTypes;
      }
    | any;
  socialMediaColors:
    | {
        facebook: SocialMediaColorsTypes;
        twitter: SocialMediaColorsTypes;
        instagram: SocialMediaColorsTypes;
        linkedin: SocialMediaColorsTypes;
        pinterest: SocialMediaColorsTypes;
        youtube: SocialMediaColorsTypes;
        vimeo: SocialMediaColorsTypes;
        slack: SocialMediaColorsTypes;
        dribbble: SocialMediaColorsTypes;
        github: SocialMediaColorsTypes;
        reddit: SocialMediaColorsTypes;
        tumblr: SocialMediaColorsTypes;
      }
    | any;
  badgeColors:
    | {
        primary: BadgeColorsTypes;
        secondary: BadgeColorsTypes;
        info: BadgeColorsTypes;
        success: BadgeColorsTypes;
        warning: BadgeColorsTypes;
        error: BadgeColorsTypes;
        light: BadgeColorsTypes;
        dark: BadgeColorsTypes;
      }
    | any;
  coloredShadows:
    | {
        [key: string]: string;
      }
    | any;
  inputBorderColor: string;
  tabs:
    | {
        indicator:
          | {
              boxShadow: string;
            }
          | any;
      }
    | any;
}

const colors: Types = {
  background: {
    default: "#f0f2f5",
    login: "#26806e",
  },

  text: {
    main: "#7b809a",
    focus: "#7b809a",
    lighter: "#ebffee",
  },

  transparent: {
    main: "transparent",
  },

  white: {
    main: "#ffffff",
    focus: "#ffffff",
    nav: "#216D5E",
    button: "#e91e63",
  },

  black: {
    light: "#000000",
    main: "#000000",
    focus: "#000000",
    nav: "#216D5E",
  },

  primary: {
    main: "#216D5E",
    focus: "#216D5E",
  },

  secondary: {
    main: "#255426",
    focus: "#ffffff",
  },

  info: {
    main: "#216D5E",
    focus: "#EC407A",
    BUTTON: "#EC407A",
  },

  success: {
    main: "#4CAF50",
    focus: "#67bb6a",
  },

  warning: {
    main: "#fb8c00",
    focus: "#fc9d26",
  },

  error: {
    main: "#F44335",
    focus: "#f65f53",
  },

  light: {
    main: "#216d5e",
    focus: "#f0f2f5",
  },

  dark: {
    main: "ffffff",
    focus: "#ffffff",
    nav: "#ffffff",
  },

  grey: {
    100: "#ffffff",
    200: "#f0f2f5",
    300: "#dee2e6",
    400: "#ced4da",
    500: "#adb5bd",
    600: "#6c757d",
    700: "#495057",
    800: "#343a40",
    900: "#212529",
  },

  gradients: {
    primary: {
      main: "#EC407A",
      state: "#EC407A",
    },

    secondary: {
      main: "#EC407A",
      state: "#EC407A",
    },

    info: {
      main: "#216D53",
      state: "#216D5E",
      button: "#e91e63",
    },

    success: {
      main: "#66BB6A",
      state: "#43A047",
    },

    warning: {
      main: "#FFA726",
      state: "#FB8C00",
    },

    error: {
      main: "#EF5350",
      state: "#E53935",
    },

    light: {
      main: "#216d5e",
      state: "#216d5e",
    },

    dark: {
      main: "#216D5E",
      state: "#216D5E",
    },
  },

  socialMediaColors: {
    facebook: {
      main: "#3b5998",
      dark: "#344e86",
    },

    twitter: {
      main: "#55acee",
      dark: "#3E3E45",
    },

    instagram: {
      main: "#125688",
      dark: "#0e456d",
    },

    linkedin: {
      main: "#0077b5",
      dark: "#00669c",
    },

    pinterest: {
      main: "#cc2127",
      dark: "#b21d22",
    },

    youtube: {
      main: "#e52d27",
      dark: "#d41f1a",
    },

    vimeo: {
      main: "#1ab7ea",
      dark: "#13a3d2",
    },

    slack: {
      main: "#3aaf85",
      dark: "#329874",
    },

    dribbble: {
      main: "#ea4c89",
      dark: "#e73177",
    },

    github: {
      main: "#24292e",
      dark: "#171a1d",
    },

    reddit: {
      main: "#ff4500",
      dark: "#e03d00",
    },

    tumblr: {
      main: "#35465c",
      dark: "#2a3749",
    },
  },

  badgeColors: {
    primary: {
      background: "#EC407A",
      text: "#cc084b",
    },

    secondary: {
      background: "#EC407A",
      text: "#6c757d",
    },

    info: {
      background: "#aecef7",
      text: "#095bc6",
    },

    success: {
      background: "#bce2be",
      text: "#339537",
    },

    warning: {
      background: "#ffd59f",
      text: "#c87000",
    },

    error: {
      background: "#fcd3d0",
      text: "#f61200",
    },

    light: {
      background: "#ad009c",
      text: "#ebffee",
    },

    dark: {
      background: "#EC407A",
      text: "#ebffee",
    },
  },

  coloredShadows: {
    primary: "#e91e62",
    secondary: "#216D5E",
    info: "#00bbd4",
    success: "#4caf4f",
    warning: "#ff9900",
    error: "#f44336",
    light: "#adb5bd",
    dark: "#404040",
  },

  inputBorderColor: "#d2d6da",

  tabs: {
    indicator: { boxShadow: "#ddd" },
  },
};

export default colors;
