/**
 * @format
 */

import 'react-native';
import React from 'react';
import App, { MainComp, TodoItem } from '../App';
import { shallow,configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Note: test renderer must be required after react-native.
import renderer,{} from 'react-test-renderer';

const findElement =(treeArr,testID)=>{ 
  const isDefined = undefined;
  for(index in treeArr){
    if(treeArr[index].props.testId == testID){
      isDefined = true;
    }
  }
  return isDefined;
}

it('Identify element by testID',()=>{
  const tree = renderer.create(<MainComp/>).toJSON();
  expect(findElement(tree.children,'EmailTextInput')).toBeDefined()
})

// configure({ adapter: new Adapter() });

// const screenProps = {
//   navigation: undefined,
//   id: ''
// }

// test('renders without crashing', () => {
//   const a =shallow(<MainComp />);
//   console.log('jiooooooooooooooooooooooooooooooo',a)
// });

// test('renders MainComp components', () => {
//   const wrapper = shallow(<App />);
//   expect(wrapper.find('MainComp')).toHaveLength(2);
//   wrapper.find("TouchableOpacity").at(0).props().onPress()
// });

// test('checking components states and methods', () => {
//   const wrapper = shallow(<MainComp />);
//   const instance = wrapper.instance();
//   instance.setState({token:""})
//   instance.hola()
//   instance.componentDidMount()
//   instance.componentWillUnmount()
//   //instance.props.onPressBtn()
//   //instance.setState({enableSignUp: true})
//   // @ts-ignore
// });

// const repostAPI = new Message(
//   getName(MessageEnum.RestAPIResponceMessage)
// );
// repostAPI.addData(
//   getName(MessageEnum.RestAPIResponceDataMessage),
//   repostAPI.messageId
// );
// // const apiRequestCallId = message.getData(getName(MessageEnum.RestAPIResponceDataMessage))
// repostAPI.addData(
//   getName(MessageEnum.RestAPIResponceSuccessMessage),
//   responseJson
// );
// instance.getQuizzesListRequestId = repostAPI.messageId;
// runEngine.sendMessage("Unit Test", repostAPI);

