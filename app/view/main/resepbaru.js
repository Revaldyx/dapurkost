Ext.define('dapurkost.view.main.resepbaru', {
    extend: 'Ext.form.Panel',
    xtype: 'label',
    id: 'buatresep',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Text',
        'Ext.field.TextArea'
    ],

    shadow: true,
    cls: 'demo-solid-background',
    items: {
        xtype: 'fieldset',
        defaults: {
            labelAlign: 'top'
        },
        items: [
            {
                xtype: 'textfield',
                label: 'Title',
                labelAlign: 'placeholder'
            },
            {
                xtype: 'textfield',
                label: 'Price',
                labelAlign: 'placeholder'
            },
            {
                xtype: 'textfield',
                label: 'Specific Location (optional)',
                labelAlign: 'placeholder'
            },
            {
                xtype: 'textareafield',
                label: 'Description',
                labelAlign: 'placeholder'
            }
        ]
    }
});