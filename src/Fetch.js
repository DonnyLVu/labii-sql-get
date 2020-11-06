import fetch from 'superagent';

const URL = 'https://dry-castle-57746.herokuapp.com/';

export async function fetchRangers() {
    try {
    const response = await fetch.get(`${URL}rangers`);
        return response.body;
    } catch(err) {
        throw err;
    }
}

export async function fetchRanger(someId) {
    try {
        const response = await fetch.get(`${URL}rangers/${someId}`);
        return response.body;
    } catch(err) {
        throw err;
    }
}

export async function fetchColors() {
    try {
        const response = await fetch.get(`${URL}colors`);
        return response.body;
    } catch(err) {
        throw err;
    }
}

export async function createRanger(newRangers) {
    try {
        await fetch
        .post(`${URL}rangers`)
        .send(newRangers);
        
        return;
    } catch(err) {
        throw err;
    }
}

export async function updateRanger(newCreateRanger, newRangers) {
    try {
        await fetch
        .put(`${URL}rangers/${newCreateRanger}`)
        .send(newRangers);
        
        return;
    } catch(err) {
        throw err;
    }
}


export async function deleteRangers(newCreateRanger) {
    try {
        await fetch.delete(`${URL}rangers/${newCreateRanger}`);
        
        return;
    } catch(err) {
        throw err;
    }
}