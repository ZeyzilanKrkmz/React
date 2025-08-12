//import React from 'react'

/*const newLocal = {
  title: "Banana Iced Coffee",
  description: "A banana iced coffee ",
  ingredients: "Coffee, Banana, Ice",
  image: "https://www.chiquita.fr/wp-content/uploads/2022/07/T-220706_DEC_Banana-Coffee-frappe.jpg",
  id: 7,
};
const kahve = newLocal;
*/
// rafce

export type Coffee = {
  id: number;
  title: string;
  description: string;
  ingredients: string | string[];
  image: string;
};

export type Props = {
  kahve: Coffee;
};

const Card = ({ kahve }: Props) => {
  const ingredients =
    typeof kahve.ingredients === "string"
      ? kahve.ingredients.split(", ")
      : kahve.ingredients;

  return (
    <div className="flex flex-col m-4 shadow rounded-xl bg-white max-w-96">
      {/* Card Image */}
      <img className="rounded-t-xl" src={kahve.image} />
      {/* Card Body */}
      <div className="flex flex-col p-4">
        {/* Card title */}
        <span className="text-xl">{kahve.title}</span>
        {/* Card description */}
        <span className="text-base text-slate-500">{kahve.description}</span>
        {/* Badge Container */}
        <span className="flex gap-4">
          {ingredients.map((x) => (
            <span className="text-orange-500 bg-orange-100 px-2 py-0 rounded border border-orange-500">
              {x}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
};

export default Card;