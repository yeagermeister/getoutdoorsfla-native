import React, { useState } from "react";
// import '../../form.css';

function Submit() {
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [springName, setSpringName] = useState('');
    const [description, setDescription] = useState('');
    const [camping, setCamping] = useState('');
    const [pets, setPets] = useState('');
    const [statepark, setStatepark] = useState('');
    const [park, setPark] = useState('');
    const [beach, setBeach] = useState('');
    const [swimmingHole, setSwimmngHole] = useState('');
    const [spring, setSpring] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'springName') {
            setSpringName(inputValue);
        }
        if (inputType === 'description') {
            setDescription(inputValue);
        } 
        if (inputType === 'camping'){
            setCamping(inputValue);
        }
        if (inputType === 'pets'){
            setPets(inputValue);
        }
        if (inputType === 'statepark'){
            setStatepark(inputValue);
        }
        if (inputType === 'park'){
            setPark(inputValue);
        }
        if (inputType === 'beach'){
            setBeach(inputValue);
        }
        if (inputType === 'swimmingHole'){
            setSwimmngHole(inputValue);
        }
        if (inputType === 'spring'){
            setSpring(inputValue);
        }
        if (inputType === 'zipcode'){
            setZipcode(inputValue);
        }
      };

      const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
    
        // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
        if (!zipcode || !springName || !description) {
          setErrorMessage('Site submission requires a name, description, and the zipcode');
          // We want to exit out of this code block if something is wrong so that the user can correct it
          return;
        }
        // If everything goes according to plan, we want to clear out the input after a successful registration.
        setSpringName('');
        setDescription('');
        setCamping('');
        setPets('');
        setStatepark('');
        setPark('');
        setBeach('');
        setSwimmngHole('');
        setSpring('');
        setZipcode('');
      };

      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Please enter the information below to add a new location to the site.</Text>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <Text>Location Name:</Text>
              <TextInput
                value={springName}
                onChangeText={(value) => handleInputChange(value, 'springName')}
                style={{ borderWidth: 1, borderColor: 'black', padding: 5 }}
              />
              <Text>Description:</Text>
              <TextInput
                value={description}
                onChangeText={(value) => handleInputChange(value, 'description')}
                multiline={true}
                numberOfLines={4}
                style={{ borderWidth: 1, borderColor: 'black', padding: 5 }}
              />
              <Text>Zicode:</Text>
              <TextInput
                value={zipcode}
                onChangeText={(value) => handleInputChange(value, 'zipcode')}
                keyboardType="numeric"
                style={{ borderWidth: 1, borderColor: 'black', padding: 5 }}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text>Please check all that apply</Text>
              <CheckBox
                value={camping}
                onValueChange={() => handleInputChange(null, 'camping')}
                title="Camping Allowed?"
              />
              <CheckBox
                value={pets}
                onValueChange={() => handleInputChange(null, 'pets')}
                title="Pets Allowed?"
              />
              <CheckBox
                value={statepark}
                onValueChange={() => handleInputChange(null, 'statepark')}
                title="Statepark?"
              />
              <CheckBox
                value={park}
                onValueChange={() => handleInputChange(null, 'park')}
                title="City/County Park?"
              />
              <CheckBox
                value={beach}
                onValueChange={() => handleInputChange(null, 'beach')}
                title="Beach?"
              />
              <CheckBox
                value={swimmingHole}
                onValueChange={() => handleInputChange(null, 'swimmingHole')}
                title="Swimming Hole?"
              />
              <CheckBox
                value={spring}
                onValueChange={() => handleInputChange(null, 'spring')}
                title="Spring?"
              />
            </View>
          </View>
          <Button title="Submit" onPress={handleFormSubmit} />
          {errorMessage && (
            <View>
              <Text style={{ color: 'red' }}>{errorMessage}</Text>
            </View>
          )}
        </View>
      );}

export default Submit;
