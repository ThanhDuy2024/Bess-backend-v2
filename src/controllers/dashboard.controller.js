const dashboardController = async (req, res) => {
    try {
        res.status(200).json({
            code: "success",
            message: "This is dashboard!"
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            code: "error",
            message: "bad request"
        })
    }
}

module.exports = {
    dashboardController
}