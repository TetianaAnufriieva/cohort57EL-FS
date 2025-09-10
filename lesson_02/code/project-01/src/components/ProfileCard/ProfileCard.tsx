import "../ProfileCard/ProfileCard.css";

interface Props {
  avatar: string;
  name: string;
  description: string;
}

function ProfileCard(props: Props) {
    const {avatar, name, description} = props;
  return (
    <div className="profile-card">
      <img src={avatar} alt="User avatar" />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ProfileCard;
