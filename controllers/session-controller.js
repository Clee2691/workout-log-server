const SessionController = (app) => {
    app.get('/api/session/set/:name/:value', setSession);
    // Get specific parameter from session
    app.get('/api/session/get/:name', getSessionParam);
    // Get the whole session
    app.get('/api/session/get', getSessionAll);
    app.get('/api/session/reset', resetSession);
}

const setSession = (req, res) => {
    let name = req.params['name'];
    let val = req.params['value'];

    req.session[name] = val;

    res.send(req.session);
}

const getSessionParam = (req, res) => {
    let name = req.params['name'];
    let val = req.session[name];

    res.send(val);
}

const getSessionAll = (req, res) => {
    res.send(req.session);
}

const resetSession = (req, res) => {
    req.session.destroy();
    res.send(200);
}

export default SessionController;