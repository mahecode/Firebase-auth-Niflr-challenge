import React, { Component } from 'react';
import { View, Text, StyleSheet, YellowBox, ScrollView } from 'react-native';
import { Button, TextInput, Snackbar, ActivityIndicator, Colors, HelperText } from 'react-native-paper';
import * as firebase from 'firebase';


YellowBox.ignoreWarnings(['Setting a timer']);

class RegisterScreen extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        message: '',
        loading: false,
        visible: true,
        isNameEmpty: false,
        isEmailEmpty: false,
        isPasswordEmpty: false,
        isConfirmPasswordEmpty: false,
        isPhoneEmpty: false,
    }


    onSignupButtonPress = () => {
        const { name, email, password, confirmPassword, phone } = this.state;
        switch(''){
            case name:
                this.setState({isNameEmpty: true});
            case email:
                this.setState({isEmailEmpty: true});
                if(email){
                    this.setState({isEmailEmpty: false});
                }
            case password:
                this.setState({isPasswordEmpty: true});
                if(password){
                    this.setState({isPasswordEmpty: false});
                }
            case confirmPassword:
                this.setState({isConfirmPasswordEmpty: true});
                if(password){
                    this.setState({isConfirmPasswordEmpty: false});
                }                
            case phone: 
                this.setState({isPhoneEmpty: true});
                if(phone){
                    this.setState({isPhoneEmpty: false});
                }
                break;
        }
        this.setState({ message: '', loading: true , visible: true});
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                firebase.database()
                    .ref('UsersList/')
                    .push({
                        name,
                        email,
                        phone
                    })
                    .then(res => {
                        console.log(JSON.stringify(res));
                    })
                    .catch(e => {
                        console.log(JSON.stringify(e));
                    });
                this.setState({ message: 'Successfully Registered', loading: false })
                this.props.navigation.navigate('Main');
            })
            .catch(() => {
                this.setState({ message: 'Registration Failed !', loading: false });
            })
    }

    onSigninPress = () => {
        this.props.navigation.navigate('Login');
    }
    renderButtonOrLoading = () => {
        if (this.state.loading) {
            return <ActivityIndicator style={styles.button} size={60} animating={true} color={Colors.purple800} />
        }
        return <View>
            <Button
                style={styles.button}
                mode="contained"
                onPress={() => this.onSignupButtonPress()}
            >Sign up</Button>
            <Button
                style={styles.textButton}
                mode="text"
                onPress={() => this.onSigninPress()}>Log in here</Button>
        </View>
    }

    renderSnackBar = ()=>{
        if(this.state.message){
            return <Snackbar 
            visible={this.state.visible}
            onDismiss={() => this.setState({visible: false})}
            action={{
                label: 'Close', 
                onPress: ()=> this.setState({
                    visible:false, 
                    isNameEmpty: false, 
                    isEmailEmpty:false,
                    isPasswordEmpty:false,
                    isConfirmPasswordEmpty: false,
                    isPhoneEmpty: false,
            })}} >{this.state.message}</Snackbar>
        }
    }

    validateEmail = ()=>{
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)){
            return true;
        } else{
            return <HelperText type="error" visible={true}>Invalid email address !</HelperText>;
        }
    }

    isPasswordEqual = ()=>{
        const { password, confirmPassword } = this.state;
        if(password !== confirmPassword){
            return <HelperText type="error" visible={true}>Password didn't matched</HelperText>
        }
    }

    render() {
        return (
            <View style={styles.container}>
            <ScrollView>
                <Text style={styles.textStyle}>Register</Text>

                <TextInput
                    style={styles.button}
                    error={this.state.isNameEmpty}
                    mode="outlined"
                    label="Name"
                    value={this.state.name}
                    onChangeText={name => this.setState({ name })} />
                <TextInput
                    style={styles.button}
                    error={this.state.isEmailEmpty}
                    mode="outlined"
                    label="Email"
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })} />
                {this.state.email?this.validateEmail() : null}
                <TextInput
                    style={styles.button}
                    error={this.state.isPasswordEmpty}
                    secureTextEntry={true}
                    mode="outlined"
                    label="Password"
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })} />
                <TextInput
                    style={styles.button}
                    error={this.state.isConfirmPasswordEmpty}
                    secureTextEntry={true}
                    mode="outlined"
                    label="Confirm Password"
                    value={this.state.confirmPassword}
                    onChangeText={confirmPassword => this.setState({ confirmPassword })} />
                {this.state.confirmPassword ? this.isPasswordEqual(): null}
                <TextInput
                    keyboardType="numeric"
                    error={this.state.isPhoneEmpty}
                    style={styles.button}
                    mode="outlined"
                    label="Number"
                    value={this.state.phone}
                    onChangeText={phone => this.setState({ phone })} />
                {this.renderSnackBar()}
                {this.renderButtonOrLoading()}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        margin: 30,
    },
    button: {
        marginTop: 20
    },
    textButton: {
        marginTop:20,
        width: 150,
    },
    textStyle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
    }
})

export default RegisterScreen;