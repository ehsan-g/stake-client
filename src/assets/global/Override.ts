const components = {
  MuiCssBaseline: {
    styleOverrides: {
      "*": {
        boxSizing: "border-box",
      },
      html: {
        height: "100%",
        width: "100%",
      },
      body: {
        height: "100%",
        margin: 0,
        padding: 0,
      },
    },
  },
  MuiContainer: {
    styleOverrides: {
      root: {
        paddingLeft: "15px !important",
        paddingRight: "15px !important",
        maxWidth: "1600px",
      },
    },
  },

  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: "20px",
        padding: "14px",
        margin: "15px",
        boxShadow: "0px 7px 30px 0px rgba(90, 114, 123, 0.11)",
      },
    },
  },

  MuiTypography: {
    styleOverrides: {
      subtitle2: {
        fontWeight: 800,
        fontSize: "10px",
        lineHeight: "14px",
      },
      body1: {
        color: "#000000",
        fontWeight: 200,
        fontSize: "10px",
        lineHeight: "14px",
      },
    },
  },
  MuiCircularProgress: {
    styleOverrides: {
      root: {
        display: "block",
        margin: "auto",
        marginTop: 10,
      },
    },
  },
  MuiAlert: {
    styleOverrides: {
      root: {
        marginTop: 6,
        fontSize: "0.75rem",
        // justifyContent: "center",
      },
      outlinedError: {
        color: "#f44336",
        borderColor: "transparent",
      },
      outlinedSuccess: {
        borderColor: "transparent",
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        textTransform: "none" as const,
        fontSize: "0.65rem",
        padding: 1,
        "&.Mui-selected": {
          fontSize: "0.75rem",
          padding: 1,
        },
      },
    },
  },
  MuiToolbar: {
    styleOverrides: {
      root: {
        minHeight: "10 px",
      },
    },
  },
};

export default components;
