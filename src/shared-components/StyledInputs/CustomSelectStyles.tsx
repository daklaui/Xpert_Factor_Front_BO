import { useTheme } from '@mui/material';

const useCustomSelectStyles = () => {
  const theme = useTheme();

  return {
    control: (provided: any, state : any) => ({
      ...provided,
      borderColor: state.isFocused ? theme.palette.primary.main : 'gray',
      boxShadow: state.isFocused ? `0 0 0 1px ${theme.palette.primary.main}` : 'none',
      '&:hover': {
        borderColor: theme.palette.primary.main,
      },
    }),
    option: (provided: any, state : any) => ({
      ...provided,
      backgroundColor: state.isSelected ? theme.palette.primary.main : 'white',
      color: state.isSelected ? 'white' : 'black',
    }),
  };
};

export default useCustomSelectStyles;
