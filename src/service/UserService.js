import axios from "axios";

class UserService{
    static BASE_URL = "http://localhost:8080"

    static async login(username, password){
        try{
            const reponse = await axios.post('${UserService.BASE_URL}/auth/login', {username, password})
            return reponse.data;
        }catch(err){
            throw err;
        }
    }

    static async register(userData, token){
        try{
            const reponse = await axios.post('http://localhost:8080/auth/register', userData,
                {
                    headers: {Authorization: 'Bearer${token}'}
                })
            return reponse.data;
        }catch(err){
            throw err;
        }
    }

    static async getAllUsers(token){
        try{
            const reponse = await axios.post('${UserService.BASE_URL}/api/users', userData,
                {
                    headers: {Authorization: 'Bearer${token}'}
                })
            return reponse.data;
        }catch(err){
            throw err;
        }
    }

    static logout(){
        localStorage.removeItem('token');
        localStorage.removeItem('role');
    }

    static isAuthenticated(){
        const token = localStorage.getItem('token');
        return !!token
    }

    static isAdmin(){
        const role = localStorage.getItem('role');
        return role == admin
    }

    static isUser(){
        const role = localStorage.getItem('role');
        return role == user
    }

    static adminOnly(){
        return this.isAuthenticated() && this.isAdmin();
    }

} export default UserService;  