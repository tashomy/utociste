import * as api from '../api/index'

export const fetchPosts = async () => {
    try {
        const response = await api.fetchPosts();
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
}
export const createPost = async (data) => {
    try {
        const response = await api.createPost(data);
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
}
