VK.init({
    apiId: 6769083
});

function auth() {
    return new Promise((resolve, reject) => {
        VK.Auth.login(function(response) {
            if (response.session) {
                console.log('всё ок!');
                resolve(response);
            } else {
                alert('Не удалось авторизоваться');
                reject();
            }
        }, 2);
    })
    
}

function callAPI(method, params) {
    params.v = '5.76';

    return new Promise((resolve, reject) => {
        VK.api(method, params, (data) => {
            if (data.error) {
                reject(data.error);
            } else {
                resolve(data.response);
            }
        });
    })
}

auth()
    .then(() => {
        return callAPI('friends.get', { fields: 'photo_100' });
    })
    .then(friends => {
        console.log(friends);
        
})