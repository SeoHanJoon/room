import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes, { object } from 'prop-types';
import * as boardActions from '../../store/board';
import { Headers, Mains, Boards } from '../../components';

class Main extends Component {
  handleToggle = (id) => {
    const { BoardActions } = this.props;
    BoardActions.toggleItem(id);
  };

  render() {
    const { mainBoard } = this.props;

    return (
      <Fragment>
        <Headers />
        <Mains />
        <Boards mainBoard={mainBoard} onToggle={this.handleToggle} />
      </Fragment>
    );
  }
}

Main.propTypes = {
  BoardActions: PropTypes.instanceOf(Object).isRequired,
  mainBoard: PropTypes.arrayOf(object).isRequired,
};

const mapStateToProps = ({ board }) => ({
  mainBoard: board.mainBoard,
});
const mapDispatchToProps = dispatch => ({
  BoardActions: bindActionCreators(boardActions, dispatch),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
