import {engine} from "express-handlebars";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const configHbs = (app) =>{

    app.engine('hbs', engine({
        extname: '.hbs',
        defaultLayout: 'main',
        layoutsDir: path.join(__dirname, '..', 'views/layouts')
    }));

    app.set('view engine', 'hbs');
    app.set('views', path.join(__dirname, '..', 'views'));

};

export default configHbs;