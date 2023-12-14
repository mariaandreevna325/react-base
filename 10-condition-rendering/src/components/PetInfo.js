function PetInfo({animal, age, hasPet}){
    return hasPet ? (
    <h1>
        My {animal} is {age} years old
    </h1>
    ) : (
        <h1>i dont have an animal</h1>
    );
}

export default PetInfo;