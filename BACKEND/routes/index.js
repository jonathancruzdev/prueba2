// Importamos los Routers 
import usersRouter from './usersRouter.js'
import postsRouter from './postsRouter.js'

// Está función recibe la apliacación como parámetro de entrada
export function routerAPI(app){
	// Definimos los endPoints
    app.use('/post', postsRouter);
    app.use('/users', usersRouter);
}