import React from 'react';
import withDetails from '../hocs/withDetails';
import ItemDetails from '../ItemDetails/ItemDetails';
import * as api from '../../services/api/apiService';

export const PeopleDetails = withDetails(ItemDetails, api.getPerson);