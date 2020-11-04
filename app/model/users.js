Ext.define('dapurkost.model.users', {
    
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'number' },
        { name: 'nama', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'password', type: 'string' }
]
});