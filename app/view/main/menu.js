Ext.define('dapurkost.view.main.menu', {
    extend: 'Ext.Panel',
    requires: [
            'Ext.Menu',
            'dapurkost.view.main.dataview',
            'dapurkost.view.main.MainController',
            'dapurkost.view.main.List',
            'Ext.ActionSheet'
    ],
    xtype : 'menus',
    id: 'idmenus',
    shadow: true,
    defaults: {
        xtype : 'button',
        cls   : 'demobtn',
    },
    items: [
        {   
                iconCls: 'x-fa fa-bars',
                handler: function() {
                Ext.Viewport.toggleMenu('left');
            }
        },{
            text: 'dapurkost',
            margin: '0 65 0 65',
            handler: function() {
                if (!this.overlay) {
                    this.overlay = Ext.Viewport.add({
                        xtype: 'panel',
                        floated: true,
                        modal: true,
                        hideOnMaskTap: true,
                        showAnimation: {
                            type: 'popIn',
                            duration: 250,
                            easing: 'ease-out'
                        },
                        hideAnimation: {
                            type: 'popOut',
                            duration: 250,
                            easing: 'ease-out'
                        },
                        centered: true,
                        width: Ext.filterPlatform('ie10') ? '100%' : (Ext.os.deviceType == 'Phone') ? 260 : 400,
                        maxHeight: Ext.filterPlatform('ie10') ? '30%' : (Ext.os.deviceType == 'Phone') ? 220 : 400,
                        styleHtmlContent: true,
                        html: '<p>Aplikasi Resep Anak Kost Paling Joss.<br>'+
                        'Dibuat dari bulan September</p>',
                        header: {
                            title: '<i class="fa fa-info-circle"> About</i>'
                        },
                        scrollable: true
                    });
                }

                this.overlay.show();
            }
        },{   
                iconCls: 'x-fa fa-plus',
                handler: function() {
                    document.getElementById("idmenus").style.display = 'block';
                    document.getElementById("buatresep").style.display = 'block';
                    document.getElementById("dataview_makanan").style.display = 'none';
                    document.getElementById("listnama").style.display = 'none';
                    document.getElementById("tes").style.display = 'none';
                }
            }

    ],

    initialize: function() {
            Ext.Viewport.setMenu(this.getMenuCfg('left'), {
            side: 'left',
            reveal: true
        });
    },

    doDestroy: function() {
        Ext.Viewport.removeMenu('left');
        this.callParent();
    },

    getMenuCfg: function(side) {
        return {
            items: [{
                text: 'Menu Baru',
                iconCls: 'x-fa fa-star',
                scope: this,
                handler: function() {
                    Ext.Viewport.hideMenu(side);
                    document.getElementById("idmenus").style.display = 'block';
                    document.getElementById("dataview_makanan").style.display = 'block';
                    document.getElementById("dataview_favorit").style.display = 'none';
                    document.getElementById("tes").style.display = 'none';
                    document.getElementById("buatresep").style.display = 'none';
                    document.getElementById("formresep").style.display = 'none';
                }
            }, {
                text: 'Favorit',
                iconCls: 'x-fa fa-heart',
                scope: this,
                handler: function() {
                    Ext.Viewport.hideMenu(side);
                    document.getElementById("dataview_favorit").style.display = 'block';
                    document.getElementById("dataview_makanan").style.display = 'none';
                    document.getElementById("idmenus").style.display = 'block';
                    document.getElementById("tes").style.display = 'none';
                    document.getElementById("formresep").style.display = 'none';
                }
            }, {
                text: 'Resep Baru',
                iconCls: 'x-fa fa-plus',
                scope: this,
                handler: function() {
                    Ext.Viewport.hideMenu(side);
                    document.getElementById("dataview_favorit").style.display = 'none';
                    document.getElementById("dataview_makanan").style.display = 'none';
                    document.getElementById("idmenus").style.display = 'block';
                    document.getElementById("tes").style.display = 'none';
                    document.getElementById("formresep").style.display = 'block';
                }
                },{
                text: 'Setelan',
                iconCls: 'x-fa fa-gear ',
                scope: this,
                handler: function() {
                    Ext.Viewport.hideMenu(side);
                    document.getElementById("dataview_favorit").style.display = 'none';
                    document.getElementById("dataview_makanan").style.display = 'none';
                    document.getElementById("idmenus").style.display = 'block';
                    document.getElementById("tes").style.display = 'none';
                    document.getElementById("useratur").style.display = 'block';
                }
            },{
                text: 'Tentang',
                iconCls: 'x-fa fa-info-circle',
                scope: this,
                handler: function() {
                    Ext.Viewport.hideMenu(side);
                }
            },{
                text: 'Logout',
                iconCls: 'x-fa fa-sign-out',
                scope: this,
                handler: function() {
                    Ext.Viewport.hideMenu(side);
                }
            }]
        };
    }
});