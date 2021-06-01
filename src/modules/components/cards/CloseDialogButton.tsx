import React from 'react';
import { useCardsMediator } from '../../../Providers/CardsMediatorProvider';
import CloseOutlined from '@material-ui/icons/CloseOutlined';
import IconButton from '@material-ui/core/IconButton';

interface ICloseDialogButtonProps {
    className?: string;
}

const CloseDialogButton: React.FC<ICloseDialogButtonProps> = ({ className }) => {
    const mediator = useCardsMediator();
    return (
        <IconButton onClick={() => mediator.setSelectedCategory("")} className={className}>
            <CloseOutlined />
        </IconButton>
    );
};

export default CloseDialogButton;