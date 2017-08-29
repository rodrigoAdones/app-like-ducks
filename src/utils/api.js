import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com';

const posts = {
    getAll: () => axios.get(`${url}/posts`),
    getOne: id => axios.get(`${url}/posts/posts/${id}`),
    getComments: id => axios.get(`${url}/posts/posts/${id}/comments`)
}

const users = {
    getAll: () => axios.get(`${url}/users`),
    getOne: id => axios.get(`${url}/posts/users/${id}`),
}

export default {
    posts,
    users
}