const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const { id } = request.body;

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();

            if(!ong){
                return response.status(400).json({ error: 'Nois n ta teno conhecimento deesa Ong ai n chefe. Cpa q o ID ta errado em.'})
            }

            return response.json(ong); 
    }
}