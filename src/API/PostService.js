import axios from 'axios';

export default class PostService {
  static async getAll() {
    const response = await axios.get(
      'https://jsonplaceholder22.typicode.com/posts',
    );
    return response.data;
  }
}
