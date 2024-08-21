export const createUser = (req,res) => {
    const { name } = req.params;
    res.json({ user: name });
};

export const getUsers = (req,res) => {
    const { name } = req.params;
    res.json({ user: "hola" });
};

export const getUser = (req,res) => {
    const { name } = req.params;
    res.json({ user: name });
};

export const updateUser = (req,res) => {
    const { name } = req.params;
    res.json({ user: name });
};

export const deleteUser = (req,res) => {
    const { name } = req.params;
    res.json({ user: name });
};
