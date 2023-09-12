import Link from 'next/link';
import classes from './single-card.module.css'
function SingleCard({ text, btnText }) {
   
  return (
    <article className={classes.singleCard}>
      <h2>{text}</h2>
      <Link href={`/${text}`} className={`${classes.cardBtn} btn`}>{btnText}</Link>
    </article>
  );
}

export default SingleCard;
