import fetch from 'superagent';

const URL = 'https://dry-castle-57746.herokuapp.com/';

export async function fetchRangers() {
    try {
        const response = await fetch.get(`${URL}rangers`);
        return response.body;
    } catch (err) {
        throw err;
    }
}

export async function fetchRanger(someId) {
    try {
        const response = await fetch.get(`${URL}rangers/${someId}`);
        return response.body;
    } catch (err) {
        throw err;
    }
}

export async function fetchColors() {
    try {
        const response = await fetch.get(`${URL}colors`);
        return response.body;
    } catch (err) {
        throw err;
    }
}

export async function createRanger(newRangers) {
    try {
        await fetch
            .post(`${URL}rangers`)
            .send(newRangers);

        return;
    } catch (err) {
        throw err;
    }
}

export async function updateRanger(someId, newRangers) {
    try {
        await fetch
            .put(`${URL}rangers/${someId}`)
            .send(newRangers);

        return;
    } catch (err) {
        throw err;
    }
}


export async function deleteRangers(someId) {
    try {
        await fetch.delete(`${URL}rangers/${someId}`);

        return;
    } catch (err) {
        throw err;
    }
}