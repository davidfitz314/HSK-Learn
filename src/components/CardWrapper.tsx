import React from 'react';

type cardWrapperProps = {
    children: any,
}

export const CardWrapper = (props: cardWrapperProps) => {
    return (
        <>
            {props.children}
        </>
    );
};