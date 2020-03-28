import React from "react";
import {Button} from 'react-native-elements';

const StyledButton = (props) => {
  const {icon, buttonStyle, titleStyle, onClick} = props;
  return (
    <Button raised
            type="outline"
            icon={icon}
            containerStyle={{borderRadius: '60%'}}
            buttonStyle={buttonStyle}
            titleStyle={titleStyle}
            onClick={onClick}/>
  )
};

export default StyledButton;