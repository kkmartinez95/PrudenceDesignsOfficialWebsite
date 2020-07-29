import Application from 'prudence-designs/app';
import config from 'prudence-designs/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
