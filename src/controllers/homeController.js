var path = require('path');
const Cellphones = require(path.join(__dirname, '..', 'models/phones'))

const homeController={
    index: async(req, res) => {
        res.json(Cellphones)
      },

    // filtro: async(req, res) =>{
    //   let qs = req.query
    //   const phones = await Phone.find({
    //     title: /qs/i
    // }).exec(function(err, phones) {
    //     if (err) throw err;
         
    //     console.log(phones);
        
    // });
    // res.json(phones);
    // },
/* 
    phone: async(req, res) => {
        const phone = await Phone.findById(req.params.id);
        console.log("llego")
        res.json(phone)},

    nuevo_audio:    async(req, res) => {
            const { titulo } = req.body;
            const phone = new Phone({ titulo });
            console.log(phone);
            await phone.save(); 
            res.json({status: 'phone guardado'});
        },

    editar_audio: async(req, res) => {
        const { titulo } = req.body;
        const newAudio = {titulo};
        await Phone.findByIdAndUpdate(req.params.id, newAudio)
        res.json({status: 'phone actualizado'});
      }, 

    eliminar : async(req, res) => {
        await Phone.findByIdAndRemove(req.params.id);
        res.json({status: 'phone eliminado'});
      }
     */
}

module.exports = homeController;