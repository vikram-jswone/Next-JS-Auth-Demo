import { CreatePostPayload, Post, PostId, UpdatePostPayload } from "@/types";
import axios from "axios";

class PostService {
  protected baseUrl: string;

  constructor(baseUrl: string = "https://jsonplaceholder.typicode.com") {
    this.baseUrl = baseUrl;
  }
  /**
     * @description : get all posts
     60* @returns : posts
     */
  public async getPosts() {
    const response = await axios.get<Post[]>(`${this.baseUrl}/posts`);
    return response.data;
  }

  /**
   * @description : get post by id
   * @param id : post id
   * @returns : post
   */
  public async getPostById(id: PostId) {
    const response = await axios.get<Post>(`${this.baseUrl}/posts/${id}`);
    return response.data;
  }

  /**
   * @description : create post
   * @param payload : post object
   * @returns : post
   */
  public async createPost(payload: CreatePostPayload) {
    const response = await axios.post<Post>(`${this.baseUrl}/posts`, payload);
    return response.data;
  }

  /**
   * @description : update post
   * @param id : post id
   * @param payload : post object
   * @returns : post
   */
  public async updatePostById(id: PostId, payload: UpdatePostPayload) {
    const response = await axios.put<Post>(`${this.baseUrl}/posts/${id}`, payload);
    return response.data;
  }

  /**
   * @description : delete post
   * @param id : post id
   * @returns : post
   */
  public async deletePostById(id: number) {
      const response = await axios.delete(`${this.baseUrl}/posts/${id}`);
      return response.data;

  }
}

export default new PostService();
