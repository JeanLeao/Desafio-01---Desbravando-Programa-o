import { Container, TitleFirst, Paragrafo,Containerleft } from "./Firstlayoutstyle";
import './first.css';
import caraestiloso from '.././images/caraestiloso.png';
function Firstlayout() {

  return (
    <Container>
        <Containerleft>

        <TitleFirst>Fashion that reflects what your idendity is.....</TitleFirst>
        <Paragrafo>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,</Paragrafo>
        <button className="button-layout">Explore agora</button>
        
        </Containerleft>
        <div className="firstAuto">
            <div className="bolinha">
              <img src={caraestiloso} style={{height: '300px', marginTop: '-64px', marginLeft: '10px'}}/>
            </div>
        </div>
    </Container>

  );
}

export default Firstlayout;
