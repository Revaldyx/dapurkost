Ext.define('dapurkost.view.main.useratur', {
    extend: 'Ext.grid.Grid',
    xtype: 'useratur',
    id: 'useratur',
    requires: [
        'dapurkost.store.user'
    ],

    title: 'Data Siswa',
    
    store: {
        type: 'user'
    },
    columns: [
        { text: 'No',  dataIndex: 'id', width: 70, editable: true},
        { text: 'Nama',  dataIndex: 'nama', width: 170, editable: true},
        { text: 'Email', dataIndex: 'email', width: 170, editable: true },
        { text: 'Password', dataIndex: 'password', width: 170,editable: true },
    ]
    /*listeners: {
        select: 'onItemSelected'
    },*/
});
