export const getAdhrents = async () => {
  const mockOptions = [
    { value: 'option1', label: 'AD1' },
    { value: 'option2', label: 'AD2' },
    { value: 'option3', label: 'AD3' },
    { value: 'option4', label: 'AD4' },
    { value: 'option5', label: 'AD5' },
    { value: 'option6', label: 'AD6' },
    { value: 'option7', label: 'AD7' },
    { value: 'option8', label: 'AD8' }
  ]

  return { options: mockOptions }
}

export const getListOfBanks = async () => {
  const mockOptions = [
    { value: 'option1', label: 'Ettijari' },
    { value: 'option2', label: 'BH' },
    { value: 'option3', label: 'BNA' },
    { value: 'option4', label: 'AMAN' },
    { value: 'option4', label: 'AMAN' }
  ]

  return { options: mockOptions }
}

export const getDeviseList = async () => {
  const mockOptions = [
    { value: 'option1', label: 'DNT' },
    { value: 'option2', label: 'EUR' },
    { value: 'option3', label: 'DOL' },
    { value: 'option4', label: 'POU' }
  ]

  return { options: mockOptions }
}

export const getindividualList = async () => {
  const mockOptions = [
    { value: 'option1', label: 'XF1' },
    { value: 'option2', label: 'XF2' },
    { value: 'option3', label: 'XF3' },
    { value: 'option4', label: 'XF4' },
    { value: 'option5', label: 'XF5' },
    { value: 'option6', label: 'XF6' },
    { value: 'option7', label: 'XF7' },
    { value: 'option8', label: 'XF8' }
  ]

  return { options: mockOptions }
}

export const getPaymentsMethod = async () => {
  const mockOptions = [
    { value: 'option1', label: 'mode 1' },
    { value: 'option2', label: 'mode 2' },
    { value: 'option3', label: 'mode 3' },
    { value: 'option4', label: 'mode 4' },
    { value: 'option4', label: 'mode 5' },
    { value: 'option4', label: 'mode 6' },
    { value: 'option4', label: 'mode 7' }
  ]

  return { options: mockOptions }
}
