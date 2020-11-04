/**
 * This view is an example list of people.
 */
Ext.define('dapurkost.view.main.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',
    id: 'listnama',

    requires: [
        'dapurkost.store.Personnel',
    ],

    title: 'Data Siswa',
    plugins: {
        type: 'grideditable',
        triggerEvent: 'doubletap',
        enableDeleteButton: true,
        formConfig: null, // See more below

        defaultFormConfig: {
            xtype: 'formpanel',
            scrollable: true,
            items: {
                xtype: 'fieldset'
            }
        },

        toolbarConfig: {
            xtype: 'titlebar',
            docked: 'top',
            items: [{
                xtype: 'button',
                ui: 'decline',
                text: 'Batal',
                align: 'left',
                action: 'cancel'
            }, {
                xtype: 'button',
                ui: 'confirm',
                text: 'Simpan',
                align: 'right',
                action: 'submit'
            }]
        }
    },
    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Name',  dataIndex: 'nama', width: 170, editable: true}

    ]
    /*listeners: {
        select: 'onItemSelected'
    },*/
});
