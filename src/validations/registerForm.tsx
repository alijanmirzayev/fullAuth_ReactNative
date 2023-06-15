import React from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { instance } from '../network/baseNetwork';

const RegisterForm = ({ navigation }: any) => {
    const initialValues = { fullname: '', email: '', password: '' };

    const validationSchema = yup.object().shape({
        fullname: yup.string(),
        email: yup.string().email('Enter a valid email address').required('Email required'),
        password: yup.string().min(6, 'Password must be at least 6 characters').required('Password required'),
    });

    const onSubmit = async (values: any) => {
        const data = await instance.post('/auth/register', values)
        if (data.status == 201) {
            navigation.navigate('Confirm')
            return
        }
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
                placeholder="Fullname"
                onChangeText={formik.handleChange('fullname')}
                onBlur={formik.handleBlur('fullname')}
                value={formik.values.fullname}
            />
            {formik.touched.email && formik.errors.email && (
                <Text style={{ color: 'red', marginVertical: 3, fontSize: 12 }}>{formik.errors.fullname}</Text>
            )}

            <TextInput
                style={styles.input}
                placeholderTextColor="black"
                placeholder="E-posta"
                onChangeText={formik.handleChange('email')}
                onBlur={formik.handleBlur('email')}
                value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
                <Text style={{ color: 'red', marginVertical: 3, fontSize: 12 }}>{formik.errors.email}</Text>
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
                <Text style={{ color: 'red', marginVertical: 3, fontSize: 12 }}>{formik.errors.password}</Text>
            )}

            <TouchableOpacity onPress={formik.handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.createAccountButton}>
                <Text style={styles.createAccountButtonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

export default RegisterForm;

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