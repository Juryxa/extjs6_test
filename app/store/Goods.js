Ext.define('MyApp.store.Goods', {
    extend: 'Ext.data.Store',

    alias: 'store.goods',
    pageSize: 4,

    fields: ['id', 'name', 'description', 'price', 'quantity'],

    data: { items: [
            { id: 1, name: 'Notebook Lenovo', description: 'Ноутбук ThinkPad T460', price: 100.5, quantity: 2 },
            { id: 2, name: 'Keyboard OKLICK', description: 'Клавиатура OKLICK', price: 50, quantity: 8 },
            { id: 3, name: 'Network Adapter', description: 'Сетевой адаптер', price: 7, quantity: 0 },
        ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});