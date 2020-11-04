Ext.define('dapurkost.store.user', {
    extend: 'Ext.data.Store',
    storeId: 'user',
    alias: 'store.user',
    
    model:'dapurkost.model.users',

        autoLoad:true,
        autoSync: true,

    proxy: {
        type: 'jsonp',
        api:{
            read:"http://localhost/dapurkost_app/user.php"
        },
        reader:{
            type:'json',
            rootProperty:'items',
        }

    }
});
