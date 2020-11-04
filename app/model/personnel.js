Ext.define('dapurkost.model.Personnel', {
    
    extend: 'Ext.data.Model',
    fields: [
        { name: 'nama', type: 'string' },
        { name: 'jenis', type: 'string' },
        { name: 'bahan', type: 'string' },
        { name: 'caramasak', type: 'string' },
        { name: 'gambar', type: 'string' },
        { name: 'link', type: 'string' }
    ]

});