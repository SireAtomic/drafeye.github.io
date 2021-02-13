import * as particlesJS from 'particles.js';
import { myFirstParticle } from './particles.ts'

particlesJS.load('particles-js', myFirstParticle, function() {
  console.log('callback - particles.js config loaded');
});