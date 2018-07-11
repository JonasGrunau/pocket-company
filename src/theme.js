import {createMuiTheme} from "@material-ui/core/styles";
import {blueGrey, indigo, red} from "@material-ui/core/colors";

export const theme = createMuiTheme({
    palette: {
        type: "dark",
        primary: blueGrey,
        secondary: indigo,
        error: red,
        grey: blueGrey,
        background: {
            paper: blueGrey[300],
            default: blueGrey[900]
        }
    },
});