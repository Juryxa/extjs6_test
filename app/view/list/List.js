Ext.define('MyApp.view.list.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
    controller: 'mainlist',
    requires: [
        'MyApp.store.Goods',
        'Ext.grid.Panel',
        'MyApp.view.list.ListController',
        'Ext.form.field.Text',
        'Ext.toolbar.Toolbar',
        'MyApp.view.productcard.ProductCard'
    ],

    title: 'Список товаров',

    store: {
        type: 'goods'
    },

    tbar: {
        xtype: 'container',
        layout: {
            type: 'vbox',
            align: 'stretchmax'
        },
        defaults: {
            margin: '10',
            labelAlign: 'left'
        },
        items: [
            {
                xtype: 'textfield',
                fieldLabel: 'ID',
                name: 'filterById',
                emptyText: 'Введите фильтр...',
                enableKeyEvents: true,
                listeners: {
                    specialkey: 'onFilterEnter'
                }
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Описание',
                name: 'filterByDescription',
                emptyText: 'Введите фильтр...',
                enableKeyEvents: true,
                listeners: {
                    specialkey: 'onFilterEnter'
                }
            }
        ]
    },

    columns: [
        {text: 'ID', dataIndex: 'id', flex: 1},
        {text: 'Имя', dataIndex: 'name', flex: 1},
        {text: 'Описание', dataIndex: 'description', flex: 1},
        {text: 'Цена', dataIndex: 'price', flex: 1},
        {
            text: 'Кол-во',
            dataIndex: 'quantity',
            flex: 1,
            renderer: function (value, metaData) {
                if (value === 0) {
                    metaData.style = 'background-color: red;';
                }
                return value;
            }
        }
    ],

    listeners: {
        cellclick: 'onCellClick'
    }
});
