import {Icon} from 'react-native-elements';
import { mdiPlusCircleOutline } from '@mdi/js';
const AddIcon = () => {
  return (
    <Icon name={mdiPlusCircleOutline}/>
  )
};

const RemoveIcon = () => {
  <Icon name={'remove_circle_outline'}/>
};

export default {RemoveIcon, AddIcon};