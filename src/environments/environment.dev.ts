const environments = [{
    'name' : 'local',
    'host' : 'localhost',
    'port' : '4200',
    //'port' : '80',
    'apibase' : 'http://localhost'
}];

const currentEnvironment = environments.find((item : any) => {
    return item.host === window.location.hostname && (item.port === window.location.port);
});

const host = currentEnvironment ? currentEnvironment.apibase : null;

if(!host){
    console.warn('Environment Settings not found',window.location.hostname,window.location.port);
}

export const environment = {
    appTitle : "ENRoot Farming",
    production : false,
    host : host,
    api : {
        getVegetables : `${host}/api/items`,
        placeOrder : `${host}/api/placeOrder`
    }
}