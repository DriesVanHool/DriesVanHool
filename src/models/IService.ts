import React from 'react'

export interface IService {
    id?: number | null,
    title: string,
    description: string,
    ref: string,
    icon?: React.ReactElement | null
}