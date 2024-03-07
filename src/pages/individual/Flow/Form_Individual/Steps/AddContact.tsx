import { Grid } from '@mui/material'
import { Fragment, useEffect, useState } from 'react'
import Select from 'react-select'
import CustomTextField from 'src/@core/components/mui/text-field'
import { CustomSelectProps, SelectInerface } from '../interface/FormIndividual.interface'
import { getVille } from '../mock'
import useCustomSelectStyles from '../../../../../shared-components/StyledInputs/CustomSelectStyles'

const AddContact = ({ onSearch }: CustomSelectProps) => {
  const [optionsVille, setOptionsVille] = useState<SelectInerface[]>([])
  const [statusValueVille, setStatusValueVille] = useState('')
  const customStyles = useCustomSelectStyles();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseVille = await getVille()
        setOptionsVille(responseVille.optionsVille)
      } catch (error) {
        console.error('Erreur lors de la récupération des options :', error)
      }
    }
    fetchData()
  }, [])




  return (
    <>
      <Fragment>
        <Grid sm={1.5}></Grid>
        <Grid item sm={4}>
          <CustomTextField
            fullWidth
            label={'Nom et prénom '}
            name={'Name'}
            placeholder={'Tapez nom et prénom'}


          />
        </Grid>
        <Grid sm={1}></Grid>
        <Grid item sm={4}>
          position
          <Select
            placeholder={'---Sélectionnez une position---'}
            defaultValue={statusValueVille}
            onChange={(value: any) => {
              onSearch ? onSearch(value) : setStatusValueVille(value)
            }}
            options={optionsVille}
            styles={customStyles}
          />
        </Grid>
        <Grid sm={1}></Grid>
        <Grid sm={1.5}></Grid>
        <Grid item xs={12} sm={4}>
          <CustomTextField
            fullWidth
            label={'Télèphone '}
            name={'Télephone'}
            placeholder={'Tapez numéro'}


          />
        </Grid>
        <Grid sm={1}></Grid>
        <Grid item xs={12} sm={4}>
          <CustomTextField
            fullWidth
            label={'Fax '}
            name={'Fax'}
            placeholder={'Tapez fax'}


          />
        </Grid>
        <Grid sm={1}></Grid>
        <Grid sm={1.5}></Grid>
        <Grid item xs={12} sm={4}>
          <CustomTextField
            fullWidth
            label={'Email '}
            name={'Email'}
            placeholder={'Tapez email'}


          />
        </Grid>
      </Fragment>
    </>
  )
}

export default AddContact
