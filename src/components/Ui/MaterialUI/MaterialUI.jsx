import React from 'react';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

import classes from './MyMaterialUI.module.css'


function MaterialUI() {
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
      });

  return (
        <NativeSelect
            className={classes.select}
            value={state.age}

        >
            <option value="">None</option>
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
        </NativeSelect>
  )
}

export default MaterialUI;


