module.exports = app => {
    const api = app.api.users;

    app
        .route('/v1/users')
        .post(api.create)
        .get(api.list)
        
    app
        .route('/v1/users/:id')
        .put(api.update)
        .delete(api.remove);
}