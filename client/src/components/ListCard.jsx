import { useNavigate } from "react-router-dom";
import {
  ListCardSection,
  Card,
  CardDay,
  CardDetail,
  CardTitle,
  CardButton,
  CardIcon,
} from "./ListStyled";

export default function ListCard({ info }) {
  const navigate = useNavigate();
  const maxWord = 50;

  const handleGetCardId = (e) => {
    navigate(`/detail/${e.currentTarget.id}`);
  };
  const sliceTitleStr = (str) => {
    return str.slice(0, maxWord);
  };
  return (
    <>
      <ListCardSection>
        <Card id={info.id} onClick={(e) => handleGetCardId(e)}>
          {info.dDay <= 3 ? (
            info.dDay >= 0 ? (
              info.dDay === 0 ? (
                <CardDay imminent="high">D-Day</CardDay>
              ) : (
                <CardDay imminent="high">D-{info.dDay}</CardDay>
              )
            ) : (
              <CardDay imminent="dead">기간만료</CardDay>
            )
          ) : (
            <CardDay imminent="low">D-{info.dDay}</CardDay>
          )}
          {info.title.length > maxWord ? (
            <CardTitle>
              <h3>{sliceTitleStr(info.title)}... </h3>
            </CardTitle>
          ) : (
            <CardTitle>
              <h3>{info.title}</h3>
            </CardTitle>
          )}
          <CardDetail>
            <CardButton>
              <CardIcon>
                <img
                  src={`${process.env.PUBLIC_URL}/images/likesIcon.png`}
                  alt="likes Icon"
                />
              </CardIcon>
              <p>{info.agrees}</p>
            </CardButton>
            <CardButton>
              <CardIcon>
                <img
                  src={`${process.env.PUBLIC_URL}/images/dislikesIcon.png`}
                  alt="dislikes Icon"
                />
              </CardIcon>
              <p>{info.disagrees}</p>
            </CardButton>
            <CardButton>
              <CardIcon>
                <img
                  src={`${process.env.PUBLIC_URL}/images/commentsCntIcon.png`}
                  alt="comments Icon"
                />
              </CardIcon>
              <p>{info.comments}</p>
            </CardButton>
          </CardDetail>
        </Card>
      </ListCardSection>
    </>
  );
}
