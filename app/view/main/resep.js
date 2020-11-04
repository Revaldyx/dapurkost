Ext.define('dapurkost.view.main.resep', {
    extend: 'Ext.Container',
    xtype: 'home',
    id: 'tes',
    layout:'fit',
    maximizable: true,
    requires: [
        'dapurkost.store.Personnel'
    ],
   items: /*[{
        docked:'top',
        xtype:'button',
        margin: '0 0 0 0',
        iconCls: 'x-fa fa-arrow-left'
   },*/{
       html: [
            "<iframe src='../resources/resep/tumis.html' width=360 height=570 style=background-color:#f7e5e4;><p>Your browser does not support iframes.</p> </iframe>"    
        ]
    }//]
});
