import axios from "axios";

const BASE_URL = 'http://localhost:5000/api/'
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjQ2NmNlZWJhZWQyNDg0YTczZTlhNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MzEwOTI4NCwiZXhwIjoxNjczMzY4NDg0fQ.fRu-7xpowHT8GKAzCxf1T8Txj0aUEvIfgfweQGb_Ftk'

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` }
})