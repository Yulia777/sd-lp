export const ajaxJson = (url, method = 'GET', params) => {
    return fetch(url, {
        method: method,
        credentials: 'same-origin',
        headers: {"Content-type": "application/x-www-form-urlencoded"},
        body: 'data=' + JSON.stringify(params)})
        .then((response) => response.json());
};

export const getJson = (url) => {
    return fetch(url, {
        method: 'GET',
        credentials: 'same-origin',
        headers: {"Content-type": "application/x-www-form-urlencoded"}
    }).then((response) => response.json());
};

export const postJson = (url, params) => {
    return ajaxJson(url, 'POST', params);
};