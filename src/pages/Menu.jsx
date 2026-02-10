import MenuCard from "../components/MenuCard";
import sanwidtch from "../assets/sanwidtch.jpg"
import pizza from "../assets/pizza.jpg"
import burger from "../assets/burger.jpg"
import coffee from "../assets/coffee.jpg"
import dessert from "../assets/dessert.jpg"
import drinks from "../assets/drinks.jpg"

const menuItems = [
    {
        url:sanwidtch,
        title: "Sandwiches & Wraps",
        description:`Freshly prepared and generously filled, our sandwiches and wraps are the 
                    perfect blend of convenience and flavor. Built with quality bread, seasoned 
                    proteins, crisp vegetables, and house sauces, they deliver satisfying taste 
                    without the wait. Grilled, toasted, or freshly wrapped — each option is designed 
                    for quick meals, productive breaks, and on-the-go energy.`
    },
    {
        url:pizza,
        title: "Pizza",
        description:`Our pizzas combine artisan crusts, rich sauces, premium toppings, 
        and perfectly melted cheese to create slices worth savoring. Each pizza is baked 
        to achieve the ideal balance of crispy base and gooey topping, delivering warmth, 
        aroma, and flavor in every bite. Whether you love classic combinations or fully loaded
         creations, our pizzas are made to share — or enjoy all by yourself.`
    },
    {
        url:burger,
        title: "Burgers",
        description:`Our burgers are built like great systems — layered, powerful, and engineered 
        for satisfaction. We use juicy grilled patties, fresh vegetables, melted cheese, and 
        signature sauces stacked inside perfectly toasted buns. Every burger is balanced in texture
         and flavor, delivering a bold bite every time. From classic builds to spicy upgrades and 
         double-patty power stacks, this is comfort food designed to be unforgettable.`
    },{
        url:coffee,
        title: "Coffee & Hot Drinks",
        description:`Fuel your day and awaken your creativity with our carefully crafted hot 
        beverages. From rich, aromatic espressos to velvety lattes and frothy cappuccinos, each 
        cup is brewed to perfection using premium coffee beans and precise techniques. Whether 
        you’re debugging code, brainstorming your next project, or simply taking a well-deserved 
        break, our coffees and hot drinks offer the perfect balance of warmth, flavor, and energy. 
        Experience the art of coffee, where every sip inspires focus, comfort, and a spark of 
        innovation.`
    },{
        url:dessert,
        title: "Desserts",
        description:`Freshly prepared and generously filled, our sandwiches and wraps are the 
                    perfect blend of convenience and flavor. Built with quality bread, seasoned 
                    proteins, crisp vegetables, and house sauces, they deliver satisfying taste 
                    without the wait. Grilled, toasted, or freshly wrapped — each option is designed 
                    for quick meals, productive breaks, and on-the-go energy.`
    },
    {
        url:drinks,
        title: "Cold Drinks & Shakes",
        description:`Cool, refreshing, and full of flavor — our cold drinks and signature shakes 
        are blended to deliver instant refreshment and indulgence. From frosty coffee blends to 
        rich chocolate shakes and fruit-infused smoothies, each drink is crafted with premium 
        ingredients and smooth textures. Perfect for relaxing breaks, creative sessions, or casual 
        hangouts, these chilled creations bring sweetness, energy, and satisfaction in every glass.`
    }
]


export default function Menu () {
    return(
        <div id="menu-section">
            <div className="flex flex-col">
                <div className="flex justify-center ">
                    <text className="p-2 mt-10 lg:text-5xl  text-xl tracking-widest font-mono text-gray-50 border-amber-50 bg-red-800">DevMocha</text>
                    <text className="p-2 mt-10 lg:text-5xl text-xl tracking-wide font-mono">Delights</text>
                </div>

                <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 flex-1 m-4 gap-2 gap-y-8">
                    {
                        menuItems.map((item,index) => {
                            return(
                                <MenuCard key={index}
                                imgUrl={item.url}
                                title={item.title}
                                description={item.description}
                                 />
                            )
                        })
                    }
                    
                </div>
            </div>
        </div>
    )
}