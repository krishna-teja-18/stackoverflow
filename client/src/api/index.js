import axios from 'axios';

const API=axios.create({baseURL:'https://stackoverflow.herokuapp.com'});

// API.interceptors.request.use((req) => {
//     if (localStorage.getItem("Profile")) {
//       req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem("Profile")).token}`;
//     }return req;
// });

export const logIn=(loginData) => API.post('/users/login', loginData);
export const signUp=(loginData) => API.post('/users/signup', loginData);

export const postQuestion=(questionData) => API.post('/questions/ask', questionData);
export const getAllQuestions=() => API.get('/questions/get');
export const deleteQuestion=(id) => API.delete(`/questions/delete/${id}`)
export const voteQuestion=(id, value, userId) => API.patch(`/questions/vote/${id}`, {value, userId})

export const postAnswer=(id, noOfAnswers, answerBody, userAnswered, userId) => API.patch(`/answers/post/${id}`, {noOfAnswers, answerBody, userAnswered, userId})
export const deleteAnswer=(id, answerId, noOfAnswers) => API.patch(`/answers/delete/${id}`, {answerId, noOfAnswers})

export const getAllUsers=() => API.get('/users/getallusers')
export const updateProfile=(id, updateData) => API.patch(`/users/update/${id}`, updateData)