'use strict';

const Controller = require('egg').Controller;
class HomeController extends Controller {
  async index() {
    const data = await this.app.mysql.get('blog_content', {});
    this.ctx.body = data;
  }
  async getArticleList() {
    let sql = 'SELECT article.id as id,'+
      'article.title as title,'+
      'article.introduce as introduce,'+
      "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s' ) as addTime,"+
      'article.view_count as view_count ,'+
      '.type.typeName as typeName '+
      'FROM article LEFT JOIN type ON article.type_id = type.Id';
    const results = await this.app.mysql.query(sql);
    this.ctx.body = { data: results };
  }
  async getArticleById() {
        //先配置路由的动态传值，然后再接收值
        let id = this.ctx.params.id

        let sql = 'SELECT article.id as id,'+
        'article.title as title,'+
        'article.introduce as introduce,'+
        "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s' ) as addTime,"+
        'article.view_count as view_count ,'+
        'article.article_content as article_content,'+
        'type.typeName as typeName ,'+
        'type.id as typeId '+
        'FROM article LEFT JOIN type ON article.type_id = type.Id '+
        'WHERE article.id='+id
        const result = await this.app.mysql.query(sql)
        console.log(result)
        this.ctx.body={data:result}
  }
  // 得到类别名称和编号
  async getTypeInfo() {
    const result = await this.app.mysql.select('type');
    this.ctx.body = { data: result };
  }
  // 根据类别ID获得文章列表
  async getListById() {
    const id = this.ctx.params.id;
    const sql = 'SELECT article.id as id,' +
    'article.title as title,' +
    'article.introduce as introduce,' +
    "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s' ) as addTime," +
    'article.view_count as view_count ,' +
    'type.typeName as typeName ' +
    'FROM article LEFT JOIN type ON article.type_id = type.Id ' +
    'WHERE type_id=' + id;
    const result = await this.app.mysql.query(sql);
    this.ctx.body = { data: result };

  }
}
module.exports = HomeController;
