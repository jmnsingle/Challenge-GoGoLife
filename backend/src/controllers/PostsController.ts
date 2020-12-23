import { Request, Response } from 'express';

import NewsService from '../services/PostsService';

class PostsController {
  async index(request: Request, response: Response) {
    const { type, title } = request.query;

    const posts = NewsService.execute(String(type));

    return response.status(200).json(posts);
  }
}

export default new PostsController();
