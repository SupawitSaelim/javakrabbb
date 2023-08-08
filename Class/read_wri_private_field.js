class Ape {
    #species = "Homo";
    
    getSpecies(){
        return this.#species
    }
    setSpecies(species) {
        this.#species = species;
    }
}

const monkey = new Ape();
monkey.setSpecies("supawit");
console.log(monkey.getSpecies());