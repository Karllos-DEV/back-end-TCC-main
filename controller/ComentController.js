const conn = require('../db/conn');

const read = (request, response) => {
  conn('tab_coment')
    .select()
    .then((dados) => {
      response.json(dados);
    })
    .catch((error) => {
      response.status(500).json({
        error: 'Erro ao buscar os Comentários no banco de dados!',
      });
    });
};

const create = (request, response) => {
    const { comentario } = request.body;
    const { postId } = request.params; // Alterado para obter o postId dos parâmetros da rota
    const nome = request.user.nome; // Substituir por como você obtém o nome do usuário a partir do token
  
    let errors = [];
  
    if (!comentario) {
      errors.push({ error: 'Comentário não fornecido' });
    }
  
    if (errors.length > 0) {
      return response.status(400).json(errors);
    }
  
    conn('tab_coment')
      .insert({
        nome,
        comentario,
        postId,
      })
      .then((_) => {
        response.json({ msg: 'Comentário realizado com sucesso!' });
      })
      .catch((error) => {
        response.status(500).json({
          error: 'Erro ao inserir o Comentário ',
        });
      });
  };

const readById = (request, response) => {
  const postId = Number(request.params.postId);

  conn('tab_coment')
    .where({ postId })
    .then((coments) => {
      response.status(200).json(coments);
    })
    .catch((error) => {
      response.status(500).json({
        error: 'Erro ao buscar os Comentários no banco de dados!',
      });
    });
};

const del = (request, response) => {
  const commentId = Number(request.params.commentId);
  conn('tab_coment')
    .del()
    .where({ id: commentId })
    .then((_) => {
      response.status(200).json({ msg: 'O Comentário foi excluído!' });
    })
    .catch((error) => {
      response.status(500).json({
        error: 'Erro ao excluir o Comentário do banco de dados!',
      });
    });
};

module.exports = { read, create, readById, del };
 