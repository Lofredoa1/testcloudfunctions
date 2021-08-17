module.exports = (req, res) => {
    res.json({
        body: req.body,
        headers: req.body,
        query: req.query,
        cookies: req.cookies,
        method: req.method 
    })
}