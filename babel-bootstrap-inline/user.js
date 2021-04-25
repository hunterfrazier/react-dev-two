// export module utiltiies - how to

export function utilities (person) {
    function showName() {
        console.log(person.name);
    }
    function showAge() {
        console.log(person.age);
    }
    return {
        showName: showName,
        showAge: showAge
    }
}
