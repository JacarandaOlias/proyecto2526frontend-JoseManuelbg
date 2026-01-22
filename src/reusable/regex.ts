export const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
)

export const validPassword = new RegExp('^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$');

export const name = new RegExp("^[A-Za-z]+(\s+[A-Za-z]+)?$")