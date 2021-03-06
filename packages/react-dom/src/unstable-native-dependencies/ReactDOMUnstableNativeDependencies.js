/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const EventPluginUtils = require('events/EventPluginUtils');
const ResponderEventPlugin = require('events/ResponderEventPlugin');
const ResponderTouchHistoryStore = require('events/ResponderTouchHistoryStore');

// This is used by react-native-web.
const ReactDOMUnstableNativeDependencies = {
  injectComponentTree: EventPluginUtils.injection.injectComponentTree,
  ResponderEventPlugin,
  ResponderTouchHistoryStore,
};

// Inject react-dom's ComponentTree into this module.
const ReactDOM = require('react-dom');
const {
  ReactDOMComponentTree,
} = ReactDOM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
ReactDOMUnstableNativeDependencies.injectComponentTree(ReactDOMComponentTree);

module.exports = ReactDOMUnstableNativeDependencies;
