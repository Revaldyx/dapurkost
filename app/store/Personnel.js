Ext.define('dapurkost.store.Personnel', {
    extend: 'Ext.data.Store',
    storeId: 'personnel',
    alias: 'store.personnel',
    autoLoad:true,
    autoSync: true,

        model: 'dapurkost.model.Personnel',

    proxy: {
        type: 'jsonp',
        api:{
            read:"http://localhost/dapurkost_app/beranda.php",
            create:"http://localhost/dapurkost_app/tambahresep.php",
            update  : "http://localhost/MyApp_php/updatePersonnel.php",
            destroy  : "http://localhost/MyApp_php/removePersonnel.php"
        },
        reader:{
            type:'json',
            rootProperty:'items',
            messageProperty: 'error',
            url: 'simpsons'

        }

    }
});
