const config = require("./config.js")

module.exports = {
    
    getMe: (req, res) => {
        if (req.headers["authorization"] == config.correctToken) {
            res.status(200)
            res.send({
                success: true,
                data: {
                    name: "Лебедев Артемий",
                    shortName: "Лебедев А.",
                    department: 0,
                    id: "dc1-la1",
                    companies: [
                        "democompany"
                    ]
                }
            })
        } else {
            res.status(403)
            res.send({
                success: false,
                error: "Unauthorized"
            })
        }
    },
    getCmp: (req, res) => {
        if (req.headers["authorization"] == config.correctToken) {
            res.status(200)
            res.send({
                success: true,
                data: {
                    employees: [
                        {
                            name: "Лебедев Артемий",
                            shortName: "Лебедев А.",
                            department: 0,
                            id: "dc1-la1"
                        },
                        {
                            name: "Лебедев Петр",
                            shortName: "Лебедев П.",
                            department: 0,
                            id: "dc1-lp1"
                        },
                        {
                            name: "Сидоров Иван",
                            shortName: "Сидоров И.",
                            department: 0,
                            id: "dc1-si1"
                        },
                        {
                            name: "Максимова Анна",
                            shortName: "Максимова А.",
                            department: 0,
                            id: "dc1-si1"
                        },
                        {
                            name: "Иванов Сергей",
                            shortName: "Иванов С.",
                            department: 1,
                            id: "dc1-is2"
                        },
                        {
                            name: "Алексеев Игорь",
                            shortName: "Алексеев И.",
                            department: 1,
                            id: "dc1-ai2"
                        },


                    ]
                }
            })
        } else {
            res.status(403)
            res.send({
                success: false,
                error: "Unauthorized"
            })
        }
    }
}