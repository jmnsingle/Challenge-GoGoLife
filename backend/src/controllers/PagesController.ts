import { Request, Response } from 'express';

import PagesService from '../services/PagesService';

class PagesController {
  index(request: Request, response: Response) {
    const res = PagesService.execute();

    return response.json(res);
  }
}

export default new PagesController();
