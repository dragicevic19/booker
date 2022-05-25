export const columnsData = 
  { 'cottage_owner': 
    [
      { field: "id", headerName: "ID", width: 100 },
      {
        field: "name",
        headerName: "Name",
        width: 250,
        renderCell: (params) => {
          return (
            <div className="cellWithImg">
              <img className="cellImg" src={params.row.img || "https://img.favpng.com/5/18/7/log-cabin-ico-icon-png-favpng-68ATTkwWVbt7jKvV6mmTS9mCs.jpg"} alt="avatar" />
              {params.row.name}
            </div>
          );
        }
      },
      {
        field: "city",
        headerName: "City",
        width: 150,
      },
      {
        field: "rating",
        headerName: "Rating",
        width: 100,
      },
      {
        field: "price",
        headerName: "Price [$]",
        width: 100,
      },
      {
        field: "capacity",
        headerName: "Max People",
        width: 120,
      },
      {
        field: "status",
        headerName: "Status",
        width: 130,
        renderCell: (params) => {
          return (
            <div className={`cellWithStatus ${params.row.status}`}>
              {params.row.status}
            </div>
          );
        },
      }
    ],
    'boat_owner':
    [
      { field: "id", headerName: "ID", width: 100 },
      {
        field: "name",
        headerName: "Name",
        width: 250,
        renderCell: (params) => {
          return (
            <div className="cellWithImg">
              <img className="cellImg" src={params.row.img || "https://thumbs.dreamstime.com/b/boat-icon-vector-travel-concept-thin-line-illustration-editable-stroke-linear-sign-use-web-mobile-apps-logo-192170108.jpg"} alt="avatar" />
              {params.row.name}
            </div>
          );
        }
      },
      {
        field: "city",
        headerName: "City",
        width: 150,
      },
      {
        field: "rating",
        headerName: "Rating",
        width: 100,
      },
      {
        field: "price",
        headerName: "Price [$]",
        width: 100,
      },
      {
        field: "capacity",
        headerName: "Max People",
        width: 120,
      },
      {
        field: "status",
        headerName: "Status",
        width: 130,
        renderCell: (params) => {
          return (
            <div className={`cellWithStatus ${params.row.status}`}>
              {params.row.status}
            </div>
          );
        },
      }
    ],
    'admin':
    [
      { field: "id", 
      headerName: "ID", 
      width: 60 },
      {
        field: "icon",
        headerName: "Icon",
        width: 60,
        renderCell: (params) => {
          return (
            <div className="cellWithImg">
              <img className="cellImg" src={params.row.img || "https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png"} alt="avatar" />

              {params.row.name}
            </div>
          );
        }
      },
      {
        field: "type",
        headerName: "User Type",
        width: 150,
      },
      {
        field: "email",
        headerName: "Email",
        width: 220,
      },
      {
        field: "firstName",
        headerName: "First Name",
        width: 100,
      },
      {
        field: "lastName",
        headerName: "Last Name",
        width: 100,
      },
      {
        field: "country",
        headerName: "Country",
        width: 100,
      },
      {
        field: "city",
        headerName: "City",
        width: 100,
      },
      {
        field: "street",
        headerName: "Street",
        width: 150,
      },
      {
        field: "phoneNumber",
        headerName: "Phone Number",
        width: 120,
      }
    ],
    'instructor':
    [
      { field: "id", headerName: "ID", width: 100 },
      {
        field: "name",
        headerName: "Name",
        width: 250,
        renderCell: (params) => {
          return (
            <div className="cellWithImg">
              <img className="cellImg" src={params.row.img || "https://cdn-icons-png.flaticon.com/512/71/71543.png"} alt="avatar" />
              {params.row.name}
            </div>
          );
        }
      },
      {
        field: "city",
        headerName: "City",
        width: 150,
      },
      {
        field: "rating",
        headerName: "Rating",
        width: 100,
      },
      {
        field: "price",
        headerName: "Price [$]",
        width: 100,
      },
      {
        field: "capacity",
        headerName: "Max People",
        width: 120,
      },
      {
        field: "status",
        headerName: "Status",
        width: 130,
        renderCell: (params) => {
          return (
            <div className={`cellWithStatus ${params.row.status}`}>
              {params.row.status}
            </div>
          );
        },
      }
    ]
};