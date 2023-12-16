import React from 'react'

export interface IService {
    title: string,
    description: string,
    ref: string,
    icon?: React.ReactElement | null
}