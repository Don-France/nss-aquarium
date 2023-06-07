const database = {
    fish: [
        {
            species: "Tuna",
            length: 10,
            name: "Charlie",
            harvestLocation: "Buffalo River",
            diet: "Peanut butter and jelly sandwiches"
        },

        {
            species: "Salmon",
            length: 5,
            name: "Oscar",
            harvestLocation: "Percy Priest Lake",
            diet: "Smoked Brisket"
        },
        {
            species: "Salmon",
            length: 5,
            name: "Oscar",
            harvestLocation: "Percy Priest Lake",
            diet: "Smoked Brisket"
        },
        {
            species: "Salmon",
            length: 5,
            name: "Oscar",
            harvestLocation: "Percy Priest Lake",
            diet: "Smoked Brisket"
        },
    ]
}
export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}