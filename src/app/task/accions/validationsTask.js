const yup = require("yup");

exports.validateFieldsCraete = async (req, res, next) => {
    const linkSchema = yup.object({
        body: yup.object({
            title: yup.string().required(),
            description: yup.string().required(),
            expiration_date: yup.date().required()
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

exports.validateFieldsUpdate = async (req, res, next) => {
    const linkSchema = yup.object({
        body: yup.object({
            title: yup.string().required(),
            description: yup.string().required(),
            expiration_date: yup.date().required(),
            id: yup.number().required(),
            status: yup.string().required()
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