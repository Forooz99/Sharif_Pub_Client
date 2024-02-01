import React, { useState } from "react"; 
import { View, StyleSheet, Alert } from "react-native"; 
import { Banner, Button, TextInput } from "react-native-paper"; 

const BannerComponent = () => { 
	const [visible, setVisible] = useState(false); 
	const [Email, setEmail] = useState(""); 
	const [phone, setPhone] = useState(""); 

	return ( 
		<View> 
			<Banner 
				visible={visible} 
				actions={[ 
					{ label: "Modify", onPress: () => setVisible(false) }, 
					{ 
						label: "Proceed", 
						onPress: () => { 
							setVisible(false); 
							setEmail(""); 
							setPhone(""); 
							Alert.alert("Thanks for your Confirmation"); 
						}, 
					}, 
				]} 
			> 
				Your details has been captured. It will select in an hour. 
			</Banner> 

			<TextInput 
				style={styles.input} 
				label="Email id"
				value={Email} 
				onChangeText={(text) => setEmail(text)} 
			/> 

			<TextInput 
				style={styles.input} 
				label="Phone"
				value={phone} 
				onChangeText={(text) => setPhone(text)} 
			/> 

			<Button onPress={() => setVisible(true)}>Submit</Button> 
		</View> 
	); 
}; 

export default BannerComponent; 

const styles = StyleSheet.create({ 
	input: { 
		margin: 20, 
	}, 
});
