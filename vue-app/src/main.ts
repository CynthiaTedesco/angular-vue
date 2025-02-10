import { defineCustomElement } from 'vue';
import Header from './components/VueHeader.ce.vue';
import Button from './components/VueButton.ce.vue';

// Define the custom element with the browser's Custom Elements API
customElements.define('vue-header', defineCustomElement(Header));
customElements.define('vue-button', defineCustomElement(Button));
