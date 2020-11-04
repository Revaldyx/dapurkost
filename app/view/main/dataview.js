Ext.define('dapurkost.view.main.dataview', {
    extend: 'Ext.Container',
    xtype:'form2',
    requires: [
    'dapurkost.store.Personnel',
    'Ext.dataview.plugin.ItemTip',
    'Ext.plugin.Responsive',
    'Ext.field.Search'
    ],
    autoScroll: true,

    items: [{
       items : {
        docked :'top',
            //xtype :'titlebar',
            xtype: 'toolbar',
            //title :'INFO',
            items: [
            {
                xtype: 'searchfield',
                placeHolder: 'Search',
                name: 'searchfield',
                margin: '0 20 0 20',
                id: 'search1',
                
            },
            {
                xtype: 'button',
                iconCls: 'x-fa fa-search',
                handler: 'onSearch'
            }
        ]
    },
    xtype: 'dataview',
    height: Ext.getBody().getViewSize().height/1.15,
    cls: 'dataview-basic',
    handler: function() {
        Ext.getCmp('pic').getEl().dom.src = record.get('pic');
    },

    itemTpl:'<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">'+
    '<table class="table"><tr><td width = 100><img src=/resources/gambar_resep/{gambar} width=150 height=150 class="img gambar"/></td>'+
    '<td class=nama>Nama :  {nama}<br>Jenis : {jenis}<br>'+
    '<button type="button" id="btn" class="btn-primary third "><i class="fa fa-ellipsis-h">&nbspSelengkapnya</i></button></td></div></br></div>',
    store: {
        type: 'personnel'
    },
    // listeners: {
    //     itemclick: function(view, record, item, index, e, eOpts) {
    //         click: {
    //         element: 'element',
    //         delegate: '.btn-primary',
    //         fn: function() {
    //             Ext.Msg.alert('Title', 'The quick brown fox jumped over the lazy dog.', Ext.emptyFn);
    //         }
    //     }
    //     },
        
    // } 
}]    

});