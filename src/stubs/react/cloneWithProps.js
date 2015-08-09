/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule cloneWithProps
 */

// As per https://github.com/facebook/fixed-data-table/issues/233, this file should be eliminated
// and all uses of cloneWithProps() should be replaced with React.cloneElement().

if (global.atom) {
  // In react-for-atom, addons is exposed lazily, by default.
  module.exports = require('./React').addons.cloneWithProps;
} else {
  module.exports = require('react/lib/cloneWithProps');
}
