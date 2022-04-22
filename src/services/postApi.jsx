import axios from 'axios';

const api = axios.create({
  baseURL: ' https://api.jungledevs.com',
});

export async function postUser(objData) {
  try {
    const postData = await api.post('api/v1/challenge-newsletter', objData);
    return postData;
  } catch (error) {
    console.error('error: ', error);
  }
  return null;
}

export default postUser;
