import axios from "axios";

export default axios.create ({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: 'cbc45a26670743cd91e99de7775c3413'
    }
})

