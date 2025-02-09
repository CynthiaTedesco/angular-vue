import { defineCustomElement } from 'vue';
import Header from './components/Header.ce.vue';

// Register the custom element
const headerElement = defineCustomElement(Header);

// Now define the custom element with the browser's Custom Elements API
customElements.define('vue-header', headerElement);
