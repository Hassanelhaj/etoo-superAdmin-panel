import React from 'react'
import { DataGrid, GridToolbar , arSD } from '@mui/x-data-grid';

import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';


const Table = () => {


    const columns = [
      { field: 'id', headerName: ' المعرف',
       width: 48
       },
      {
        field: 'FullName',
        headerName: 'الاسم الكامل',
        width: 140,
        editable: true,
      },
      {
        field: 'ServiceType',
        headerName: 'نوع الخدمة',
        width: 120,
        editable: true,
      },
  
    
        {
          field: 'RegistrationDate',
          headerName:'تاريخ التسجيل',
          width: 100,
          editable: true,
        },
        {
          field: 'YearlyPrice',
          headerName: 'القصد السنوي',
          type: 'number',

          width: 100,
          editable: true,
        },
 
    
    ];
    const rows = [
      { id: 1, FullName: 'خضر محمد',
    ServiceType: 'تجارة الكترونية',
    RegistrationDate:"1/3/2024",
        YearlyPrice: 1000 },
        { id: 1, FullName: 'خضر محمد',
        ServiceType: 'تجارة الكترونية',
        RegistrationDate:"1/3/2024",
            YearlyPrice: 1000 },
            { id: 1, FullName: 'خضر محمد',
            ServiceType: 'تجارة الكترونية',
            RegistrationDate:"1/3/2024",
                YearlyPrice: 1000 },
                { id: 1, FullName: 'خضر محمد',
                ServiceType: 'تجارة الكترونية',
                RegistrationDate:"1/3/2024",
                    YearlyPrice: 1000 },      { id: 1, FullName: 'خضر محمد',
                    ServiceType: 'تجارة الكترونية',
                    RegistrationDate:"1/3/2024",
                        YearlyPrice: 1000 },
                        { id: 1, FullName: 'خضر محمد',
                        ServiceType: 'تجارة الكترونية',
                        RegistrationDate:"1/3/2024",
                            YearlyPrice: 1000 },
  
 
    ];
      const existingTheme = useTheme();
      const theme = React.useMemo(
        () =>
          createTheme({}, arSD, existingTheme, {
            direction: 'rtl',
          }),
        [existingTheme],
      );

  return (
    <div lang='ar'    
    style={{fontFamily:'Cairo',direction:'rtl'}}
    >
      
          <ThemeProvider style ={{fontFamily:'Cairo',direction:'rtl'}}  theme={theme}>
          
         <DataGrid 
         
         className='bg-white  w-min  cvx p-4 rounded-lg text-[12px] lg:text-base'
        rows={rows}
        columns={columns}
        style={{fontFamily:'Cairo',direction:'rtl'}}
        initialState={{
            
          pagination: {
            
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        slots={{toolbar:GridToolbar}}
     
        slotProps={{toolbar:{showQuickFilter:true,quickFilterProps:{debounceMs:500}}}}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        
        
      />
        
        </ThemeProvider>
    </div>
  )
}

export default Table