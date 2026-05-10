/*
 * pwix:ui-bootstrap5/src/client/js/index.js
 */

import '../../common/js/index.js';

import * as PopperNS from '@popperjs/core/dist/cjs/popper.js';
export const Popper = PopperNS;

import 'bootstrap/dist/css/bootstrap.min.css';

import * as BootstrapNS from  'bootstrap/dist/js/bootstrap.min.js';
export const Bootstrap = BootstrapNS.default || BootstrapNS;

// assert our presence on the console
//console.debug( 'pwix:bootstrap5 evaluated' );
