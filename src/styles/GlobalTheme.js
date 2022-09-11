export const ThemeObject = {
    palette: {
        primary: {
            main: '#0996C7',
        },
        secondary: {
            main: '#ADADAD',
        },

    },
    typography: {
        fontFamily: "Urbanist,sans-serif",
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "capitalize"
                }
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: "16px",
                }

            },
        },
        MuiTypography: {
            variants: [
                {
                    props: { variant: 'title1' },
                    style: {
                        color: "#000000",
                        fontFamily: "Urbanist,sans-serif",
                        fontSize: "36px",
                        lineHeight: "35px",
                        fontWeight: "550"
                    },
                },
                {
                    props: { variant: 'subtitle1' },
                    style: {
                        color: "#ADADAD",
                        fontSize: "24px",
                        lineHeight: "27px",
                    },
                },
                {
                    props: { variant: 'subtitle2' },
                    style: {
                        color: "#ADADAD",
                        fontSize: "18px",
                        lineHeight: "30px",
                        fontWeight: "450"
                    },
                },
                {
                    props: { variant: 'description' },
                    style: {
                        color: "#000000",
                        fontFamily: "Urbanist,sans-serif",
                        fontSize: "16px",
                        wordBreak: "break-word",
                        fontWeight: "500",
                        lineHeight: "16px",
                    },
                },
            ],
        },
    }
}