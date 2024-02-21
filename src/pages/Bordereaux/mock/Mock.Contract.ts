export const getContractsForAdherent = async (adherentValue: string): Promise<{ value: string; label: string }[]> => {
  const contractsMap: Record<string, { value: string; label: string }[]> = {
    option1: [
      { value: 'contract1', label: 'Contract 1 for AD1' },
      { value: 'contract2', label: 'Contract 2 for AD1' }
    ],
    option2: [
      { value: 'contract3', label: 'Contract 1 for AD2' },
      { value: 'contract4', label: 'Contract 2 for AD2' }
    ],
    option3: [
      { value: 'contract5', label: 'Contract 1 for AD3' },
      { value: 'contract6', label: 'Contract 2 for AD3' }
    ],
    option4: [
      { value: 'contract7', label: 'Contract 1 for AD4' },
      { value: 'contract8', label: 'Contract 2 for AD4' }
    ],
    option5: [
      { value: 'contract9', label: 'Contract 1 for AD5' },
      { value: 'contract10', label: 'Contract 2 for AD5' }
    ],
    option6: [
      { value: 'contract11', label: 'Contract 1 for AD6' },
      { value: 'contract12', label: 'Contract 2 for AD6' }
    ],
    option7: [
      { value: 'contract13', label: 'Contract 1 for AD7' },
      { value: 'contract14', label: 'Contract 2 for AD7' }
    ],
    option8: [
      { value: 'contract15', label: 'Contract 1 for AD8' },
      { value: 'contract16', label: 'Contract 2 for AD8' }
    ]
  }

  return contractsMap[adherentValue] || []
}
