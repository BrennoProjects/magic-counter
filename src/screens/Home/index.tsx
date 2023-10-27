import { type CSSProperties, type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import MagicCounterLogo from '../../assets/Logo';
import Button from '../../components/button';
import Text from '../../components/Text';
import Title from '../../components/Title';
import * as S from './style';
import { useTheme } from 'styled-components';
import LinkedinSvg from '../../assets/LinkedinSvg';
import GithubSvg from '../../assets/GithubSvg';
import EmailSvg from '../../assets/EmailSvg';

const Home: FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const keysStyle: CSSProperties = {
    color: theme.green,
    fontSize: '30px',
    fontWeight: '600',
    margin: '0 5px'
  };
  const spanStyle: CSSProperties = {
    color: theme.green,
    fontSize: '25px'
  };

  const CustomLink = (children: JSX.Element, href: string): JSX.Element => {
    return (
      <a
      href={href}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        width: '50px',
        height: '50px',
        backgroundColor: '#1a1a28',
        borderRadius: '100%',
        margin: '15px',
        textDecoration: 'none'
      }}
      target="_blank"
      rel="noreferrer"
      >
        {children}
      </a>
    );
  };

  return (
    <S.WrapperHome>
      <MagicCounterLogo />
      <S.WrapperTextButton>
        <Title margin="0 0 20px 0">Magic Counter</Title>
        <Button onClick={() => navigate('/setup-life')}>
          <Text>Start</Text>
        </Button>
      </S.WrapperTextButton>
      <div style={{
        position: 'absolute',
        bottom: 0,
        background: 'linear-gradient(0deg, rgba(115,65,255,0.29735644257703087) 0%, rgba(0,0,0,0) 100%)',
        width: '100%'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
         {CustomLink(<Text fontSize='20px'>{'{B}'}</Text>, 'https://brenno.dev')}
         {CustomLink(<GithubSvg />, 'https://github.com/brennoAmaral')}
         {CustomLink(<LinkedinSvg />, 'https://www.linkedin.com/in/brennoAmaral/')}
         {CustomLink(<EmailSvg />, 'mailto:brenno.dev@outlook.com')}
        </div>
        <a
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            padding: '10px',
            borderRadius: '100%'
          }}
        >
          <span style={keysStyle}>{'{ '}</span>
          <Text color={theme.white} fontSize="25px" bold>
            Brenno
          </Text>
          <span style={{
            ...spanStyle,
            fontWeight: 'bold'
          }}>
            Dev
          </span>
          <span style={keysStyle}>{' }'}</span>
          <span style={{
            ...spanStyle,
            margin: '0 10px'

          }}>
            ©
          </span>
          <span style={{
            ...spanStyle,
            fontSize: '25px',
            margin: '0 10px'

          }}>
            2023
          </span>
        </a>
      </div>
      {/* <S.WrapperAboutUs>
        <Button
          onClick={() => navigate('/about-us')}
          border={false}
          width={'auto'}
          height={'auto'}
        >
          <S.AboutUs>About us</S.AboutUs>
        </Button>
      </S.WrapperAboutUs> */}
    </S.WrapperHome>
  );
};

export default Home;
