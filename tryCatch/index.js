export default function UserError() {
    this.throwErrorLogin = function() {
        throw new Error('Invalid username & password');
    }
    return this
}