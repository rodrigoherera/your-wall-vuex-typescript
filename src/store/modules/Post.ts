import { VuexModule, Module, Mutation, Action, config, getModule} from 'vuex-module-decorators';
import { Post } from '../models';
import store from '@/store'

config.rawError = true;
@Module({
  namespaced: true,
  dynamic: true,
  store,
  name: 'posts'
})
class PostStore extends VuexModule {
  posts: Post[] = [];

  get Posts() {
    return this.posts;
  }
  
  @Mutation
  addPost(post: Post) {    
    this.posts.unshift(post);
  }

  @Mutation
  setPosts(postParam: Post[]) {
    this.posts = postParam;
  }

  @Action({commit: 'addPost'})
  async addPostAct(data: FormData) {

    const requestOptions = {
      method: 'POST',
      body: data,
    }
    const response = await fetch('http://localhost:8888/api/post', requestOptions);
    if (response.ok) {
      const res: Post = await response.json();
      return res;
    }else{
      console.error(response.text);
      return null;
    }
  }

  @Action({commit: 'setPosts'})
  async getPosts() {
    const response = await fetch("http://localhost:8888/api/post");    
    if (response.ok) {
      const res: Post[] = await response.json();
      return res;
    }else{
      console.error(response.text);
      return null;
    }
  }  
}

export default getModule(PostStore);
