Ext.define('dapurkost.store.favorit', {
    extend: 'Ext.data.Store',
    storeId: 'favorit',
    alias: 'store.favorit',
    fields: [
        'nama','gambar','jenis'
    ],
        autoLoad:true,

    proxy: {
        type: 'jsonp',
        api:{
            read:"http://localhost/dapurkost_app/favorit.php"
        },
        reader:{
            type:'json',
            rootProperty:'data',
            headers: { 'Content-Type': 'application/json; charset=UTF-8' }

        }

    }
});
