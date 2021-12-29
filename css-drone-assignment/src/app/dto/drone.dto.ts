export class Drone {

    private _id: number;
    private _serialNumber: string;
    private _modelNumber: string;
    private _brand: string;
    private _model: string;
    private _ownerIdNumber: string;
    private _ownerFirstName: string;
    private _ownerLastName: string;
    private _ownerContactNumberCountryCode: number;
    private _ownerContactNumber: number;
    private _ownerEmail: string;

    constructor(id: number, serialNumber: string, modelNumber: string, 
        brand: string, model: string, ownerIdNumber: string, ownerFirstName: string,
        ownerLastName: string, ownerContactNumberCountryCode: number, ownerContactNumber: number, ownerEmail: string){

            this._id = id;
            this._serialNumber = serialNumber;
            this._modelNumber = modelNumber;
            this._brand = brand;
            this._model = model;
            this._ownerIdNumber = ownerIdNumber;
            this._ownerFirstName = ownerFirstName;
            this._ownerLastName = ownerLastName;
            this._ownerContactNumberCountryCode = ownerContactNumberCountryCode;
            this._ownerContactNumber = ownerContactNumber;
            this._ownerEmail = ownerEmail;
    }

    public get id(): number {
        return this._id;
    }
    public set id(id: number) {
        this._id = id;
    }

    public get serialNumber(): string {
        return this._serialNumber;
    }
    public set serialNumber(serialNumber: string) {
        this._serialNumber = serialNumber;
    }

    public get modelNumber(): string {
        return this._modelNumber;
    }
    public set modelNumber(modelNumber: string) {
        this._modelNumber = modelNumber;
    }

    public get brand(): string {
        return this._brand;
    }
    public set brand(brand: string) {
        this._brand = brand;
    }

    public get model(): string {
        return this._model;
    }
    public set model(model: string) {
        this._model = model;
    }

    public get ownerIdNumber(): string {
        return this._ownerIdNumber;
    }
    public set ownerIdNumber(ownerIdNumber: string) {
        this._ownerIdNumber = ownerIdNumber;
    }

    public get ownerFirstName(): string {
        return this._ownerFirstName;
    }
    public set ownerFirstName(ownerFirstName: string) {
        this._ownerFirstName = ownerFirstName;
    }

    public get ownerLastName(): string {
        return this._ownerLastName;
    }
    public set ownerLastName(ownerLastName: string) {
        this._ownerLastName = ownerLastName;
    }

    public get ownerContactNumberCountryCode(): number {
        return this._ownerContactNumberCountryCode;
    }
    public set ownerContactNumberCountryCode(ownerContactNumberCountryCode: number) {
        this._ownerContactNumberCountryCode = ownerContactNumberCountryCode;
    }

    public get ownerContactNumber(): number {
        return this._ownerContactNumber;
    }
    public set ownerContactNumber(ownerContactNumber: number) {
        this._ownerContactNumber = ownerContactNumber;
    }

    public get ownerEmail(): string {
        return this._ownerEmail;
    }
    public set ownerEmail(ownerEmail: string) {
        this._ownerEmail = ownerEmail;
    }

}