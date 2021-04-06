import _axios from '../plugins/axios';

export default {
    getUpcoming() {
        return _axios.get('/movie/upcoming?api_key=')
    },
}