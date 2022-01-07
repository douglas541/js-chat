const messages = [];

module.exports = {
   sendMessage(req, res) {
      if (req.body.name && req.body.message) {
         messages[messages.length] = req.body.name + ': ' + req.body.message;

         return res.json({
            messages
         });
      }
      return res.send(204, 'No Content');
   }
}
