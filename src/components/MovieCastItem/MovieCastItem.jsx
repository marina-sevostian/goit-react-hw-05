import s from './MovieCastItem.module.css';

const MovieCastItem = ({ data: { profile_path, name } }) => {
  const urlImage = profile_path
    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
    : 'https://via.placeholder.com/350x500?text=No+Image';
  return (
    <div>
      <img src={urlImage} alt={name} width={200} height={300} />
      <h4 className={s.title}>{name}</h4>
    </div>
  );
};

export default MovieCastItem;
