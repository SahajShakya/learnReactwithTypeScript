import React from 'react';
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Containera } from './components/Containera';
import { LoggedIn } from './components/state/LoggedIn';
import { User } from './components/state/User';
import { Counter } from './components/state/Counter';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';
import { UserContextProvider } from './components/context/UserContext';
import { Usera } from './components/context/Usera';
import { MutableRef } from './components/ref/MutableRef';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';
import { DomRef } from './components/ref/DomRef';
import { RandomNumber } from './components/restriction/RandomNumber';
import { Toast } from './components/temperalliterals/Toast';
import { CustomButton } from './components/html/Button';
import { CustomInput } from './components/html/Input';
import { CustomComponent } from './components/html/CustomComponent';
import { Test } from './components/polymorphic/Test' 
import { Application } from './components/customHook/Application';

function App() {

  const personName =  {
    first: 'Sahaj',
    last: 'Shakya',
  }

  const nameList =  [
    {
      first: 'Sahaj',
      last: 'Shakya',
    },
    {
      first: 'Sahaj',
      last: 'Shakya',
    },
    {
    first: 'Sahaj',
    last: 'Shakya',
  }
  ]

  return (
    <div className="App">
      {/* Prop String Validations */}
      <Greet name="Sahaj"  isLoggedIn={false} />
      <Person name={personName}/>
      <PersonList names={nameList}/>
      <Status status='loading' />
      <br />
      {/* Pass component as Props */}
      <Oscar>
        <Heading>Data here </Heading>
      </Oscar>
      <br />
      {/* Event Props pass event as props */}
      <Button
        handleClick={(event, id) => {console.log('Clicked', event, id)
      }}
      />
      <br />
      {/* Types and Tips Props TypeScript */}
      <Input 
        value='aa' handleChange={(event) => console.log(event)}
      />
      <Containera style={{fontSize: '3rem' }} />
      <br />
      {/* useState Hooks in TS */}
      <LoggedIn />
      {/* TypeAssertion in TS */}
      <User />
      <br />
      {/* userReducer explict Type */}
      <Counter />
      <br />
      {/* Usecontext */}
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      {/* Usecontext for future ref */}
      <UserContextProvider>
        <Usera />
      </UserContextProvider>
      <br />
      {/* Useref in TS */}
      <DomRef />
      <br />
      <MutableRef />
      <br />
      {/* Component as Props */}
      <Private isLoggedIn={true} component={Profile} />
      <br />
      {/* Generics */}
      <List
        items={['A','B','C']}
        onClick={(item) => alert(item)}
        />
        <List
        items={[1,2,3]}
        onClick={(item) => alert(item)}
        />
        <List
        items={[
          {
            first:'Sahaj',
            last: 'Shakya',
          },
          {
            first:'Sahaj',
            last: 'Shakya',
          },
        ]}
        onClick={(item) => alert(item)}
        />
        <br />
        {/* Restricting Props */}
        <RandomNumber value={10} isPostive={true} />
        <br />
        {/* Template Literals and Exclude */}
        <Toast position='center' />
        <br />
        {/* Wrapping HTML Elements */}
        <CustomButton variant='primary'>Custom Button</CustomButton>
        <CustomInput type='text' placeholder='Custom Input'/>
        {/* Extracting Component Prop Types */}
        <CustomComponent name="Sahaj" isLoggedIn={false}/>
        <br />
        {/* Polymorphic Components */}
        <Test test='label' size='lg' htmlFor='someId'>Heading</Test>
        <Test size='md'>Paragraphs</Test>
        <Test size='sm' color='secondary'>Heading</Test>
        <br />
        Custom Hooks 
        <Application />
    </div>
  );
}

export default App;
