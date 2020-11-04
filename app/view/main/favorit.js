Ext.define('dapurkost.view.main.favorit', {
    extend: 'Ext.Container',
    xtype:'form1',
    id:'dataview_favorit',
    requires: [
    'dapurkost.store.favorit',
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
                id: 'search',
                listeners: {
                    change: 'onInputChange'
                }
            },
            {
                xtype: 'button',
                iconCls: 'x-fa fa-search',
                handler: 'onSearch'
            },
            {
                id: 'pic',
                fieldLabel: 'Photo',
            //name: 'pic',
            cls: 'img-contact',
            autoEl: {tag: 'img', src: Ext.BLANK_IMAGE_URL}
        }
        ]
    },
    xtype: 'dataview',
    height: Ext.getBody().getViewSize().height/1.15,
    cls: 'dataview-basic',
    handler: function() {
        Ext.getCmp('pic').getEl().dom.src = record.get('pic');
    },

    itemTpl:
    '<table><tr><td width = 100><img src=/resources/gambar_resep/{gambar} width=150 height=150 class="img gambar"/></td>'+
    '<td class=nama>Nama :  {nama}<br>Jenis : {jenis}<br>'+
    '<button type="button" id="btn{#}" class="btn-primary third "><i class="fa fa-ellipsis-h">&nbspSelengkapnya</i></button></td></div></br></div>',
    store: {
        type: 'favorit'
    },
    listeners: {
        itemclick: function(view, record, item, index, e, eOpts) {
            var target = e.target;
            if (target.tagName === 'BUTTON') {
                console.log('button clicked')
            }
            else {
                console.log('something else clicked')
            }
        },
        click: {
            element: 'element',
            delegate: '.btn-primary',
            fn: function() {
                document.getElementById("idmenus").style.display = 'block';
                document.getElementById("dataview_makanan").style.display = 'none';
                document.getElementById("tes").style.display = 'block';
            }
        }
    } 
}]    

});