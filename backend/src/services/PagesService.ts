import { pages } from '../database';

class NewsService {
  execute() {
    return pages;
  }
}

export default new NewsService();
