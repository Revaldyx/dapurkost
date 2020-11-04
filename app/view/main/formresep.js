Ext.define('dapurkost.view.main.formresep', {
    extend: 'Ext.form.Panel',
    id: 'formresep',
    xtype: 'placeholderlabel',
    height: Ext.getBody().getViewSize().height/1.15,
    controller:'main',
    requires: [
        'dapurkost.view.main.MainController',
        'Ext.form.FieldSet',
        'Ext.field.Text',
        'Ext.field.TextArea'
    ],
    
    shadow: true,
    cls: 'demo-solid-background',
    id: 'basicform',
    items: {
        xtype: 'fieldset',
        defaults: {
            labelAlign: 'top'
        },
        items: [
            {
                    xtype: 'textfield',
                    name: 'nama',
                    label: 'Nama Masakan',
                    placeHolder: 'Nama Makanan',
                    autoCapitalize: true,
                    required: true,
                    clearIcon: true,
                    id:'nama'
                },
            {
                    xtype: 'textfield',
                    name: 'jenis',
                    label: 'Jenis Masakan',
                    placeHolder: 'Mie',
                    autoCapitalize: true,
                    required: true,
                    clearIcon: true,
                    id:'jenis'
                },
            {
                    xtype: 'textareafield',
                    name: 'bahan',
                    label: 'Bahan',
                    //placeHolder: 'Nama Makanan',
                    autoCapitalize: true,
                    required: true,
                    clearIcon: true,
                    id:'bahan'
                },
            {
                    xtype: 'textareafield',
                    name: 'cara',
                    label: 'Cara Memasak',
                    //placeHolder: 'Nama Makanan',
                    autoCapitalize: true,
                    required: true,
                    clearIcon: true,
                    id:'cara'
                },
             {
                    xtype: 'textfield',
                    name: 'gambar',
                    label: 'Gambar',
                    placeHolder: 'namaGambar.jpg',
                    autoCapitalize: true,
                    required: true,
                    clearIcon: true,
                    id:'gambar'
                },
            {
            xtype: 'button',
            reference: 'button',
            ui:'action',
            text: 'Add',
            formBind: true,
            margin: '0 0 16 0',
            handler:'onAdd'
            },
            {
            xtype: 'button',
            reference: 'button',
            ui:'action',
            text: 'Reset',
            margin: '0 0 16 0',
            handler: function(){
                document.getElementById("formresep").reset();            }
            }

        ]
    }
});