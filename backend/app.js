import consola from "consola";

export default function express_server(express) {

    this.app = express();

    /** @middlewareHandler
     * Function to add middleware
     * @returns {this} reference to the express app
     * @param middleware
     */
    this.addMiddleware = middleware => {
        this.app.use(middleware)
        return this;
    }
    
    /** @helmetSecurityHandler
     * Function to add security headers with Helmet
     * @returns {this} reference to the express app
     * @param helmet
     */
    this.helmetSecurity = (helmet) => {
        this.app.use(helmet());
        this.app.use(helmet.hsts({
            maxAge: 5184000,
            includeSubDomains: true
        }));

    
        this.app.use(helmet.permittedCrossDomainPolicies());
        this.app.use(helmet.referrerPolicy({policy: 'strict-origin-when-cross-origin'}));
        return this;
    }

    /** @rountingHandler
     * Function to route requests coming in
     * @returns {this} reference to the express app
     * @param route
     */
    this.addRouting = route => {

        /* API routes */
        this.app.use('/api/', route.carRoutes)

        return this;
    }

    /** @expressPortHandler
     * Function to handle which port the express server listens on
     * @returns {this} reference to the express app
     * @param port
     */
    this.listenOn = port => {
        this.app.listen(port, () =>
            consola.info(
                {
                    message: `Server started on port ${port}`,
                    badge: true
                }));
        return this;
    }

    /** @errorHandler
     * Function to handle erros of type 500
     * @returns {this} return an error message with an http code
     */
    this.errorHandler = () => {
        this.app.use((req, res) => {
            const error = new Error("Route Not found !");
            res.status(500).json({
                message: error.message
            });
        });
        return this;
    }


    /** @startServerHandler
     * Function to start the express server
     * @returns {this} reference to the express app
     */
    this.run = () => {
        return this.app;
    }

}
