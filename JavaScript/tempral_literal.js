let title = "Heading";
let img = "https://cf-images.assettype.com/nationalherald%2F2026-01-27%2Fhte848m8%2FGa9b3SakAAFrcf.jpg?rect=0%2C0%2C2631%2C1480&auto=format%2Ccompress&fmt=webp&w=120 width=120";
let description = "This is a sample description for the heading.";

let html = `
    <h1>${title}</h1>
    <img src="${img}" alt="Image">
    <p>${description}</p>
`;

document.getElementById("container").innerHTML = html;

let name = `GLA
University`;

console.log(`${name}`);

const product = "Laptops";
const price = 999;
const quantity = 2;

const message = `You bought ${quantity} ${product} for a total price of $${price * quantity}.`;

console.log(message);

const users = [
    {
        id: 1,
        name: "Alice",
        role: "Admin",
        account:  "Premium",
        greet: function() {
            return "Welcome back, super user!";
        }
    },

    {
        id: 2,
        name: "Bob",
        role: "Guest",
        account: null
    },
    {
        id: 3,
        name: "Charlie",
        role: "Member",
        account: null
    }
];

console.log(users[0].greet());

for(let user of users){
    user.role=="Admin" ? console.log(`Welcome back ${user.name} has the role of Admin.`) : console.log(`${user.name} has no role assigned.`);
}


