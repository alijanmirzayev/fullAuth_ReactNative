import React from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';

const LoginForm = ({ navigation }: any) => {
    const initialValues = { email: '', password: '' };

    const validationSchema = yup.object().shape({
        email: yup.string().email('Enter a valid email address').required('Email required'),
        password: yup.string().min(6, 'Password must be at least 6 characters').required('Password required'),
    });

    const onSubmit = (values: any) => {
        console.log(values);
        // Axios ile post at
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    return (
        <View style={styles.card}>
            <TextInput
                style={styles.input}
                placeholderTextColor="black"
                placeholder="E-posta"
                onChangeText={formik.handleChange('email')}
                onBlur={formik.handleBlur('email')}
                value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
                <Text style={{color: 'red', marginVertical: 3, fontSize: 12}}>{formik.errors.email}</Text>
            )}

            <TextInput
                style={styles.input}
                placeholderTextColor="black"
                placeholder="Şifre"
                secureTextEntry
                onChangeText={formik.handleChange('password')}
                onBlur={formik.handleBlur('password')}
                value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
                <Text style={{color: 'red', marginVertical: 3, fontSize: 12}}>{formik.errors.password}</Text>
            )}

            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')} style={styles.forgotPasswordButton}>
                <Text style={styles.forgotPasswordButtonText}>Forgot?</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={formik.handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Registration')} style={styles.createAccountButton}>
                <Text style={styles.createAccountButtonText}>Create Account</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginForm;

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        padding: 20,
        marginTop: 40,
        width: '90%',
        alignItems: 'center',
      },
    input: {
        color: 'black',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        width: '100%',
    },
    button: {
        backgroundColor: '#20B2AA',
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    },
    forgotPasswordButton: {
        width: '100%',
        textAlign: 'flex-end',
    },
    forgotPasswordButtonText: {
        color: '#20B2AA',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'right'
    },
    createAccountButton: {
        marginTop: 20,
    },
    createAccountButtonText: {
        color: '#20B2AA',
        fontSize: 16,
        fontWeight: 'bold',
    },
});