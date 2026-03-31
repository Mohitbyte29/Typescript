const favHobbies : (hobby:any) => void = (hobby: string| string[]) : any => {
    //! return hobby.map(() : void => {}); ---> will give an error
    if(typeof hobby === "object" && Array.isArray(hobby)){
        return hobby.map((): void => {});
    } else{
        console.log(hobby);
    }
}

favHobbies("Coding");
favHobbies(["Coding", "Singing", "Chess"]);

