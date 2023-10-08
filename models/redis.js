class redis {

    constructor(){

        this.redis = require('redis');
        this.client = this.redis.createClient();
    }

    set(key, value){
        this.client.set(key, JSON.stringify(value));
    }
    get(key){
        return this.client.get(JSON.stringify(key));
    }
    del(key){
        this.client.delete(key);
    }

}