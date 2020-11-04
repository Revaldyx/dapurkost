Ext.define('dapurkost.view.main.Main', 
{
    extend: 'Ext.Container',
    xtype: 'app-main',
    layout: 'vbox',
    requires: [
            'dapurkost.view.main.favorit',
            'dapurkost.view.main.dataview',
            'dapurkost.view.main.menu',
            'dapurkost.view.main.List',
            'dapurkost.view.main.resepbaru',
            'dapurkost.view.main.resep',
            'dapurkost.view.main.formresep',
            'dapurkost.view.main.useratur'
            ],

    controller: 'main',
    viewModel: 'main',
    items: [
        {
            style: 'display: block',
            xtype: 'menus'
        },
        {
            style: 'display: block',
            id: 'dataview_makanan',
            xtype: 'form2'
        },
        {
            style: 'display: block',
            id: 'dataview_favorit',
            xtype: 'form1'
        },
        {
            style: 'display: none',
            id: 'tes',
            xtype: 'home'
        },
        {
            style: 'display: none',
            id: 'buatresep',
            xtype: 'label'
        },
        {
            style: 'display: none',
            id: 'formresep',
            xtype: 'placeholderlabel'
        },
        {
            style: 'display: none',
            id: 'useratur',
            xtype: 'useratur'
        }
    ]
});
