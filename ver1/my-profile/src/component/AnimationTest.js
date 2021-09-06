import React,{Component} from "react";
import styled from "styled-components";

const MainTextDivision = styled.div`
    position : absolute;
    width : 100%;
    height : 100%;
    background-color:black;
`;
const Shape = styled.div`
    background: #457b9d
    border-radius: 10px
    width: 200px
    height: 300px
    transform: translateZ(50px) scale(.85)
    opacity: 0.8
  `;

const Shape2 = styled.div`
    position: absolute
    top: 0
    left: 0
    z-index: 2
    width: 250px
    height: 350px
    transform: translateZ(150px) translateX(-27px) translateY(-26px) scale(.55)
    border: 3px solid rgba(255, 255, 255, 1)
    background: #a8dadc
    opacity: 0.3
    border-radius: 8px
 `;

const Shape3 = styled.div`
    position: absolute
    top: 0
    left: 0
    z-index: 2
    width: 150px
    height: 250px
    background: pink
    opacity: 0.5
    border-radius: 8px
    border: 3px solid hotpink
    transform: translateZ(200px) translateX(25px) translateY(25px) scale(.65)
`;

const Wrapper = styled.div`
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%) perspective(600px) rotateY(20deg) rotateX(10deg)
  background: #1d3557
  transform-style: preserve-3d
  width: 200px
  height: 300px
  border-radius: 10px
  `;

class AnimationTest extends Component {
  constructor(props) {
    super(props);
    this.init();
  }
  init() {
    this.state = {
      offsetX: '',
      offsetY: '',
      friction: 1 / 32
    }
    this.mouseMove = this.mouseMove.bind(this);
  }
  componentDidMount() {
    document.addEventListener('mousemove', this.mouseMove);
  }
  componentWillUnmount() {
    document.removeEventListener('mousemove', this.mouseMove);
  }
  
  mouseMove(e) {
    let followX = (window.innerWidth / 2 - e.clientX);
    let followY = (window.innerHeight / 2 - e.clientY);

    let x = 0,
        y = 0;
    x +=( (-followX - x) * this.state.friction);
    y += (followY - y) * this.state.friction;
    this.setState({
      offsetX: x,
      offsetY: y
    });
  }
  render() {
    let offset = {
      transform: `translate(-50%, -50%) perspective(600px)
                  rotateY(${this.state.offsetX}deg)
                  rotateX(${this.state.offsetY}deg)`
                 }

    return (
      <MainTextDivision id="MainTextDivision">
      <Wrapper id='wrapper' style={offset}>
        <Shape>
        </Shape>
        <Shape2>
        </Shape2>
        <Shape3>
        </Shape3>
        <p>Move your mouse or finger around</p>
      </Wrapper>
      </MainTextDivision>
    )
  }

}
export default AnimationTest;