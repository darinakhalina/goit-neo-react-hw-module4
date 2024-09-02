import css from './LoadMoreBtn.module.css';

function LoadeMoreButton({ onClick }) {
  return (
    <button className={css['load-more-button']} onClick={onClick}>
      Load more
    </button>
  );
}

export default LoadeMoreButton;
