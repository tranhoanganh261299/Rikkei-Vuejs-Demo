import axios from "axios";

export default axios.create({
    /* baseURL: 'https://thongtindoanhnghiep.co', */
    baseURL: 'http://localhost:8080/',
    headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, PUT, GET, DELETE, PATH, OPTIONS',
        'Access-Control-Allow-Headers': "{$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}",
        'X-Requested-With': 'XMLHttpRequest',
      }
})