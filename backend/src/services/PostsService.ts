import { posts } from '../database';

class NewsService {
  execute(type: string) {
    if (type === 'post') {
      // Função usada para tratar os dados vindos do banco da forma antiga.
      // Alterei o conteudo dos posts para já retornar já do jeito certo
      // const formattedPosts = [] as any;
      // const aux = posts;
      // aux.forEach((post: any) => {
      //   const existing = formattedPosts.filter((v: any) => {
      //     return v.category === post.category;
      //   });

      //   if (existing.length) {
      //     const existingIndex = formattedPosts.indexOf(existing[0]);

      //     formattedPosts[existingIndex].title = formattedPosts[
      //       existingIndex
      //     ].title.concat(post.title);
      //   } else {
      //     // eslint-disable-next-line no-param-reassign
      //     post.title = [post.title];
      //     formattedPosts.push(post);
      //   }
      // });

      return posts;
    }

    return { error: 'Apenas o tipo posts é aceito no momento.' };
  }
}

export default new NewsService();
