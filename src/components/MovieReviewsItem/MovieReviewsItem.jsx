import s from './MovieReviewsItem.module.css';

const MovieReviewsItem = ({
  data: { author_details, content, created_at },
}) => {
  const urlImage = author_details.avatar_path
    ? `https://image.tmdb.org/t/p/w500/${author_details.avatar_path}`
    : 'https://via.placeholder.com/350x500?text=No+Image';

  const date = new Date(created_at);
  const usFormattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className={s.reviewCard}>
      <img
        className={s.avatar}
        src={urlImage}
        alt={author_details.username}
        width={80}
        height={80}
      />
      <div className={s.text}>
        <h4 className={s.subtitle}>{author_details.username}</h4>
        <p className={s.descr}>{content}</p>
        <p className={s.descr}>{usFormattedDate}</p>
      </div>
    </div>
  );
};

export default MovieReviewsItem;
