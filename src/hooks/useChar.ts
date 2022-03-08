import React, {Dispatch, SetStateAction } from 'react';
import { character } from '../models/RickyMorty';
import { useData } from './useData';

export const useCharacter = (term: string)=> useData<character[]>(`${term}`, [])
