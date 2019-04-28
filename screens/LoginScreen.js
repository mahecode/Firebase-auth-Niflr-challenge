import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button, ActivityIndicator, Colors, Snackbar } from 'react-native-paper';
import * as firebase from 'firebase';
// import { MaterialCommunityIcons } from '@expo/vector-icons'
// import Navbar from '../components/Navbar/Navbar';

firebase.initializeApp({
    apiKey: "AIzaSyDfeti6DOYZBridv9a7Lk1HMGbD448s2sE",
    authDomain: "react-native-auth-31359.firebaseapp.com",
    databaseURL: "https://react-native-auth-31359.firebaseio.com/",
    projectId: "react-native-auth-31359",
    storageBucket: "gs://react-native-auth-31359.appspot.com/",
    messagingSenderId: "495287811828"
})

class LoginScreen extends Component {

    state = {
        email: '',
        password: '',
        message: '',
        loading: false,
        visible: true,
        isEmptyEmail: false,
        isEmptyPassword: false,
    }

    onLoginPress = () => {
        this.setState({ message: '', loading: true });
        const { email, password } = this.state;
        if (!email) {
            this.setState({ isEmptyEmail: true })
            if (!password) {
                this.setState({ isEmptyPassword: true });
            }
        } else if (!password) {
            this.setState({ isEmptyPassword: true });
        }
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ message: '', loading: false });
                this.props.navigation.navigate('Food Items');
            })
            .catch(() => {
                this.setState({ message: 'Authentication failed !', loading: false, visible: true });
            })
    }


    onSignupPress = () => {
        this.props.navigation.navigate('Register');
    }

    renderButtonOrLoading = () => {
        if (this.state.loading) {
            return <ActivityIndicator style={styles.button} size={60} animating={true} color={Colors.purple800} />
        }
        return <View>

            <Button
                style={styles.button}
                mode="contained"
                onPress={() => this.onLoginPress()}>Login</Button>
            <Button
                style={styles.textButton}
                mode="text"
                onPress={() => this.onSignupPress()}>Sign up here</Button>
        </View>
    }

    renderSnackBar = () => {
        if (this.state.message) {
            return <Snackbar
                visible={this.state.visible}
                onDismiss={() => this.setState({ visible: false })}
                action={{ label: 'Close', onPress: () => this.setState({ visible: false, isEmptyEmail: false, isEmptyPassword: false }) }} >{this.state.message}</Snackbar>
        }
    }

    handleIcon = () => {
        alert('Icon Pressed');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>Login</Text>
                <TextInput
                    style={styles.button}
                    error={this.state.isEmptyEmail}
                    mode="outlined"
                    label="Email"
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })} />
                    <TextInput
                        style={styles.button}
                        secureTextEntry={true}
                        error={this.state.isEmptyPassword}
                        mode="outlined"
                        label="Password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })} />
                    {/* <MaterialCommunityIcons size={32} name="eye" onPress={() => this.handleIcon()} /> */}
                {this.renderSnackBar()}
                {this.renderButtonOrLoading()}
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
        margin: 30,
    },
    button: {
        marginTop: 20
    },
    textStyle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
    },
    textButton: {
        marginTop:20,
        width: 150,
    },
})

export default LoginScreen;