export const getBordereauxForContract = async (
  contractValue: string
): Promise<{ numeroBordereau: string; anneeBordereau: string }> => {
  const bordereauxMap: Record<string, { numeroBordereau: string; anneeBordereau: string }> = {
    contract1: { numeroBordereau: '001', anneeBordereau: '2022' },
    contract2: { numeroBordereau: '002', anneeBordereau: '2023' },
    contract3: { numeroBordereau: '003', anneeBordereau: '2022' },
    contract4: { numeroBordereau: '004', anneeBordereau: '2023' },
    contract5: { numeroBordereau: '005', anneeBordereau: '2022' },
    contract6: { numeroBordereau: '006', anneeBordereau: '2023' },
    contract7: { numeroBordereau: '007', anneeBordereau: '2022' },
    contract8: { numeroBordereau: '008', anneeBordereau: '2023' },
    contract9: { numeroBordereau: '009', anneeBordereau: '2022' },
    contract10: { numeroBordereau: '010', anneeBordereau: '2023' },
    contract11: { numeroBordereau: '011', anneeBordereau: '2022' },
    contract12: { numeroBordereau: '012', anneeBordereau: '2023' },
    contract13: { numeroBordereau: '013', anneeBordereau: '2022' },
    contract14: { numeroBordereau: '014', anneeBordereau: '2023' },
    contract15: { numeroBordereau: '015', anneeBordereau: '2022' },
    contract16: { numeroBordereau: '016', anneeBordereau: '2023' }
  }

  return bordereauxMap[contractValue] || { numeroBordereau: '', anneeBordereau: '' }
}
