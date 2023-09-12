import SingleCard from "./single-card";
import classes from './cards.module.css'
function Cards() {
  const categories = [
    {
      id: 1,
      text: "Generate your AI photos now for free",
      btnText: "Generate now",
    },
    {
      id: 2,
      text: "Restore your photos now for free",
      btnText: "Restore now",
    },
    {
      id: 3,
      text: "Remove backgrounds using AI now for free",
      btnText: "Remove now",
    },
  ];
  return <section className={`${classes.cards} section`}>
    {categories.map((item)=> <SingleCard key={item.id} {...item}/>)}
  </section>;
}

export default Cards;
