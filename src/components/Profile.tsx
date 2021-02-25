import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/59587859?s=460&u=e2c61934c682f1bc9a5d07dfb9cb172bf3cf8b9c&v=4"
        alt="Leandro Cruz"
      />
      <div>
        <strong>Leandro Cruz</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
