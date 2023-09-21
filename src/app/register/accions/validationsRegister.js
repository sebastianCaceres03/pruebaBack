const yup = require("yup");

exports.validateFields = async (req, res, next) => {
    const linkSchema = yup.object({
        body: yup.object({
            name: yup.string().required(),
            email: yup.string().email().required(),
            password: yup.string().required(),
        }),
    });
    try {
        await linkSchema.validate({
            body: req.body,
        });
        next();
    } catch (err) {
        console.log(err);
        return res.status(500).json({ type: err.name, message: err.message });
    }
}