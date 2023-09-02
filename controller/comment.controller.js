const db = require('../db');

class CommentController {
    async createComment(req, res) {
        const { content, user_id, post_id } = req.body;
        const newComment = await db.query(`INSERT INTO comments (content, user_id, post_id) VALUES ($1, $2, $3) RETURNING *`, [content, user_id, post_id]);
        res.json(newComment.rows[0]);
    }

    async getCommentsByPost(req, res) {
        const post_id = req.query.post_id;
        const comments = await db.query(`SELECT c.*, p.title AS post_title, u.name AS user_name 
                                         FROM comments c
                                         JOIN posts p ON c.post_id = p.id
                                         JOIN person u ON c.user_id = u.id
                                         WHERE c.post_id = $1`, [post_id]);
        res.json(comments.rows);
    }
}

module.exports = new CommentController();
