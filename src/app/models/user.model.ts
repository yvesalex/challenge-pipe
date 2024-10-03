export interface UserModel{
    address: {
        geolocation: {
            lat: number;
            long: number;
        };
        city: string;
        street: string;
        number: number;
        zipcode: string;
    };
    id: 1;
    email: string;
    username: string;
    password: string;
    name: {
        firstname: string;
        lastname: string;
    };
    phone: string;
}