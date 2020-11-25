// @flow

import { connect } from 'react-redux';

import { openDialog } from '../../base/dialog';
import { translate } from '../../base/i18n';
import {
    AbstractButton,
    type AbstractButtonProps
} from '../../base/toolbox/components';
import { IconHelp } from '../../base/icons';

import PollDialog from './PollDialog';

export type Props = AbstractButtonProps & {

    /**
     * Redux dispatch function.
     */
    dispatch: Function,

    /**
     * The i18n translate function.
     */
    t: Function
};

/**
 * Button that opens poll dialogs.
 */
class PollButton extends AbstractButton<P, *> {
    label = 'dialog.polls';
    toggledLabel = 'dialog.polls';
    icon = IconHelp;
    toggledIconName = 'icon-polls';

    /**
     * Action handler when button is clicked.
     *
     * @inheritdoc
     */
    _handleClick() {
        this.props.dispatch(openDialog(PollDialog));
    }
}

export default translate(connect()(PollButton));
