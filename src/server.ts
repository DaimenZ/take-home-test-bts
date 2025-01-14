import App from "./main";
import AuthRoute from "./routes/auth.route";
import NoteRoute from "./routes/note.route";

const app = new App([new AuthRoute(), new NoteRoute()]);

app.listen();
