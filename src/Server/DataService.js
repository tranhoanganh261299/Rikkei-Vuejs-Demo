import http from '../http-common'

class DataService{
    getAll(){
        return http.get('api/city');
    }
}
export default new DataService