/*
 * <%= name %>
<%if (baseClass !== 'None') {
%> * @extends Phaser.<%= baseClass %>
 * ============================================================================
<% } else {
%> * ============================================================================
<% }
%> * <%= description %>
 *
 */


class <%= name %><%if (baseClass !== 'None') { %> extends Phaser.<%= baseClass %><% } %> {
  constructor (game, ... args) {
    <%if (baseClass !== 'None') { %>super(game, ... args);<% } %>

    // TODO:
    //   1. Edit constructor parameters accordingly.
    //   2. Adjust object properties.
  }

}


export default <%= name %>;
