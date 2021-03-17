import * as express from 'express';
import * as http from 'http';
import * as jwtConfig from '../config/guards/jwtAuth';
import * as swaggerUi from 'swagger-ui-express';
import AuthRouter from './Auth/router';
import CurrencyRouter from './Currency/router';
import getPrivatCurrency from './Currency/modules/currencies_getter';
let swaggerDoc: Object;

try {
    swaggerDoc = require('../../swagger.json');
} catch (error) {
    console.log('  You don\`t have swagger.json file');
    console.log('  Please, run: ');
    console.log('  $ npm run create:swagger-doc');
}

/**
 * @export
 * @param {express.Application} app
 */
export function init(app: express.Application): void {
    const router: express.Router = express.Router();

    /**
     * @description
     *  Forwards any requests to the /v1 URI to our CurrencyRouter
     *  Also, check if user authenticated
     * @constructs
     */
    app.use('/v1', jwtConfig.isAuthenticated, CurrencyRouter);

    /**
     * @description Forwards any requests to the /auth URI to our AuthRouter
     * @constructs
     */
    app.use('/auth', AuthRouter);

    /**
     * @description Every hour getting new currency
     * @constructs
     */
    getPrivatCurrency();

    /**
     * @description
     *  If swagger.json file exists in root folder, shows swagger api description
     *  else send commands, how to get swagger.json file
     * @constructs
     */
    if (swaggerDoc) {
        app.use('/docs', swaggerUi.serve);
        app.get('/docs', swaggerUi.setup(swaggerDoc));
    } else {
        app.get('/docs', (req, res) => {
            res.send('<p>You don\'t have <code>swagger.json</code> file.</p>' +
                '<p>For generate doc file use: <code>npm run create:swagger-doc</code> in terminal</p>' +
                '<p>Then, restart your application</p>');
        });
    }

    /**
     * @description No results returned mean the object is not found
     * @constructs
     */
    app.use((req, res, next) => {
        res.status(404).send(http.STATUS_CODES[404]);
    });

    /**
     * @constructs all routes
     */
    app.use(router);
}
