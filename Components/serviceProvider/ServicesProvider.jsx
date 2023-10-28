import React from 'react'

import Table from './Table';

const ServicesProvider = () => {
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
      const data = {columns,rows}
  return (
    <div>
        <Table  />
    </div>
  )
}

export default ServicesProvider