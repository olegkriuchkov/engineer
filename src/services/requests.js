import http from './http';

class Requests {
    static getAsteroidById = async (id) => {
        return http.get(`/${id}?api_key=ycvEDICfItefId5TgMv6P0rTHBfpaLsLqrgkjuKe`);
    }

    static getRandomAsteroid = async (page=0) => {
        return http.get(`/browse?page=${page}&api_key=ycvEDICfItefId5TgMv6P0rTHBfpaLsLqrgkjuKe`);
    }
}

export default Requests;