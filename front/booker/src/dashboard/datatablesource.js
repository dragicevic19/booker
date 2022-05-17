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
    ]
};