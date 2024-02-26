export const getBordereauxForContract = async (
  contractValue: string
): Promise<{
  numeroBordereau: string
  anneeBordereau: string
  nomAcheteurOptions: string[]
}> => {
  const bordereauxMap: Record<
    string,
    {
      numeroBordereau: string
      anneeBordereau: string
      nomAcheteurOptions: string[]
    }
  > = {
    contract1: {
      numeroBordereau: '001',
      anneeBordereau: '2022',
      nomAcheteurOptions: ['Acheteur 1', 'Acheteur 2']
    },
    contract2: {
      numeroBordereau: '002',
      anneeBordereau: '2023',
      nomAcheteurOptions: ['Acheteur 3', 'Acheteur 4']
    },
    contract3: {
      numeroBordereau: '003',
      anneeBordereau: '2022',
      nomAcheteurOptions: ['Acheteur 5', 'Acheteur 6']
    },
    contract4: {
      numeroBordereau: '004',
      anneeBordereau: '2023',
      nomAcheteurOptions: ['Acheteur 7', 'Acheteur 8']
    },
    contract5: {
      numeroBordereau: '005',
      anneeBordereau: '2022',
      nomAcheteurOptions: ['Acheteur 9', 'Acheteur 10']
    },
    contract6: {
      numeroBordereau: '006',
      anneeBordereau: '2023',
      nomAcheteurOptions: ['Acheteur 11', 'Acheteur 12']
    },
    contract7: {
      numeroBordereau: '007',
      anneeBordereau: '2022',
      nomAcheteurOptions: ['Acheteur 13', 'Acheteur 14']
    },
    contract8: {
      numeroBordereau: '008',
      anneeBordereau: '2023',
      nomAcheteurOptions: ['Acheteur 15', 'Acheteur 16']
    },
    contract9: {
      numeroBordereau: '009',
      anneeBordereau: '2022',
      nomAcheteurOptions: ['Acheteur 17', 'Acheteur 18']
    },
    contract10: {
      numeroBordereau: '010',
      anneeBordereau: '2023',
      nomAcheteurOptions: ['Acheteur 19', 'Acheteur 20']
    },
    contract11: {
      numeroBordereau: '011',
      anneeBordereau: '2022',
      nomAcheteurOptions: ['Acheteur 21', 'Acheteur 22']
    },
    contract12: {
      numeroBordereau: '012',
      anneeBordereau: '2023',
      nomAcheteurOptions: ['Acheteur 23', 'Acheteur 24']
    },
    contract13: {
      numeroBordereau: '013',
      anneeBordereau: '2022',
      nomAcheteurOptions: ['Acheteur 25', 'Acheteur 26']
    },
    contract14: {
      numeroBordereau: '014',
      anneeBordereau: '2023',
      nomAcheteurOptions: ['Acheteur 27', 'Acheteur 28']
    },
    contract15: {
      numeroBordereau: '015',
      anneeBordereau: '2022',
      nomAcheteurOptions: ['Acheteur 29', 'Acheteur 30']
    },
    contract16: {
      numeroBordereau: '016',
      anneeBordereau: '2023',
      nomAcheteurOptions: ['Acheteur 31', 'Acheteur 32']
    }
  }

  return (
    bordereauxMap[contractValue] || {
      numeroBordereau: '',
      anneeBordereau: '',
      nomAcheteurOptions: []
    }
  )
}
