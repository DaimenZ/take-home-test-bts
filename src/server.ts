import App from "./main";
import AuthRoute from "./routes/auth.route";

const app = new App([new AuthRoute()]);

app.listen();
