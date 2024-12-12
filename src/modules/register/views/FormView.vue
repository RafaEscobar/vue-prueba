<script setup>
    import {Form, Field, ErrorMessage} from 'vee-validate';
    import { schema } from '../schemas/validateSchema';
    const onSubmit = () => alert("Se enviaron los datos");
</script>

<template>
    <div class="pt-8">
        <h1 class="text-center">Formulario de registro</h1>
        <div class="w-full flex justify-center">
            <Form :validation-schema="schema" @submit="onSubmit">
                <div class="pt-6 pb-4">
                    <label>
                        Nombre:
                        <Field type="text" class="border-2 border-blue-200 rounded-lg" name="name" />
                        <ErrorMessage name="name"/>
                    </label>
                </div>
                <div class="pb-4">
                    <label>
                        Correo electrónico:
                        <Field type="email" class="border-2 border-blue-200 rounded-lg" name="email" />
                        <ErrorMessage name="email" />
                    </label>
                </div>
                <div class="text-center">
                    <button type="submit" class="bg-blue-400 text-white rounded-lg px-4 py-1 w-full">
                        Enviar
                    </button>
                </div>
            </Form>
        </div>
    </div>
</template>

<style scoped>
</style>