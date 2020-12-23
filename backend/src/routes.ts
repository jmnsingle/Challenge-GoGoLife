import { Router } from 'express';

import PostsController from './controllers/PostsController';
import PagesController from './controllers/PagesController';

const routes = Router();

routes.get('/posts', PostsController.index);

routes.get('/pages', PagesController.index);

export default routes;
