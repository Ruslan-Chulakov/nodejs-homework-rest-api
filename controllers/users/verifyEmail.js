const { HttpError } = require("../../helpers");
const { User } = require("../../models/user");

const verifyEmail = async (req, res) => {
    const { verificationCode } = req.params;
    const user = await User.findOne({ verificationCode });

    if (!user) {
        throw HttpError(401, 'Email not found')
    }
    await User.findByIdAndUpdate(user._id, { verify: true, verificationCode: '' });

    res.json({
        message: 'Email verified success'
    })
};

module.exports = verifyEmail;
