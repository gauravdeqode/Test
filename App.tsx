/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,TouchableHighlight,TouchableOpacity
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Controller from './Controller'

type TodoProps={ todo:{todoText:string}, editTodoItem:Function, deleteTodoItem:Function }

export const TodoItem=({ todo, editTodoItem, deleteTodoItem }: TodoProps)=> {
  return (
    <>
        <View className="todoItemText">
          <Text>{todo.todoText}</Text>
        </View>
        <View className="todoItemControls">
          <TouchableHighlight
            className="bg-default"
            onPress={() => editTodoItem(todo)}
          >
            <Text>Edit</Text>
          </TouchableHighlight>
          <TouchableHighlight
            className="bg-danger"
            onPress={() => deleteTodoItem(todo)}
          >
            <Text>Del</Text>
          </TouchableHighlight>
        </View>
      {/* </View> */}
    </>
  );
}

export class MainComp extends Controller {
  
  constructor(props) {
    super(props);
    console.log('constructor of MainComp')
  }

   componentDidMount() {
    console.log('HI componentDidMount of MainComp')

 //   console.log('props......',this.props)
  }
  componentWillMount(): void {
    console.log('HI componentWillMount of MainComp')
  }
  // static getDerivedStateFromProps(){
  //   console.log('HI getDerivedStateFromProps of MainComp')
  // }
//   async componentWillUnmount() {
//     console.log('HI componentWillUnmount of MainComp')
//   }


  render(): React.ReactNode {
    console.log('render maincomp')
   let todoProps:TodoProps={
    editTodoItem:()=>{},
    todo:{ todoText: "go to church" },
  deleteTodoItem:()=>{},
   }
    return (
      <View>
        {TodoItem(todoProps)}
      </View>
    )
  }
}



function App(): React.JSX.Element {
  const backgroundStyle = {
  backgroundColor: Colors.darker
  };

  const MainCompProps={
    onPressBtn:()=>{

    }
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        //barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <MainComp {...MainCompProps}/>
    {/* <MainComp {...MainCompProps}/> */}
      <TouchableOpacity
      onPress={()=>{
        console.log('HOLA TESTING')
      }}
      >
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
