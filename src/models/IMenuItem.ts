import React from 'react'

export interface IMenuItem {
    title: string,
    ref: string,
    isActive: boolean,
    icon?: React.ReactElement  | null
}