<template>
    <div id="app">
        <q-layout ref="layout">
            <q-toolbar slot="header">
                <q-toolbar-title>
                    Vue Quasar Todos
                </q-toolbar-title>
            </q-toolbar>

            <q-fixed-position corner="bottom-right" :offset="[18, 18]">
                <q-btn round color="primary" @click="addNewDialog">
                    <q-icon name="add" />
                </q-btn>
            </q-fixed-position>

            <q-list link class="todos">
                <q-item tag="label" :class="{'done': todo.done}" v-for="(todo, index) in todos" key="index">
                    <q-item-side>
                        <q-checkbox v-model="todo.done"></q-checkbox>
                    </q-item-side>
                    <q-item-main>
                        <q-item-tile label v-text="todo.text"></q-item-tile>
                    </q-item-main>
                    <q-item-side right @click="destroy(index)">
                        <q-item-tile icon="delete" color="red" />
                    </q-item-side>
                </q-item>
            </q-list>
        </q-layout>
    </div>
</template>

<script>
    import {Dialog} from 'quasar-framework';
    import Storage from './storage';

    export default {
        data() {
            return {
                todos: [{
                    done: false, text: 'Click / touch + to add new.'
                }]
            }
        },

        mounted() {
            var todos = Storage.fetch();
            this.todos = todos.length ? todos : [{done: false, text: 'Click / touch + to add new.'}]
        },

        methods: {
            destroy(index) {
                setTimeout(() => this.todos.splice(index, 1));
            },
            addNewDialog() {
                var dialog = Dialog.create({
                    title: 'New todo',
                    form: {
                        text: {
                            type: 'text',
                            label: 'Text',
                            model: ''
                        }
                    },

                    buttons: [
                        'Cancel',
                        {
                            label: 'Add',
                            handler: (data) => {
                                this.todos.push({done: false, text: data.text});
                            }
                        }
                    ]
                });

                /**
                 * Submit dialog on Enter key press
                 */
                var input = dialog.vm.$el.querySelector('input[type="text"]');
                var submit = dialog.vm.$el.querySelectorAll('button');
                submit = submit[submit.length - 1];
                input.addEventListener('keypress', (key) => key.code == 'Enter' ? submit.click() : '')
            }
        },

        watch: {
            todos: {
                handler(todos){
                    Storage.save(todos);
                },

                deep: true
            }
        }
    };
</script>

<style>
    .todos .done .q-item-label{
        color: rgba(0,0,0,0.50);
        text-decoration: line-through;
    }
</style>
