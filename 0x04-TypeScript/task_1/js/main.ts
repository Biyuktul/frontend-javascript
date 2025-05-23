// firstName(string) and lastName(string). These two attributes should only be modifiable when a Teacher is first initialized
// fullTimeEmployee(boolean) this attribute should always be defined
// yearsOfExperience(number) this attribute is optional
// location(string) this attribute should always be defined
// Add the possibility to add any attribute to the Object like contract(boolean) without specifying the name of the attribute

interface Teacher{
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    Location: string;
    [key: string]: any;
}