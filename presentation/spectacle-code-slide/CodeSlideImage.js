const React = require('react');
const {Image} = require('spectacle');

const style = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
};

export class CodeSlideImage extends React.Component {
  render() {
    return (
      <Image src={this.props.src} style={style}/>
    );
  }
}
