Ext.define('MyApp.view.productcard.ProductCard', {
    extend: 'Ext.form.Panel',
    xtype: 'productCard',
    layout: 'anchor',
    padding: 10,
    frame: true,
    defaults: {
        xtype: 'textfield',
        labelWidth: 100,
        anchor: '100%',
        allowBlank: false
    },
    items: [
        {
            xtype: 'displayfield',
            fieldLabel: 'ID',
            name: 'id',
            value: '',
            renderer: function (value) {
                return value || 'Не задано';
            }
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Имя',
            name: 'name',
            value: '',
            renderer: function (value) {
                return value || 'Не задано';
            }
        },
        {
            xtype: 'numberfield',
            fieldLabel: 'Цена',
            name: 'price',
            minValue: 0,
            allowDecimals: true,
            keyNavEnabled: false,
            mouseWheelEnabled: false,
        },
        {
            xtype: 'numberfield',
            fieldLabel: 'Кол-во',
            name: 'quantity',
            minValue: 0,
            allowDecimals: false,
            keyNavEnabled: false,
            mouseWheelEnabled: false,
        }
    ],
    buttons: [
        {
            text: 'Отмена',
            handler: function (btn) {
                const productCard = btn.up('form');
                const grid = productCard.grid;

                productCard.destroy();
                grid.show();
            }
        },
        {
            text: 'Сохранить',
            formBind: true,
            handler: function (btn) {
                const productCard = btn.up('form');
                const grid = productCard.grid;
                const record = productCard.record;
                const form = productCard.getForm();


                const newData = form.getValues();
                const hasChanges = Object.keys(newData).some(key => newData[key] != record.get(key));

                if (hasChanges) {
                    Ext.Msg.confirm('Подтверждение', 'Есть измененные данные. Сохранить изменения?', function (choice) {
                        if (choice === 'yes') {
                            record.set(newData);
                            productCard.destroy();
                            grid.show();
                        }
                    });
                } else {
                    productCard.destroy();
                    grid.show();
                }
            }
        }
    ],
    initComponent: function () {
        this.title = 'Карточка товара: ' + (this.record ? this.record.get('name') : '');
        this.callParent(arguments);
    },
});
