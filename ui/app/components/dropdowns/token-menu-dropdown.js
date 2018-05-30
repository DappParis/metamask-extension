const Component = require('react').Component
const PropTypes = require('prop-types')
const h = require('react-hyperscript')
const { withRouter } = require('react-router-dom')
const { compose } = require('recompose')
const inherits = require('util').inherits
const connect = require('react-redux').connect
const actions = require('../../actions')


TokenMenuDropdown.contextTypes = {
  t: PropTypes.func,
}

module.exports = compose(
  withRouter,
  connect(null, mapDispatchToProps)
)(TokenMenuDropdown)

//module.exports = connect(null, mapDispatchToProps)(TokenMenuDropdown)


function mapDispatchToProps (dispatch) {
  return {
    showHideTokenConfirmationModal: (token) => {
      dispatch(actions.showModal({ name: 'HIDE_TOKEN_CONFIRMATION', token }))
    },
    showSendTokenPage: () => { dispatch(actions.showSendTokenPage()) },
  }
} 

inherits(TokenMenuDropdown, Component)
function TokenMenuDropdown () {
  Component.call(this)

  this.onClose = this.onClose.bind(this)
}

TokenMenuDropdown.prototype.onClose = function (e) {
  e.stopPropagation()
  this.props.onClose()
}

TokenMenuDropdown.prototype.render = function () {
  const { showHideTokenConfirmationModal, history } = this.props;

  return h('div.token-menu-dropdown', {}, [
    h('div.token-menu-dropdown__close-area', {
      onClick: this.onClose,
    }),
    h('div.token-menu-dropdown__container', {}, [
      h('div.token-menu-dropdown__options', {}, [

        h('div.token-menu-dropdown__option', {
          style: {
            margin:'0.3em',
            marginTop: '-0.3em',
          },
          onClick: (e) => {
            e.stopPropagation()
            showHideTokenConfirmationModal(this.props.token)
            this.props.onClose()
          },
        }, this.context.t('hideToken')),
        
        h('div.token-menu-dropdown__option', {
          style: {
            margin:'0.3em'
          },
          onClick: () => history.push(SEND_ROUTE),                 
        }, this.context.t('sendToken')),

      ]),
    ]),
  ])
}
