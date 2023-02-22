const { tables } = require("../constants")
const { getBannerDeta } = require("../lib/db")

const getbannerDetails = async (req, res) => {
    try {
        await getBannerDeta(tables.tablebanner).then((responce) => {
            res.status(200).json({ msg: "Success", success: true, deta: responce })
        }).catch((error) => {
            res.status(400).json({ msg: "Something is wrong", success: false, error: error })
        })
    } catch (error) {
        res.status(400).json({ msg: "Something is wrong", success: false, error: error })
    }
}

module.exports = { getbannerDetails }