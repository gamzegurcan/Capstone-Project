import { useSelector } from "react-redux";
import { FullBody, Card, CardImg, CardLink, CardText, CardTextBody, CardTitle, CardTextBodyLink } from "../styles/UserCardStyled";
import {FiInstagram, FiTwitter, FiGithub} from 'react-icons/fi';

function UserProfile(props) {
  const {user, favorite, seen} = useSelector((state) =>state);
  return (
    <>
      <FullBody>
        <Card>
          <CardImg src={`${user.avatarUrl}`} />
          <CardTextBody>
            <CardTitle>{user.username}</CardTitle>
            <CardText>Seen List: {seen.count}</CardText>
            <CardText>Favorite List: {favorite.count}</CardText>
          </CardTextBody>
          <CardTextBody>
            <CardText>({user.joinDate})</CardText>
          </CardTextBody>
          <CardTextBodyLink>
            <CardLink href={`${user.socials.instagram}`}><FiInstagram/></CardLink>
            <CardLink href={`${user.socials.twitter}`}><FiTwitter /></CardLink>
            <CardLink href={`${user.socials.github}`}><FiGithub /></CardLink>
          </CardTextBodyLink>
        </Card>
      </FullBody>
    </>
  );
}

export default UserProfile;