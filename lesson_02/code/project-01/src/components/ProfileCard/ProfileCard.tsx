import styles from "./ProfileCard.module.css";

interface Props {
  avatar?: string;
  name: string;
  description: string;
}

function ProfileCard(props: Props) {
    const {avatar = "some_link", name, description} = props;
    const fallbackUrl = "https://static.vecteezy.com/system/resources/previews/011/459/669/original/people-avatar-icon-png.png";
  return (
    <div className={styles.profile_card}>
      <img src={avatar || fallbackUrl}  alt={"User avatar" + name} />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ProfileCard;

//rfc

