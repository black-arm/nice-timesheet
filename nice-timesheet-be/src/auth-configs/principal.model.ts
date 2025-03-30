// Questo model, conterrà il 'Principal' relativo a questa app.
// Ossia un qualunque utente del Timesheet
export class TimesheetUser {

    constructor(private _id: string, private _email: string) {
    }

    get id(): string {
        return this._id;
    }

    get email(): string {
        return this._email;
    }
}

