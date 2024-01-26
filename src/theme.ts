export const colorPalette = {
    silver: '#C0C0C0',
    light_steel_blue: '#B0C4DE',
    dark_slate_gray: '#2F4F4F',
    aluminum: '#BFBFBF',
    steel_blue: '#4682B4'
};

interface Theme {
    colors: {
        background: string;
        primaryText: string;
        secondaryText: string;
        highlight: string;
        accent: string;
    }
    typography: {
        fontFamily: string;
        fontSize: string;
    },
    spacing: {
        padding: string;
        margin: string;
    },
    layout: {
        maxWidth: string;
    },
    animation: {
        transition: string;
    }
}

const theme: Theme = {
    colors: {
        background: colorPalette['silver'],
        primaryText: colorPalette['light_steel_blue'],
        secondaryText: colorPalette['dark_slate_gray'],
        highlight: colorPalette['aluminum'],
        accent: colorPalette['steel_blue']
    },
    typography: {
        fontFamily: 'Arial',
        fontSize: '16px'
    },
    spacing: {
        padding: '10px',
        margin: '20px'
    },
    layout: {
        maxWidth: '1200px'
    },
    animation: {
        transition: '0.3s ease-in-out'
    }
};

export default theme;
