/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('dapurkost.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },
    
    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },
     onSearch: function(){
        keyword = Ext.getCmp('search').getValue();
        personnelStore = Ext.getStore('personnel');
        personnelStore.filter('nama', keyword);
    },

    onInputChange: function(newValue, oldValue){
        keyword = Ext.getCmp('search').getValue();
        personnelStore = Ext.getStore('personnel');
        personnelStore.filter('nama', keyword);
    },
    onAdd: function(){
        var  nama, jenis, bahan,caramasak,gambar,store;
        nama = Ext.getCmp('nama').getValue();
        jenis = Ext.getCmp('jenis').getValue();
        bahan = Ext.getCmp('bahan').getValue();
        caramasak = Ext.getCmp('cara').getValue();
        gambar = Ext.getCmp('gambar').getValue();

        store = Ext.getStore('personnel');
        store.beginUpdate();
        store.insert(0, {'nama':nama, 'jenis':jenis, 'bahan':bahan, 'caramasak':caramasak,'gambar':gambar});
        store.endUpdate();
        alert("Data Sudah Di Buat :)");
        console.log('store: ', store); 
}
});
