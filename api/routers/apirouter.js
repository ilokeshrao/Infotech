const express = require('express');
const router = express.Router();
const personController = require('../controllers/personcontroller');
const regController = require('../controllers/regcontroller');
const messageController = require('../controllers/messagecontroller');
const numberController = require('../controllers/numbercontroller');





router.post('/addrecord', personController.add);

router.get('/alldata', personController.alldata);

router.put('/dataupdate/:id', personController.dataupdate);

router.delete('/datadelete/:id', personController.datadelete);

router.post('/', personController.login);

router.post('/reg', regController.register);

router.post('/logincheck', regController.logincheck);

router.post('/updatepassword', regController.updatePassword);

router.post('/messages/add', messageController.addMessage);

router.get('/messages', messageController.getMessages);

router.delete('/messages/:id', messageController.deleteMessage);

router.post('/adddigit', numberController.addDigit);

router.get('/getdigits', numberController.getDigits);

router.put('/updatedigit/:id', numberController.updateDigit);

router.delete('/deletedigit/:id', numberController.deleteDigit);

router.delete('/deletealldigits', numberController.deleteAllDigits);






module.exports = router;
